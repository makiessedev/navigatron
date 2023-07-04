import { AnchorHTMLAttributes, ElementType, ReactNode } from 'react'
import Link from 'next/link'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  href: string
  icon: ElementType
}

export function MenuNavLink({
  children,
  href = '/',
  icon: Icon,
  ...rest
}: LinkProps) {
  return (
    <li>
      <Link
        href={href}
        {...rest}
        className="flex items-center gap-3 text-lg font-normal leading-10 text-blue-900"
      >
        <Icon className="" />
        {children}
      </Link>
    </li>
  )
}
