import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
  type?: string
}

export function Input({ label, id, type = 'text', ...rest }: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block  text-gray-600">
        {label}
      </label>
      <input
        {...rest}
        type={type}
        id={id}
        className="h-11 w-full rounded-md border border-gray-100 px-5 shadow placeholder:text-lg"
      />
    </div>
  )
}
