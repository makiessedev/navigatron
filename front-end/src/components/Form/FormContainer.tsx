import { FormHTMLAttributes, ReactNode } from 'react'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
}

export function FormContainer({ children, ...rest }: FormProps) {
  return (
    <form {...rest} className="m-4 space-y-4">
      {children}
    </form>
  )
}
