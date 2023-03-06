import Image from 'next/image'
import { Container } from './Container'

import github from '../assets/socialMedia/github.svg'
import instagram from '../assets/socialMedia/instagram.svg'
import linkedin from '../assets/socialMedia/linkedin.svg'

export function Footer() {
  return (
    <Container backgroundColor="BLACK">
      <h2 className="text-5xl text-center font-display text-white sm:text-7xl">
        Logo
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-200 font-display text-2xl font-medium">
            Contato
          </p>
          <div className="flex flex-col items-center gap-5 ">
            <p className="text-gray-300 font-sans text-lg">
              thiagofelippe.contato@gmail.com
            </p>
            <p className="text-gray-300 font-sans text-lg">
              {' '}
              Rio de Janeiro, Brazil
            </p>
            <div className="flex gap-4">
              <Image src={github} alt="" width={40} height={40} quality={100} />
              <Image
                src={linkedin}
                alt=""
                width={40}
                height={40}
                quality={100}
              />
              <Image
                src={instagram}
                alt=""
                width={40}
                height={40}
                quality={100}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-200 font-display text-2xl font-medium">
            Navegação
          </p>
          <ul className="flex flex-col gap-5 text-gray-300 hover: text-lg font-sans">
            <li>
              <a className="hover:text-gray-200" href="">
                Sobre
              </a>
            </li>
            <li>
              <a className="hover:text-gray-200" href="">
                Projetos
              </a>
            </li>
            <li>
              <a className="hover:text-gray-200" href="">
                Contato
              </a>
            </li>
            <li>
              <a className="hover:text-gray-200" href="">
                Serviços
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-5 ">
          <p className="text-gray-200 font-display text-2xl font-medium">
            Obrigado!
          </p>
          <p className="text-gray-200 font-display text-2xl font-medium">
            Thanks!
          </p>
          <p className="text-gray-200 font-display text-2xl font-medium">
            Gracias!
          </p>
          <p className="text-gray-200 font-display text-2xl font-medium">
            Merci!
          </p>
          <p className="text-gray-200 font-display text-2xl font-medium">
            ありがとう!
          </p>
        </div>

        <p className="text-lg font-sans text-gray-300 text-center">
          Thiago Felippe@ DIREITOS RESERVADOS
        </p>
      </div>
    </Container>
  )
}
