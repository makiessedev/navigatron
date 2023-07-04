import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      type="submit"
      className="mt-3 h-11 w-full rounded-md bg-blue-900 text-gray-50 shadow-md"
    >
      {children}
    </button>
  )
}
