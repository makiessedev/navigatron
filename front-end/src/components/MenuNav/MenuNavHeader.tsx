import { User } from 'lucide-react'
import Link from 'next/link'

export function MenuNavHeader() {
  return (
    <section className="relative flex h-[35vh] w-full flex-col items-start justify-center gap-3 overflow-hidden bg-blue-900 p-[14px]">
      <User className="z-50 h-[84px] w-[84px] rounded-full bg-[#546e7a] p-4 text-blue-900 " />
      <p className="z-50 max-w-full text-lg leading-snug text-gray-100">
        <Link href="/account" className="z-0 block underline">
          Faça Login
        </Link>
        & salve suas rotas
      </p>
      <div className="absolute -top-[210px] left-[-59px]  h-[300px] w-[300px] rounded-full bg-[#1f2056]/80" />
      <div className="absolute -top-[45%] left-[-50%]  h-[300px] w-[300px] rounded-full bg-[#1f2056]/80" />
    </section>
  )
}
