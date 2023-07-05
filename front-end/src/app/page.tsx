/* eslint-disable no-undef */
'use client'
import { SaveRouterButton } from '@/components/SaveRouteButton'
import { useMapContext } from '@/Context/useMapContext'
import { Places } from '@/components/Places'
import { Distance } from '@/components/Distance'

export default function Home() {
  const { setOffice } = useMapContext()

  const { mapRef, office, directions } = useMapContext()

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
