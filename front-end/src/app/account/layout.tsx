import { ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavigatronLog from '@/app/icon.png'
import { ArrowBigLeft } from 'lucide-react'

export default function AccountLayout({ children }: { children: ReactNode }) {
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
      <section className="z-10 h-auto w-[95%] rounded-md bg-white shadow-lg">
        <nav className="flex items-center justify-around shadow">
          <Link
            href="/account"
            className="h-auto w-[50%] py-7 text-center text-lg text-gray-600"
          >
            Login
          </Link>
          <Link
            href="/account/create"
            className="h-auto w-[50%] py-7 text-center text-lg text-gray-600"
          >
            Cadastrar
          </Link>
        </nav>
        {children}
        {/* 
        <p className="max-w-xs text-center text-sm text-gray-600">
          Ao iniciar você concorda com nossos termos e condições
        </p> */}
      </section>
    </div>
  )
}
