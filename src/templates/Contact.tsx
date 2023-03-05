import Image from 'next/image'
import { Container } from '@/components/Container'

import github from '../assets/socialMedia/github.svg'
import instagram from '../assets/socialMedia/instagram.svg'
import linkedin from '../assets/socialMedia/linkedin.svg'
import { TextField } from '@/components/TextField'
import { TextArea } from '@/components/TextArea'
import { Button } from '@/components/Button'

export function Contact() {
  return (
    <Container backgroundColor="BLUE">
      <h2 className="text-5xl font-display text-white sm:text-7xl">Contato</h2>

      <div className="mt-16 flex flex-col-reverse sm:flex-col lg:flex-row lg:justify-between lg:items-center gap-10">
        <form>
          <div className="flex flex-col sm:flex-row gap-10 mb-10">
            <TextField label="Nome" placeholder="John Doe" />
            <TextField label="E-mail" placeholder="johndoe@exemple.com" />
          </div>
          <TextArea label="Mensagem" placeholder="O que você precisa?" />
          <div className="mt-8">
            <Button backgroundColor="ORANGE">Enviar mensaguem</Button>
          </div>
        </form>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col justify-center items-center sm:items-end gap-4">
            <p className="text-gray-200 text-4xl font-display">E-mail</p>
            <p className="text-gray-300 text-base font-sans">
              thiagofelippe.contato@gmail.com
            </p>
          </div>

          <div className="flex flex-col justify-center items-center sm:items-end gap-4">
            <p className="text-gray-200 text-4xl font-display">Endereço</p>
            <p className="text-gray-300 text-base font-sans">
              Rio de Janeiro, Brazil
            </p>
          </div>

          <div className="flex flex-col justify-center items-center sm:items-end gap-4">
            <p className="text-gray-200 text-4xl font-display">Social</p>
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
      </div>
    </Container>
  )
}
