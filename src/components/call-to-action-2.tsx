import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Layout } from "@/components/illustrations/layout"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CallToAction() {
  return (
    <section id="approach" className="scroll-mt-24 bg-background py-12 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Card className="relative overflow-hidden pl-8 pt-8 shadow-lg md:p-20">
          <div className="max-w-xl max-md:pr-8">
            <div className="relative">
              <p className="text-sm font-medium text-primary">A CALM, CLEAR PROCESS</p>
              <h2 className="text-foreground mt-3 text-balance text-3xl font-semibold md:text-4xl">Make room for the conversations that move work forward.</h2>
              <p className="text-muted-foreground mb-6 mt-4 text-balance">Bring the question in front of you. Together, we’ll find the signal, name the next step, and create momentum that feels like your own.</p>
              <Button asChild>
                <Link href="#booking">Start with a conversation <ArrowRight aria-hidden="true" /></Link>
              </Button>
            </div>
          </div>
          <div className="max-lg:mask-b-from-35% max-lg:pt-6 max-md:mt-4 lg:absolute lg:inset-0 lg:top-12 lg:ml-auto lg:w-2/5"><Layout /></div>
        </Card>
      </div>
    </section>
  )
}
