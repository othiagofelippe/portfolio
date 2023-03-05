import { ReactNode } from 'react'
import clsx from 'clsx'

interface ContainerProps {
  children: ReactNode
  backgroundColor: 'BLUE' | 'WHITE' | 'BLACK'
}

export function Container({ children, backgroundColor }: ContainerProps) {
  return (
    <div
      className={clsx(
        'max-w-[96rem] py-16 px-2 sm:px-10 md:px-[6.75rem] lg:py-32 lg:px-8  xl:px-[3.75rem] 2xl:px-[11.875rem]',
        {
          'bg-blue-500': backgroundColor === 'BLUE',
          'bg-white': backgroundColor === 'WHITE',
          'bg-gray-900': backgroundColor === 'BLACK',
        },
      )}
    >
      {children}
    </div>
  )
}
