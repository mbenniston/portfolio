import Image from "next/image"
import { Card } from "./card"
import Link from "next/link"

export type ProjectData = {
  title: string
  description: string
  link: string
  tags: string[]
  imageURL: string
}

export function ProjectCard(props: { data: ProjectData }) {
  return (
    <Card className="text-black">
      <div className="flex justify-center items-center mt-8 lg:mt-0">
        <Link href={props.data.link} className="block relative w-64 h-64 lg:h-full">
          <Image src={props.data.imageURL} alt={props.data.title} fill className="block shadow object-cover object-center lg:rounded-l-lg" />
        </Link>
      </div>
      <div className="card-body">
        <h2 className="card-title">{props.data.title}</h2>
        <p>{props.data.description}</p>
        <ul className="mt-8">
          {props.data.tags.map(tag => <li className="badge badge-ghost badge-lg mr-1" key={tag}> {tag}</li>)}
        </ul>
        <div className="card-actions justify-end mt-4">
          <Link href={props.data.link}><button className="btn btn-primary">See the code on GitHub </button></Link>
        </div>
      </div>
    </Card>
  )
}