import { Footer } from '@/components/Footer'
import { NavBar } from '@/components/NavBar'
import { About } from '@/templates/About'
import { Contact } from '@/templates/Contact'
import { Main } from '@/templates/Main'
import { Projects } from '@/templates/Projects'
import { Services } from '@/templates/Services'
import { Skills } from '@/templates/Skills'

export default function Home() {
  return (
    <>
      <NavBar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}
