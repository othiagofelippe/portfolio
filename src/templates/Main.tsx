import { Container } from '@/components/Container'

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
        <p className="text-base text-gray-300">Desenvolvedor Web</p>
        <span className="rounded-full w-3 h-3 bg-rose-400"></span>
        <p className="text-base text-gray-300">UI Designer</p>
        <span className="rounded-full w-3 h-3 bg-rose-400 hidden sm:block"></span>
        <p className="text-base text-gray-300 hidden sm:block">UI Designer</p>
      </div>
    </Container>
  )
}
