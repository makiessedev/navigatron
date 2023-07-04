'use client'
import { SaveRouterButton } from '@/components/SaveRouteButton'
import { SearchInput } from '@/components/SearchInput'
import Image from 'next/image'
import Link from 'next/link'
import CurrentLocationIcon from '@/assets/Current.svg'
import DestinyIcon from '@/assets/Destino.svg'

export default function Home() {
  return (
    <>
      <SearchInput />
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
            <dd className="text-lg">5 KM</dd>
          </dl>
          <dl className="h-auto w-[50%] py-2 text-center text-lg text-gray-600">
            <dt className="text-sm text-[#C8C7CC]">TEMPO</dt>
            <dd>30 MIN</dd>
          </dl>
        </section>
      </div>
      <SaveRouterButton />
    </>
  )
}
