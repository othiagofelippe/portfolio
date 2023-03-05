import { clsx } from 'clsx'
import { ReactNode } from 'react'

interface ButtonProps {
  backgroundColor: 'BLUE' | 'ORANGE' | 'PURPLE'
  hasIcon?: boolean
  children: ReactNode
}

export function Button({
  backgroundColor = 'ORANGE',
  hasIcon = false,
  children,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'cursor-pointer font-sans font-bold ring-blue-400 rounded text-white transition-colors text-sm px-4 py-2',
        {
          'bg-rose-400 hover:bg-rose-500': backgroundColor === 'ORANGE',
          'bg-blue-400 hover:bg-blue-500': backgroundColor === 'BLUE',
          'bg-github-400 hover:bg-github-500': backgroundColor === 'PURPLE',
          'flex items-center gap-2': hasIcon === true,
        },
      )}
    >
      {children}
    </button>
  )
}
