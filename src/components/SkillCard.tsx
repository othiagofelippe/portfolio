import { ReactNode } from 'react'

interface SkillCardProps {
  name: string
  children: ReactNode
}

export function SkillCard({ name, children }: SkillCardProps) {
  return (
    <div className="flex items-center gap-10 px-5 w-[16.25rem] h-20 rounded-xl bg-white shadow-md">
      {children}

      <p className="text-gray-900 text-2xl font-display">{name}</p>
    </div>
  )
}
