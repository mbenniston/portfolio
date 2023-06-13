import Image from "next/image"
import Link from "next/link"

export type Socialdata = {
  name: string
  link: string
  logoURL: string
}

export function SocialIcon(props: { socialData: Socialdata }) {
  return (
    <Link href={props.socialData.link} passHref legacyBehavior>
      <a className="avatar">
        <div className="w-12 rounded-sm shadow ring-2 ring-black">
          <Image src={props.socialData.logoURL} alt={props.socialData.name} width={128} height={128} className="object-cover" />
        </div>
      </a>
    </Link>
  )
}