import { ReactNode } from 'react'

interface InterestItemProps {
  icon: ReactNode
  text: string
  title: string
  className?: string
}

export function InterestItem({
  text,
  title,
  icon,
  className,
}: InterestItemProps) {
  return (
    <div className={`w-[22.5rem] ${className}`}>
      <div className="flex items-center justify-center lg:justify-start gap-4">
        <p className="text-3xl sm:text-4xl text-gray-900">{title}</p>
        {icon}
      </div>
      <p className="text-gray-700 text-base font-sans mt-8">{text}</p>
    </div>
  )
}
