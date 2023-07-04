import { AnchorHTMLAttributes, ReactNode } from 'react'

interface LinksProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

export function MenuNavLinksWrapper({ children, ...rest }: LinksProps) {
  return (
    <nav {...rest} className="z-[100]">
      <ul className="space-y-3 p-4">{children}</ul>
    </nav>
  )
}
