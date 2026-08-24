'use client'

import Image from "next/image"
import DottedMap from "dotted-map"

const avatars = [
  { src: "/map-avatar-1.svg", className: "left-1/3 top-1/2 -translate-x-full" },
  { src: "/map-avatar-2.svg", className: "right-1/2 top-1/2 -translate-y-full translate-x-full" },
  { src: "/map-avatar-3.svg", className: "right-1/4 top-1/6 -translate-y-full translate-x-full" },
]

const map = new DottedMap({ height: 55, grid: "vertical" })
const points = map.getPoints()

export const Map = () => (
  <div aria-hidden className="relative min-w-lg text-primary">
    <div className="absolute inset-6">
      {avatars.map((avatar) => (
        <div
          key={avatar.src}
          className={`absolute z-10 size-8 rotate-45 rounded-l-full rounded-t-full bg-card p-0.5 shadow-md shadow-primary/15 ring-1 ring-border ${avatar.className}`}>
          <div className="relative size-7 -rotate-45 overflow-hidden rounded-full border border-primary/20">
            <Image
              src={avatar.src}
              alt=""
              width={100}
              height={100}
              className="size-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
    <div className="mask-radial-from-40%">
      <svg viewBox="0 0 120 60" className="opacity-70">
        {points.map((point, index) => (
          <circle key={index} cx={point.x} cy={point.y} r="0.15" fill="currentColor" />
        ))}
      </svg>
    </div>
  </div>
)
