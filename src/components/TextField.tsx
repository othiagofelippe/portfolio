import React from 'react'

interface TextFieldProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
  label: string
  type?: 'text' | 'email'
  placeholder: string
  className?: string
}

export function TextField({
  label,
  type = 'text',
  placeholder,
  ...rest
}: TextFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-200" htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        className="rounded h-12 py-4 px-3 sm:w-[16.25rem] w-full focus-within:ring-2 ring-blue-400 bg-gray-900 text-gray-300 text-xs placeholder:text-gray-400 outline-none"
        placeholder={placeholder}
        type={type}
        {...rest}
      />
    </div>
  )
}
