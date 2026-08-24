import NextImage from "next/image"

export const HeroVisual = () => {
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
    </div>
  )
}
