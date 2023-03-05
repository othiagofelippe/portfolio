import { Container } from '@/components/Container'
import { SkillCard } from '@/components/SkillCard'
import { skillslogo } from '@/utils'
import Image from 'next/image'

export function Skills() {
  return (
    <Container backgroundColor="BLUE">
      <h2 className="text-5xl font-display text-white sm:text-7xl text-center">
        Skills
      </h2>
      <div className="flex justify-center">
        <div className="overflow-x-auto">
          <div className="w-[72.5rem] h-[27.5rem] grid grid-cols-4 mt-16">
            {skillslogo.map((skill) => (
              <SkillCard key={skill.name} name={skill.name}>
                <Image
                  src={skill.image}
                  width={40}
                  height={30}
                  alt=""
                  quality={100}
                />
              </SkillCard>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
