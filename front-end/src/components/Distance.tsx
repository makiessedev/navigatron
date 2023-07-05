/* eslint-disable no-undef */
import Image from 'next/image'
import Link from 'next/link'

import CurrentLocationIcon from '@/assets/Current.svg'
import DestinyIcon from '@/assets/Destino.svg'

const commutesPerYear = 260 * 2
// const litresPerKM = 10 / 100
// const gasLitreCost = 1.5
// const litreCostKM = litresPerKM * gasLitreCost
const secondsPerDay = 60 * 60 * 24

type DistanceProps = {
  leg: google.maps.DirectionsLeg
}

export function Distance({ leg }: DistanceProps) {
  if (!leg.distance || !leg.duration) return null

  const days = Math.floor(
    (commutesPerYear * leg.duration.value) / secondsPerDay,
  )

  // const cost = Math.floor(leg.distance.value / 1000) * litreCostKM * commutesPerYear

  return (
    <>
      <div className="rounded-md bg-white shadow-sm">
        <dl className="mx-auto space-y-3 p-4 shadow-sm">
          <dd className="flex items-center space-x-2">
            <dt className="text-sm text-[#C8C7CC]">Origem</dt>
            <Image src={CurrentLocationIcon} alt="" />
            <Link href="##" className="text-[#242E42]">
              Camama, deskontão
            </Link>
          </dd>
          <dd className="flex items-center space-x-2">
            <dt className="text-sm text-[#C8C7CC]">Destino</dt>
            <Image src={DestinyIcon} alt="" />
            <Link href="##" className="text-[#242E42]">
              Talatona, Hotel royal plaza
            </Link>
          </dd>
        </dl>

        <section className="flex items-center justify-around border-t border-gray-100 shadow-sm">
          <dl className="h-auto w-[50%] py-2 text-center text-lg text-gray-600">
            <dt className="text-sm text-[#C8C7CC]">DISTÂNCIA</dt>
            <dd className="text-lg">{leg.distance.text}</dd>
          </dl>
          <dl className="h-auto w-[50%] py-2 text-center text-lg text-gray-600">
            <dt className="text-sm text-[#C8C7CC]">TEMPO</dt>
            <dd>{days}</dd>
          </dl>
        </section>
      </div>
    </>
  )
}
