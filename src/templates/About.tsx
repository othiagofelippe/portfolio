import Image from 'next/image'
import * as Collapsible from '@radix-ui/react-collapsible'
import { useState } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { InterestItem } from '@/components/InterestItem'
import {
  Books,
  CaretDown,
  CaretUp,
  Headphones,
  MusicNote,
  Popcorn,
  SoccerBall,
  Tree,
} from 'phosphor-react'

import photo from '../assets/photo.jpg'

export function About() {
  const [isOpen, setisOpen] = useState(false)

  return (
    <Container backgroundColor="WHITE">
      <h2 className="text-5xl font-display text-gray-900 sm:text-7xl">Sobre</h2>

      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-[8.75rem] mt-16 ">
        <Image src={photo} alt="" width={300} height={300} quality={100} />
        <div className="mt-10 w-[22.5rem]">
          <p className="text-4xl text-gray-900 text-center lg:text-left font-display">
            Quem eu sou?
          </p>
          <p className="text-3xl text-gray-900 text-center lg:text-left font-display mt-8">
            Olá, eu sou Thiago
          </p>
          <p className="text-3xl text-gray-900 text-center font-display">
            do Rio de Janeiro, Brasil.
          </p>
          <div className="flex justify-center lg:justify-start items-center gap-4 mt-4">
            <Button backgroundColor="PURPLE">
              <p>Github</p>
            </Button>
            <Button backgroundColor="BLUE">
              <p>Linkedin</p>
            </Button>
          </div>
          <p className="text-gray-700 text-base mt-5">
            Tenho 22 anos, sou apaixonado por tecnologia desde criança. Adoro
            criar, testar e viver coisas novas. Decidi seguir na área de
            desenvolvimento porquê foi a forma que encontrei de dar vida à
            ideais que vivem dentro da minha cabeça.
          </p>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center">
        <h3 className="text-4xl sm:text-5xl text-gray-900 font-display text-center ">
          Meus interesses
        </h3>

        <Collapsible.Root
          open={isOpen}
          onOpenChange={setisOpen}
          className="mt-16"
        >
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-10">
            <InterestItem
              title="Podcasts"
              icon={<Headphones size={40} className="text-rose-300" />}
              text="Ouvir podcasts é a forma que mais utilizo para consumir conteúdo digital. Gosto muito de ouvir podcasts sobre negócios, tecnologia, desenvolvimento pessoal e notícias do mundo enquanto realizo atividades como exercícios, cozinho ou até mesmo durante uma caminhada."
            />

            <InterestItem
              title="Metas"
              icon={<Tree size={40} className="text-rose-300" />}
              text="Desenvolver tecnologias acessíveis que possam melhorar a qualidade de vida das pessoas. Criar algo que possa ajudar milhares de pessoas ao redor do mundo, gerando oportunidades e esperança para aqueles que se encontram sem perspectivas de futuro."
            />

            <InterestItem
              className="lg:hidden xl:block"
              title="Livros"
              icon={<Books size={40} className="text-rose-300" />}
              text="Demorei um pouco para começar a apreciar a leitura de livros, mas hoje em dia é um dos meus passatempos favoritos.Quando desejo aprender algo mais aprofundado, minha primeira escolha é sempre procurar um livro sobre o assunto e viajar para mundos imaginários."
            />
          </div>

          <Collapsible.Content className="transition-all ease-in-out">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-10">
              <InterestItem
                className="hidden lg:block xl:hidden"
                title="Livros"
                icon={<Books size={40} className="text-rose-300" />}
                text="Demorei um pouco para começar a apreciar a leitura de livros, mas hoje em dia é um dos meus passatempos favoritos.Quando desejo aprender algo mais aprofundado, minha primeira escolha é sempre procurar um livro sobre o assunto e viajar para mundos imaginários."
              />
              <InterestItem
                title="Música"
                icon={<MusicNote size={40} className="text-rose-300" />}
                text="Tenho música acompanhando todas as atividades diárias. A música é capaz de afetar minha percepção do mundo ao meu redor, é como se a vida fosse um grande filme com uma trilha sonora em constante mudança, tornando-a mais vívida e emocionante."
              />

              <InterestItem
                title="Esportes"
                icon={<SoccerBall size={40} className="text-rose-300" />}
                text="Não há dúvidas que praticando esportes é a forma mais poderosa que tenho de me conectar com o mundo exterior, fora do ambiente virtual dos computadores. Além de ser uma ótima forma de manter o corpo saudável e equilibrado, melhorando a disposição e o humor."
              />

              <InterestItem
                title="Filmes"
                icon={<Popcorn size={40} className="text-rose-300" />}
                text="Eu sou um grande fã de filmes e séries. Desde pequeno, adorava assistir desenhos animados e filmes infantis. Hoje em dia, as séries são uma das minhas formas favoritas de entretenimento. Adoro acompanhar as tramas e os personagens ao longo de vários episódios."
              />
            </div>
          </Collapsible.Content>

          <Collapsible.Trigger asChild>
            <button
              className={`flex flex-col items-center m-auto ${
                isOpen ? 'animate-none' : 'animate-bounce'
              } `}
            >
              {isOpen ? (
                <CaretUp size={40} className="text-rose-300" />
              ) : (
                <CaretDown size={40} className="text-rose-300" />
              )}
              <p className="text-lg text-gray-700 font-sans">
                {isOpen ? 'Ver menos' : 'Ver mais'}
              </p>
            </button>
          </Collapsible.Trigger>
        </Collapsible.Root>
      </div>
    </Container>
  )
}
