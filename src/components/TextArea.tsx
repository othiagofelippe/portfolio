import React from 'react'

interface TextAreaProps extends React.HtmlHTMLAttributes<HTMLTextAreaElement> {
  label: string
  placeholder: string
  className?: string
}

export function TextArea({ label, placeholder, ...rest }: TextAreaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-200 font-sans" htmlFor={label}>
        {label}
      </label>
      <textarea
        id={label}
        rows={8}
        className="block max-w-[35rem] px-4 py-4 text-gray-800 bg-gray-900 rounded placeholder-gray-400 focus-within:ring-2 ring-blue-400 text-gray-300 text-xs "
        placeholder={placeholder}
        {...rest}
      ></textarea>
    </div>
  )
}
