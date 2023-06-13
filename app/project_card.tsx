import Image from "next/image"
import { Card } from "./card"

export type ProjectData = {
  title: string
  description: string
  link: string
  tags: string[]
}

export function ProjectCard(props: { data: ProjectData }) {
  return (
    <Card className="text-black p-8">
      <div className="flex justify-center items-center">
        <div className="relative w-32 h-32">
          {/* <figure className=""> <Image src={props.data.} alt={props.data.name} fill className="block w-32 h-32 shadow object-contain object-center" /> </figure> */}
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{props.data.title}</h2>
        <p>{props.data.description}</p>
        <ul className="mt-8">
          {props.data.tags.map(tag => <li className="badge badge-ghost badge-lg mr-1" key={tag}> {tag}</li>)}
        </ul>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">See the code on my Github</button>
        </div>
      </div>
    </Card>
  )
}