import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { ArrowSquareOut } from 'phosphor-react'

export function Main() {
  return (
    <Container backgroundColor="BLACK">
      <p className="text-2xl font-medium font-display text-blue-400">
        Olá! Eu sou
      </p>
      <h1 className="text-5xl mt-1 font-display text-gray-200 sm:text-7xl">
        Thiago Felippe
      </h1>
      <p className="text-2xl font-medium mt-2 sm:mt-3 font-display text-blue-400">
        Desenvolvedor Front-end
      </p>
      <div className="flex items-center gap-4 mt-2">
        <p className="text-base font-sans text-gray-300">Desenvolvedor Web</p>
        <span className="rounded-full w-3 h-3 bg-rose-300"></span>
        <p className="text-base font-sans text-gray-300">UI Designer</p>
        <span className="rounded-full w-3 h-3 bg-rose-300 hidden sm:block"></span>
        <p className="text-base font-sans text-gray-300 hidden sm:block">
          UI Designer
        </p>
      </div>
      <div className="flex items-center gap-4 mt-8">
        <Button backgroundColor="ORANGE" hasIcon>
          <p>Obter currículo</p>
          <ArrowSquareOut size={20} weight="bold" />
        </Button>
        <Button backgroundColor="BLUE">
          <p>Sobre</p>
        </Button>
      </div>
    </Container>
  )
}
