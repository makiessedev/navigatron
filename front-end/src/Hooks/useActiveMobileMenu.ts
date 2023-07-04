'use client'

import { useState } from 'react'

type ActiveMobileMenu = [
  isActiveMobileMenu: Boolean,
  setIsActiveMobileMenu: (value: Boolean) => void,
]

export function useActiveMobileMenu(): ActiveMobileMenu {
  const [isActiveMobileMenu, setIsActiveMobileMenu]: ActiveMobileMenu =
    useState<Boolean>(true)

  return [isActiveMobileMenu, setIsActiveMobileMenu]
}
