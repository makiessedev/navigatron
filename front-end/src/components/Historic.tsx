import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import CurrentLocationIcon from '@/assets/Current.svg'
import DestinyIcon from '@/assets/Destino.svg'

export function Historic() {
  return (
    <div className="rounded-md border border-blue-500/40 bg-white shadow-lg">
      <ul className="mx-auto space-y-3 p-4 shadow-sm">
        <li className="flex items-center space-x-2">
          <Image src={CurrentLocationIcon} alt="" />
          <Link href="##" className="text-[#242E42]">
            Camama, deskontão
          </Link>
        </li>
        <li className="flex items-center space-x-2">
          <Image src={DestinyIcon} alt="" />
          <Link href="##" className="text-[#242E42]">
            Talatona, Hotel royal plaza
          </Link>
        </li>
      </ul>
      <section className="flex items-center justify-around border-t border-gray-100 shadow-sm">
        <dl className="h-auto w-[50%] py-2 text-center text-lg text-gray-600">
          <dt className="text-sm text-[#C8C7CC]">DISTÂNCIA</dt>
          <dd className="text-lg">5 KM</dd>
        </dl>
        <dl className="h-auto w-[50%] py-2 text-center text-lg text-gray-600">
          <dt className="text-sm text-[#C8C7CC]">TEMPO</dt>
          <dd>30 MIN</dd>
        </dl>
      </section>
      <nav className="flex items-center justify-around border-t border-gray-100 shadow-md">
        <p className="h-auto w-[50%] py-3 text-center text-lg text-gray-600">
          Junho, 05 / 2023
        </p>
        <Link
          href="/account/create"
          className="h-auto w-[50%] py-3 text-center text-lg text-blue-500"
        >
          Ver no mapa
          <ArrowRight className="inline pl-1" />
        </Link>
      </nav>
    </div>
  )
}
