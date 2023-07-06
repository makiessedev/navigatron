'use client'

import { MenuNav } from '@/components/MenuNav'
import { HistoryIcon, HomeIcon, LogOutIcon, SettingsIcon } from 'lucide-react'
import { Map } from '../Map'
import { ReactNode } from 'react'

export function LargeScreenDevice({ children }: { children: ReactNode }) {
  return (
    <div className={`m-0 flex h-screen`}>
      {/* [180px_500px_1fr] */}
      <div className="w-180px">
        <MenuNav.container>
          <MenuNav.header />
          <MenuNav.linksWrapper>
            <MenuNav.link icon={HomeIcon} href="/">
              Página inicial
            </MenuNav.link>
            <MenuNav.link icon={HistoryIcon} href="/historic">
              Histórico
            </MenuNav.link>
            <MenuNav.link icon={SettingsIcon} href="/">
              Difinições
            </MenuNav.link>
            <MenuNav.link icon={LogOutIcon} href="/">
              Sair
            </MenuNav.link>
          </MenuNav.linksWrapper>
        </MenuNav.container>
      </div>

      {/* content */}
      <div className="flex w-[25rem] flex-col items-center justify-around">
        {/* <div className="absolute top-7 z-50 flex w-full items-center justify-center space-x-3"> */}
        {children}
      </div>

      <div className="flex h-screen w-full flex-1">
        <Map />
      </div>
    </div>
  )
}
