import Image from "next/image"
import { Card } from "./card"

export type ExperienceData = {
  name: string
  dataRange: string
  description: string
  logoURL: string
}

export function ExperienceCard(props: { data: ExperienceData }) {
  return (
    <Card className="text-black p-8">
      <div className="flex justify-center items-center">
        <figure className="relative w-32 h-32">
          <Image src={props.data.logoURL} alt={props.data.name} fill className="block w-32 h-32 shadow object-contain object-center" />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title">{props.data.name}</h2>
        <p className='font-mono'>[{props.data.dataRange}]</p>
        <p>{props.data.description}</p>
      </div>
    </Card>
  )
}