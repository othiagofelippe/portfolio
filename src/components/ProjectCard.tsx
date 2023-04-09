import Image from 'next/image'

import { ArrowRight } from 'phosphor-react'
import { Button } from './Button'
import Picture from '../assets/Picture.jpg'

export function ProjectCard() {
  return (
    <div className="w-[22.5rem] h-[28.875rem] rounded-xl shadow-md">
      <div className="rounded-t-xl">
        <Image src={Picture} alt="" width={360} height={240} quality={100} />
      </div>
      <div className="bg-gray-700 p-5 rounded-b-xl">
        <p className="text-2xl text-gray-200 font-display">Netflix clone</p>
        <p className="text-base text-gray-300 font-sans mt-2">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>

        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-2">
            <p className="text-sm text-white font-bold font-sans">Techs:</p>
            <p className="text-xs text-white  font-sans">React | Typescript</p>
          </div>
          <Button backgroundColor="ORANGE" hasIcon>
            <p>Saber mais</p>
            <ArrowRight size={20} weight="bold" />
          </Button>
        </div>
      </div>
    </div>
  )
}
