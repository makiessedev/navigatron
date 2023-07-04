'use client'

import { useActiveMobileMenu } from '@/Hooks/useActiveMobileMenu'
import { useMedia } from '@/Hooks/useMedia'
import { ReactNode, createContext, useContext } from 'react'

interface MenuContextProps {
  isMobile: Boolean
  isActiveMobileMenu: Boolean
  setIsActiveMobileMenu: (value: Boolean) => void
}

export const MenuContext = createContext<MenuContextProps>({
  isMobile: true,
  isActiveMobileMenu: true,

  setIsActiveMobileMenu: () => {},
})

export const MenuStatus = ({ children }: { children: ReactNode }) => {
  const isMobile = useMedia('(max-width: 640px)')
  const [isActiveMobileMenu, setIsActiveMobileMenu] = useActiveMobileMenu()

  console.log(isMobile, isActiveMobileMenu, setIsActiveMobileMenu)

  return (
    <MenuContext.Provider
      value={{ isMobile, isActiveMobileMenu, setIsActiveMobileMenu }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export const useDeviceStatus = () => useContext(MenuContext)
