'use client'

import { useActiveMobileMenu } from '@/Hooks/useActiveMobileMenu'
import { useMedia } from '@/Hooks/useMedia'
import { MenuNav } from '@/components/MenuNav'
import {
  HistoryIcon,
  HomeIcon,
  LogOutIcon,
  SettingsIcon,
  MenuIcon,
} from 'lucide-react'
import { useEffect, useState } from 'react'

export function SmallScreenDevice() {
  const isMobile = useMedia('(max-width: 820px)')
  const [isActiveMobileMenu, setIsActiveMobileMenu] = useActiveMobileMenu()
  const [previewURL, setPreviewURL] = useState<string | null>(null)

  const currentUrl = location.href

  useEffect(() => {
    if (previewURL !== currentUrl) {
      setPreviewURL(currentUrl)
      setIsActiveMobileMenu(false)
    }
  }, [currentUrl, setIsActiveMobileMenu, previewURL])

  return (
    <div className={`relative m-0 grid h-screen`}>
      {/* Nav grid-cols-[180px_500px_1fr] */}
      <MenuNav.container
        isMobile={isMobile}
        isActiveMobileMenu={isActiveMobileMenu}
      >
        <MenuNav.header />
        <MenuNav.linksWrapper>
          <MenuNav.link
            onClick={() => setIsActiveMobileMenu(false)}
            icon={HomeIcon}
            href="/"
          >
            Página inicial
          </MenuNav.link>
          <MenuNav.link icon={HistoryIcon} href="/historic">
            Histórico
          </MenuNav.link>
          <MenuNav.link icon={SettingsIcon} href="/r2">
            Difinições
          </MenuNav.link>
          <MenuNav.link icon={LogOutIcon} href="/">
            Sair
          </MenuNav.link>
        </MenuNav.linksWrapper>
      </MenuNav.container>

      {/* content */}

      <div
        className={`${
          isActiveMobileMenu && 'absolute -z-50 w-screen bg-gray-200 opacity-60'
        } h-screen`}
      >
        <div className="absolute top-7 z-50 flex w-full items-center justify-center space-x-3">
          {isMobile && (
            <MenuIcon
              onClick={() => setIsActiveMobileMenu(!isActiveMobileMenu)}
              className="w-10 cursor-pointer text-blue-900 shadow-md focus:animate-spin"
            />
          )}

          <input
            type="search"
            name="search"
            id="search"
            placeholder="Pesquisar local"
            className="h-10 rounded-full px-4 shadow-lg focus:outline-none"
          />
        </div>

        <div className="h-screen w-full">
          <iframe
            className="h-full w-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15767.330182993046!2d13.2548163!3d-8.89515585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2sao!4v1688304096798!5m2!1spt-PT!2sao"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <button className="absolute bottom-0 h-16 w-full bg-blue-900 text-gray-100 shadow-lg">
          Confirmar
        </button>
      </div>

      {/* map */}
      {/* <div className="absolute hidden bg-slate-950"></div> */}
    </div>
  )
}
