/* eslint-disable no-undef */
'use client'
import { SaveRouterButton } from '@/components/SaveRouteButton'
import { MapContext, useMapContext } from '@/Context/useMapContext'
import { Places } from '@/components/Places'
import { Distance } from '@/components/Distance'
import { useContext } from 'react'

export default function Home() {
  const { mapRef, office, directions, setOffice } = useContext(MapContext)

  return (
    <>
      <Places
        setOffice={(position) => {
          setOffice(position)
          mapRef.current?.panTo(position)
        }}
      />
      {!office && <p>Pesquise seu destino</p>}

      {directions && <Distance leg={directions.routes[0].legs[0]} />}

      <SaveRouterButton />
    </>
  )
}
