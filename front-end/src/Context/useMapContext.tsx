/* eslint-disable no-undef */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  RefObject,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  useEffect,
} from 'react'
import { GoogleMap } from '@react-google-maps/api'

interface MapContextProps {
  mapRef: RefObject<GoogleMap | null | undefined>
  center: { lat: number; lng: number }
  options: any
  onLoad: (map: any) => void
  office: any
  setOffice: (position: any) => void
  directions: any
  setDirections: any
  origin: string
  destination: string
  setOrigin: (val: string) => void
  setDestination: Dispatch<SetStateAction<string>>
}

export const MapContext = createContext<MapContextProps>({} as MapContextProps)

export function MapProvider({ children }: { children: ReactNode }) {
  const mapRef = useRef<GoogleMap | null | undefined>()
  const center = useMemo(() => ({ lat: -3.745, lng: -38.523 }), [])
  const options = useMemo(
    () => ({
      mapId: process.env.NEXT_PUBLIC_MAP_ID,
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    [],
  )

  const onLoad = useCallback((map: any) => {
    mapRef.current = map
  }, [])

  const [office, setOffice] = useState<google.maps.LatLngLiteral>()

  const [directions, setDirections] = useState<google.maps.DirectionsResult>()

  const [origin, setOrigin] = useState<string>('')
  const [destination, setDestination] = useState<string>('')

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setOrigin(`${latitude},${longitude}`)
        },
        (error) => {
          console.error('Erro ao obter a localização atual:', error)
        },
      )
    } else {
      console.error('Geolocalização não é suportada no navegador.')
    }
  }, [])

  const value: MapContextProps = {
    mapRef,
    center,
    options,
    onLoad,
    office,
    setOffice,
    directions,
    setDirections,
    origin,
    destination,
    setDestination,
    setOrigin,
  }

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>
}


