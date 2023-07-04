import { ReactNode } from 'react'

export function MenuNavContainer({
  isActiveMobileMenu = false,
  isMobile = false,
  children,
}: {
  isActiveMobileMenu?: Boolean
  isMobile?: Boolean
  children: ReactNode
}) {
  return isMobile ? (
    <div
      className={`${
        isActiveMobileMenu ? '' : 'z-[100] hidden'
      } h-screen max-w-[70vw] bg-gray-50 shadow-2xl`}
    >
      {children}
    </div>
  ) : (
    <div className={`h-screen bg-gray-50 shadow-2xl`}>{children}</div>
  )
}
