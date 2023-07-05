/* eslint-disable no-undef */
import {
  createContext,
  ReactNode,
  RefObject,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'
import { GoogleMap } from '@react-google-maps/api'

interface MapContextProps {
  mapRef: RefObject<GoogleMap | null>
  center: { lat: number; lng: number }
  options: any
  onLoad: (map: any) => void
  office: any
  setOffice: any
  directions: any
  setDirections: any
}

export const MapContext = createContext<MapContextProps>({} as MapContextProps)

export function MapProvider({ children }: { children: ReactNode }) {
  const mapRef = useRef<GoogleMap | null>(null)
  const center = useMemo(() => ({ lat: 43, lng: -80 }), [])
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

  const value: MapContextProps = {
    mapRef,
    center,
    options,
    onLoad,
    office,
    setOffice,
    directions,
    setDirections,
  }

  console.log({
    mapRef,
    center,
    options,
    onLoad,
    office,
    setOffice,
    directions,
    setDirections,
  })

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>
}

export const useMapContext = (): MapContextProps => {
  const mapContext = useContext(MapContext)

  return mapContext
}
