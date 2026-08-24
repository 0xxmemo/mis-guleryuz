import { Check, Compass, MessageCircle, Sparkles, UsersRound } from "lucide-react"

import { Card } from "@/components/ui/card"
import { services } from "@/data/services"

const serviceIcons = { Compass, MessageCircle, UsersRound, Sparkles } as const

export default function FeaturesSectionNine() {
  return (
    <section id="services" className="@container scroll-mt-24 py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-medium text-primary">SERVICES</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold md:text-4xl">Support that meets you where you are.</h2>
          <p className="mt-4 text-muted-foreground">Focused, practical guidance for people shaping their careers and teams making talent decisions.</p>
        </div>
        <div className="@max-4xl:mx-auto @max-4xl:max-w-sm @4xl:grid-cols-3 grid gap-3 *:p-6">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] ?? Sparkles
            return (
              <Card key={service.id} className="bg-card/50 grid grid-rows-[auto_1fr] space-y-12 overflow-hidden">
                <div>
                  <Icon className="mb-5 size-4 fill-foreground/10" aria-hidden="true" />
                  <h3 className="text-foreground text-lg font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground mt-3">{service.description}</p>
                </div>
                <div className="relative -m-8 flex flex-col justify-end p-8">
                  {(service.duration || service.price) && <p className="mb-4 w-fit rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">{[service.duration, service.price].filter(Boolean).join(" · ")}</p>}
                  <ul className="space-y-2 border-t pt-5 text-sm text-muted-foreground">
                    {service.features?.map((feature) => <li key={feature} className="flex items-center gap-2"><Check className="size-3.5 text-primary" aria-hidden="true" />{feature}</li>)}
                  </ul>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
