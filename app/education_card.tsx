import Image from "next/image"
import { Card } from "./card"

export type EducationData = {
  name: string
  dataRange: string
  description: string
  logoURL: string
}

export function EducationCard(props: { data: EducationData }) {
  return (
    <Card className="text-black p-8">
      <div className="flex justify-center items-center">
        <div className="relative w-32 h-32">
          <figure className=""> <Image src={props.data.logoURL} alt={props.data.name} fill className="block w-32 h-32 shadow object-contain object-center" /> </figure>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{props.data.name}</h2>
        <p className='font-mono'>[{props.data.dataRange}]</p>
        <p>{props.data.description}</p>
      </div>
    </Card>
  )
}