import { List } from 'phosphor-react'
import { Button } from './Button'

export function NavBar() {
  return (
    <nav className="bg-gray-900 py-4 px-2 sm:px-10 md:px-[6.75rem] lg:px-8  xl:px-[3.75rem] 2xl:px-[11.875rem]">
      <div className="flex items-center justify-between ">
        <h2 className="text-2xl font-display text-white sm:text-3xl">Logo</h2>
        <div className="hidden lg:flex lg:justify-center ">
          <ul className="flex items-center justify-center gap-5">
            <li>
              <Button backgroundColor="TRANSPARENT">Início</Button>
            </li>
            <li>
              <Button backgroundColor="TRANSPARENT">Sobre</Button>
            </li>
            <li>
              <Button backgroundColor="TRANSPARENT">Serviços</Button>
            </li>

            <li>
              <Button backgroundColor="TRANSPARENT">Projetos</Button>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-1">
          <Button backgroundColor="ORANGE">Entrar em contato</Button>
          <List size={40} className="text-gray-200 lg:hidden" />
        </div>
      </div>
    </nav>
  )
}
