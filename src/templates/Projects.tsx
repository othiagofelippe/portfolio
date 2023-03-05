import { Container } from '@/components/Container'
import { ProjectCard } from '@/components/ProjectCard'

export function Projects() {
  return (
    <Container backgroundColor="BLACK">
      <h2 className="text-5xl font-display text-white sm:text-7xl">Projetos</h2>

      <div className="w-full overflow-x-auto mt-16">
        <div className="w-[97.5rem] h-full grid grid-cols-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </Container>
  )
}
