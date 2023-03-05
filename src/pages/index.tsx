import { About } from '@/templates/About'
import { Contact } from '@/templates/Contact'
import { Main } from '@/templates/Main'
import { Projects } from '@/templates/Projects'
import { Services } from '@/templates/Services'
import { Skills } from '@/templates/Skills'

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </>
  )
}
