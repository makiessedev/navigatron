/* eslint-disable no-undef */
import { useMapContext } from '@/Context/useMapContext'
import {
  Marker,
  GoogleMap,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
} from '@react-google-maps/api'
import { useMemo } from 'react'

export function Map() {
  const { center, onLoad, options, office, directions, setDirections } =
    useMapContext()

  const houses = useMemo(() => generateHouses(center), [center])

  const fetchDirections = (house: google.maps.LatLngLiteral) => {
    if (!office) return null

    const service = new google.maps.DirectionsService()
    service.route(
      {
        origin: house,
        destination: office,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === 'OK' && result) {
          setDirections(result)
        }
      },
    )
  }

  return (
    <>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="h-screen w-full"
        options={options}
        onLoad={onLoad}
      >
        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{
              polylineOptions: {
                zIndex: 50,
                strokeColor: '#1976d2',
                strokeWeight: 5,
              },
            }}
          />
        )}
        {office && (
          <>
            <Marker position={office} />

            <MarkerClusterer>
              {(clusterer) => (
                <>
                  {houses.map((house) => (
                    <Marker
                      key={house.lat}
                      position={house}
                      clusterer={clusterer}
                      onClick={() => {
                        fetchDirections(house)
                      }}
                    />
                  ))}
                </>
              )}
            </MarkerClusterer>

            <Circle center={office} radius={15000} options={closeOptions} />
            <Circle center={office} radius={30000} options={middleOptions} />
            <Circle center={office} radius={45000} options={farOptions} />
          </>
        )}
      </GoogleMap>
    </>
  )
}

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
}

export const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: '#8BC34A',
  fillColor: '#8BC34A',
}

export const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: '#fbc02d',
  fillColor: '#fbc02d',
}

export const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: '#ff5252',
  fillColor: '#ff5252',
}

const generateHouses = (position: google.maps.LatLngLiteral) => {
  // eslint-disable-next-line no-unused-vars
  const _houses: Array<google.maps.LatLngLiteral> = []

  for (let i = 0; i < 100; i++) {
    const direction = Math.random() < 0.5 ? -2 : 3
    _houses.push({
      lat: position.lat + Math.random() / direction,
      lng: position.lng + Math.random() / direction,
    })
  }

  return _houses
}
