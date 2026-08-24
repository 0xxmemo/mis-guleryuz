import type { SVGProps } from "react"

export function HeroAccent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 280 240" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M31 156C24 87 75 27 145 31c63 4 108 53 101 116-6 52-50 80-104 72-50-7-104-22-111-63Z"
        fill="currentColor"
        opacity=".18"
      />
      <path
        d="M53 157c-3-53 35-96 88-99 47-3 87 28 96 73"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity=".58"
      />
      <path
        d="M73 169c-2-36 26-66 63-68 31-2 59 17 69 46"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".48"
      />
      <path
        d="M96 177c5-24 27-40 52-36 17 3 31 14 38 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".42"
      />
      <path d="M83 75c13-19 36-29 59-24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".5" />
      <circle cx="68" cy="82" r="7" fill="currentColor" opacity=".62" />
      <circle cx="202" cy="80" r="5" fill="currentColor" opacity=".52" />
      <circle cx="216" cy="159" r="8" fill="currentColor" opacity=".58" />
      <circle cx="116" cy="197" r="5" fill="currentColor" opacity=".5" />
      <path d="M68 82 116 197m86-117 14 79" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".25" />
    </svg>
  )
}
