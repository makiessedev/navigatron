'use client'

import { ArrowBigLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import NavigatronLog from '@/app/icon.png'
import { Historic as HistoricComonent } from '@/components/Historic'

export default function Historic() {
  return (
    <div className="relative flex h-screen w-full flex-1 flex-col items-center justify-center pb-4">
      <div className="absolute top-0 flex h-[40%] w-full justify-center bg-blue-900 align-top">
        <Link href="/" className="absolute left-2 top-2">
          <ArrowBigLeft className="w-8 text-gray-100" />
        </Link>
        <Image
          src={NavigatronLog}
          alt="Logo do navigatron"
          className="h-40 w-40"
        />
      </div>
      <section className="items-between z-10 flex h-auto w-[95%] flex-col justify-between space-y-4 rounded-md">
        <HistoricComonent />
        <HistoricComonent />
      </section>
    </div>
  )
}
