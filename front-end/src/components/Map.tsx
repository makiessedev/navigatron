/* eslint-disable no-undef */
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  useLoadScript,
} from '@react-google-maps/api'

import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { MapContext, useMapContext } from '@/Context/useMapContext'
import { Combobox, ComboboxInput } from '@reach/combobox'

export function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAmS5aPq50VpSPqmKnXPNfNRD14ArJU-ZQ',
    libraries: ['places'],
  })

  const [response, setResponse] = useState<google.maps.DirectionsResult | null>(
    null,
  )
  const [origin, setOrigin] = useState<google.maps.LatLngLiteral | string>()
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

  const { office, setOffice, options, center, mapRef, onLoad } =
    useContext(MapContext)

  function directionsCallback(response) {
    console.log(response)

    if (response !== null) {
      if (response.status === 'OK') {
        setResponse(response)
      } else {
        console.log('response: ', response)
      }
    }
  }

  const renderMap = () => {
    return (
      <>
        <Combobox
          onSelect={() => {}}
          className="absolute left-[200px] top-4 z-50"
        >
          <ComboboxInput
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value)
            }}
            className="w-full p-1"
            placeholder="Pesquisa seu destino"
          />
          {/* <ComboboxPopover className="bg-blue-900">
        <ComboboxList>
          {status === 'OK' &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover> */}
        </Combobox>
        <GoogleMap
          mapContainerClassName="w-full h-screen"
          zoom={7}
          center={{ lat: -3.745, lng: -38.523 }}
          options={options}
          onLoad={onLoad}
        >
          {destination !== '' && origin !== '' && (
            <DirectionsService
              // required
              options={{
                // eslint-disable-line react-perf/jsx-no-new-object-as-prop
                destination,
                origin,
                travelMode: 'DRIVING',
              }}
              // required
              callback={directionsCallback}
              // optional
              onLoad={(directionsService) => {
                console.log(
                  'DirectionsService onLoad directionsService: ',
                  directionsService,
                )
              }}
              // optional
              onUnmount={(directionsService) => {
                console.log(
                  'DirectionsService onUnmount directionsService: ',
                  directionsService,
                )
              }}
            />
          )}

          {response !== null && (
            <DirectionsRenderer
              // required
              options={{
                // eslint-disable-line react-perf/jsx-no-new-object-as-prop
                directions: response,
              }}
              // optional
              onLoad={(directionsRenderer) => {
                console.log(
                  'DirectionsRenderer onLoad directionsRenderer: ',
                  directionsRenderer,
                )
              }}
              // optional
              onUnmount={(directionsRenderer) => {
                console.log(
                  'DirectionsRenderer onUnmount directionsRenderer: ',
                  directionsRenderer,
                )
              }}
            />
          )}
          {response !== null && (
            <DirectionsRenderer
              // required
              options={{
                directions: response,
              }}
              // optional
              onLoad={(directionsRenderer) => {
                console.log(
                  'DirectionsRenderer onLoad directionsRenderer: ',
                  directionsRenderer,
                )
              }}
              // optional
              onUnmount={(directionsRenderer) => {
                console.log(
                  'DirectionsRenderer onUnmount directionsRenderer: ',
                  directionsRenderer,
                )
              }}
            />
          )}
        </GoogleMap>
      </>
    )
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <p>Não carregou</p>
}
