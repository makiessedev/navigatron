import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActiveMobileMenu: Boolean
}

export function ButtonOpenCloseMenu({
  isActiveMobileMenu,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`${
        isActiveMobileMenu && 'hidden'
      } shadown-custumized flex h-10 w-10 border-spacing-6 cursor-pointer items-center justify-center bg-gray-200`}
    />
  )
}
