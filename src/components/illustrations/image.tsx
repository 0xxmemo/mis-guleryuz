"use client"

import { useEffect, useState } from "react"
import NextImage from "next/image"

export const HeroVisual = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (event: MouseEvent) => setMouse({ x: event.clientX, y: event.clientY })
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <div className="relative aspect-63/36 overflow-hidden 2xl:mx-auto 2xl:max-w-7xl">
      {/* Owner: replace this local abstract placeholder with a professional portrait of Mis. */}
      <NextImage
        src="/mis-guleryuz-placeholder.svg"
        alt="Abstract portrait placeholder in warm teal and sage tones"
        className="size-full object-cover"
        width={2000}
        height={1121}
        priority
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 top-0 left-0 z-0 size-40 mix-blend-overlay blur-2xl md:size-72"
        style={{ transform: `translate(${mouse.x}px, ${mouse.y}px)` }}
      >
        <div className="absolute inset-0 -translate-x-1/2 translate-y-[-200%] rounded-full bg-linear-to-r from-teal-400 via-emerald-300 to-amber-200" />
      </div>
    </div>
  )
}
