import { Container } from '@/components/Container'
import Image from 'next/image'
import developApp from '../assets/servicesArt/developApp.svg'
import webDeveloping from '../assets/servicesArt/webDeveloping.svg'

export function Services() {
  return (
    <Container backgroundColor="WHITE">
      <h2 className="text-5xl font-display text-gray-900 sm:text-7xl">
        Serviços
      </h2>

      <div>
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-0 lg:flex-row items-center lg:justify-between">
          <Image
            src={webDeveloping}
            alt=""
            width={540}
            height={540}
            quality={100}
          />
          <div className="max-w-[35rem] mt-8 sm:mt-16 lg:mt-0">
            <p className="text-gray-900 text-4xl sm:text-center lg:text-left font-display">
              Desenvolvimento Front End
            </p>
            <p className="text-gray-700 text-2xl font-display mt-10">
              Desenvolvimento de sites responsivos:
            </p>
            <p className="text-gray-700 text-xl font-sans mt-5 ">
              Crio sites responsivos usando as mais recentes tecnologias
              front-end, incluindo HTML, CSS e JavaScript. Com minha experiência
              em design e desenvolvimento web, posso ajudá-lo a criar um site
              que seja visualmente atraente e fácil de navegar em qualquer
              dispositivo. Aumentando o envolvimento e melhorando a experiência
              do usuário do seu site.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-0 lg:flex-row-reverse items-center lg:justify-between mt-16">
          <Image
            src={developApp}
            alt=""
            width={540}
            height={540}
            quality={100}
          />
          <div className="max-w-[35rem] mt-8 sm:mt-16 lg:mt-0">
            <p className="text-gray-900 text-4xl text-center lg:text-left font-display">
              UI/UX Design
            </p>
            <p className="text-gray-700 text-2xl font-display mt-10">
              Prototipagem de interface:
            </p>
            <p className="text-gray-700 text-xl font-sans mt-5 ">
              Crio designs personalizados e protótipos interativos que ajudam a
              testar a usabilidade do seu design. Isso permite que você teste
              seu design antes de implementá-lo no seu site ou aplicativo,
              economizando tempo e dinheiro a longo prazo. Posso ajudá-lo a
              criar protótipos eficazes e que atendam às necessidades do seu
              público-alvo e ofereçam a melhor experiência de usuário possível.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
