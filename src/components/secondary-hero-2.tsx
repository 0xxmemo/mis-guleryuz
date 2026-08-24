import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { HeroVisual } from "@/components/illustrations/image"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site"

export default function HeroSection() {
  return (
    <section id="top" data-theme="light" className="scroll-mt-24">
      <div className="bg-background pt-32 sm:pt-44">
        <div className="mx-auto mb-12 max-w-5xl px-6">
          <div className="mx-auto max-w-3xl">
            <p className="mb-5 text-sm font-medium text-primary">{siteConfig.role}</p>
            <h1 className="text-5xl font-semibold text-balance sm:text-7xl">
              Thoughtful talent decisions. Confident career moves.
            </h1>
            <p className="mt-6 ml-auto max-w-md text-lg text-balance text-muted-foreground">
              {siteConfig.shortBio}
            </p>
            <div className="mt-8 ml-auto flex max-w-md flex-wrap gap-3">
              <Button asChild>
                <Link href="#booking">
                  Book a session <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#services">Explore services</Link>
              </Button>
            </div>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  )
}
