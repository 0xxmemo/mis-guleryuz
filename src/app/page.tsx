import { ArrowUpRight, CalendarDays, Mail } from "lucide-react"

import CallToAction from "@/components/call-to-action-2"
import FeaturesSectionNine from "@/components/features-9"
import FooterSection from "@/components/footer-5"
import HeaderThree from "@/components/header-3"
import HeroSection from "@/components/secondary-hero-2"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { siteConfig } from "@/data/site"

export default function Home() {
  const isBookingConfigured = !siteConfig.bookingUrl.includes("PLACEHOLDER")

  return (
    <main className="overflow-hidden bg-background">
      <HeaderThree />
      <HeroSection />
      <FeaturesSectionNine />
      <CallToAction />
      <section id="booking" className="scroll-mt-24 bg-background py-12 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Card className="relative overflow-hidden p-8 shadow-lg md:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-sm font-medium text-primary">BOOK A SESSION</p>
                <h2 className="text-foreground mt-3 text-balance text-3xl font-semibold md:text-4xl">Let’s make space for your next step.</h2>
                <p className="text-muted-foreground mt-4 text-balance">Choose a time that works for you. We’ll use the session to focus on the opportunity, question, or decision that feels most important right now.</p>
                <Button asChild className="mt-8">
                  <a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">Book on Google Calendar <ArrowUpRight aria-hidden="true" /></a>
                </Button>
                <a href={`mailto:${siteConfig.email}`} className="mt-5 flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"><Mail className="size-4" aria-hidden="true" /> Prefer email? Get in touch.</a>
              </div>
              {isBookingConfigured ? (
                <iframe title={`Book a session with ${siteConfig.name}`} src={siteConfig.bookingUrl} className="min-h-125 w-full rounded-xl border bg-card" />
              ) : (
                <div className="flex min-h-80 flex-col items-center justify-center rounded-xl border border-dashed bg-card/50 p-8 text-center">
                  <CalendarDays className="size-8 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold">Scheduling will appear here</h3>
                  <p className="text-muted-foreground mt-2 max-w-sm text-sm">Mis will add her Google Calendar Appointment Scheduling link to activate this booking space. The page is ready for it.</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </section>
      <FooterSection />
    </main>
  )
}
