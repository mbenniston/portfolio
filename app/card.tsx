import { ReactNode } from "react";

export function Card(props: { children?: ReactNode, className?: string }) {
  return (
    <div className={`card lg:card-side max-w-3xl mx-auto mb-4 bg-base-100 shadow-sm ${props.className}`}>
      {props.children}
    </div>
  )
}
