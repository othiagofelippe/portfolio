import { About } from '@/templates/About'
import { Main } from '@/templates/Main'
import { Projects } from '@/templates/Projects'
import { Skills } from '@/templates/Skills'

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Skills />
      <Projects />
    </>
  )
}
