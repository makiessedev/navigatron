'use client'

import { Archivo, Archivo_Black } from 'next/font/google'
import { ReactNode } from 'react'

import './globals.css'
import { useMedia } from '@/Hooks/useMedia'
import { LargeScreenDevice } from '@/components/Responsive/LargeScreenDevice'
import { SmallScreenDevice } from '@/components/Responsive/SmallScreenDevice'
import { useLoadScript } from '@react-google-maps/api'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['600', '400'],
  variable: '--font-archivo',
})
const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-archivo-black',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  const isMobile = useMedia('(max-width: 820px)')
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'IzaSyBKIzh7T1VM_wdXMfMDTsz7xT42W4x0UEM',
    libraries: ['places'],
  })

  if (!isLoaded) return <p>Carregando...</p>
  return (
    <html lang="pt">
      <body
        className={`${archivo.variable} ${archivoBlack.variable} max-h-screen bg-gray-50 text-lg font-normal`}
      >
        {isMobile ? (
          <SmallScreenDevice />
        ) : (
          <LargeScreenDevice>{children}</LargeScreenDevice>
        )}
      </body>
    </html>
  )
}
