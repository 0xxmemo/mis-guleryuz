import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Compass,
  HeartHandshake,
  Globe2,
  Mail,
  MessageCircle,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

const serviceIcons = {
  Compass,
  MessageCircle,
  UsersRound,
  Sparkles,
} as const;

const navItems = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Approach" },
];

export default function Home() {
  const isBookingConfigured = !siteConfig.bookingUrl.includes("PLACEHOLDER");

  return (
    <main className="overflow-hidden bg-background">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link href="#top" className="group flex items-center gap-3" aria-label={`${siteConfig.name} home`}>
            <span className="grid size-9 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-transform group-hover:rotate-6">
              MG
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold tracking-tight">{siteConfig.name}</span>
              <span className="block text-xs text-muted-foreground">{siteConfig.role}</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>

          <Button asChild size="sm" className="rounded-full px-4 sm:px-5">
            <Link href="#booking">Book a call <CalendarDays aria-hidden="true" /></Link>
          </Button>
        </div>
      </header>

      <section id="top" className="relative isolate scroll-mt-20">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(ellipse_at_top,oklch(0.91_0.06_84),transparent_65%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-18 pt-20 sm:px-8 sm:pb-24 sm:pt-28 lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:py-32">
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/80 px-3 py-1.5 text-xs font-medium text-primary shadow-sm">
              <HeartHandshake className="size-3.5" aria-hidden="true" /> Talent consulting, with care
            </p>
            <h1 className="text-balance text-5xl font-semibold tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl">
              Make your next talent decision <span className="text-primary">a confident one.</span>
            </h1>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
              {siteConfig.shortBio}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-6">
                <Link href="#booking">Book a session <ArrowRight aria-hidden="true" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-6">
                <Link href="#services">Explore services</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><Check className="size-4 text-primary" aria-hidden="true" /> Personalized guidance</span>
              <span className="inline-flex items-center gap-2"><Check className="size-4 text-primary" aria-hidden="true" /> Clear next steps</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-secondary/65 blur-2xl" aria-hidden="true" />
            <div className="rounded-[2rem] border border-border/90 bg-card p-5 shadow-[0_24px_70px_-28px_rgba(80,52,30,.4)] sm:p-7">
              <div className="rounded-[1.45rem] bg-[#d9b685] p-7 text-[#3e2c20] sm:p-9">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#604534]">A thoughtful partnership</p>
                <blockquote className="mt-10 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
                  “The best career and hiring decisions begin with honest clarity.”
                </blockquote>
                <div className="mt-14 flex items-center gap-3 border-t border-[#8c6648]/35 pt-5">
                  <span className="grid size-10 place-items-center rounded-full bg-[#f4e6d3] font-semibold">MG</span>
                  <span><span className="block text-sm font-semibold">{siteConfig.name}</span><span className="block text-xs text-[#604534]">{siteConfig.role}</span></span>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-muted p-4"><span className="block font-semibold">For people</span><span className="mt-1 block text-xs leading-5 text-muted-foreground">Career moves with a clear point of view.</span></div>
                <div className="rounded-xl bg-muted p-4"><span className="block font-semibold">For teams</span><span className="mt-1 block text-xs leading-5 text-muted-foreground">People decisions built to last.</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-y border-border/75 bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-[.7fr_1.3fr] lg:px-10 lg:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">How Mis can help</p>
          <div><h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Practical perspective for the moments that shape your work.</h2><p className="mt-5 max-w-2xl leading-7 text-muted-foreground">Whether you are navigating a career transition, preparing for an important conversation, or building a stronger hiring practice, the work starts with listening closely and ends with a plan that feels like yours.</p></div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Services</p><h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Support that meets you where you are.</h2></div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{services.map((service) => { const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] ?? Sparkles; return <article key={service.id} className="group flex min-h-78 flex-col rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg hover:shadow-primary/5"><span className="grid size-11 place-items-center rounded-xl bg-secondary text-primary"><Icon className="size-5" aria-hidden="true" /></span><h3 className="mt-6 text-xl font-semibold tracking-tight">{service.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{service.description}</p><div className="mt-auto pt-6"><p className="text-xs font-medium text-primary">{service.duration}</p><ul className="mt-4 space-y-2">{service.features?.map((feature) => <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground"><Check className="size-3.5 text-primary" aria-hidden="true" />{feature}</li>)}</ul></div></article>})}</div>
        </div>
      </section>

      <section id="process" className="scroll-mt-24 bg-[#3e2c20] px-5 py-20 text-[#fffaf4] sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl"><p className="text-sm font-medium uppercase tracking-[0.18em] text-[#e8c79c]">A calm, clear process</p><div className="mt-8 grid gap-8 md:grid-cols-3">{[["01", "Begin with context", "Bring the question, the opportunity, or the challenge in front of you."], ["02", "Find the signal", "Separate the essential from the noise and make space for useful perspective."], ["03", "Leave with momentum", "Turn insight into clear, achievable next steps you can own."]].map(([number, title, copy]) => <div key={number} className="border-t border-[#c89a6d]/40 pt-5"><span className="text-sm text-[#e8c79c]">{number}</span><h3 className="mt-8 text-2xl font-semibold tracking-tight">{title}</h3><p className="mt-3 max-w-xs leading-7 text-[#e8d8cb]">{copy}</p></div>)}</div></div>
      </section>

      <section id="booking" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-border bg-card p-6 shadow-[0_24px_70px_-35px_rgba(80,52,30,.35)] sm:p-10 lg:p-14"><div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center"><div><p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Book a session</p><h2 className="mt-3 text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Let’s make space for your next step.</h2><p className="mt-5 leading-7 text-muted-foreground">Choose a time that works for you. We’ll use the session to focus on the question or opportunity that feels most important right now.</p><Button asChild size="lg" className="mt-8 h-12 rounded-full px-6"><a href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">Book on Google Calendar <ArrowRight aria-hidden="true" /></a></Button></div>
          {isBookingConfigured ? <iframe title="Book a session with Mis Guleryuz" src={siteConfig.bookingUrl} className="min-h-125 w-full rounded-2xl border border-border bg-background" /> : <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-primary/30 bg-secondary/35 p-8 text-center"><CalendarDays className="size-9 text-primary" aria-hidden="true" /><h3 className="mt-4 text-lg font-semibold">Scheduling will appear here</h3><p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">Mis will add her Google Calendar Appointment Scheduling link to activate the embedded calendar. In the meantime, the booking button is ready for that link.</p></div>}</div></div>
      </section>

      <footer className="border-t border-border bg-card px-5 py-10 sm:px-8 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-semibold">{siteConfig.name}</p><p className="mt-1 text-sm text-muted-foreground">{siteConfig.tagline}</p></div><div className="flex items-center gap-3"><a className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary" href={`mailto:${siteConfig.email}`} aria-label="Email Mis"><Mail className="size-4" /></a><a className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary" href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" aria-label="Mis on LinkedIn"><Globe2 className="size-4" /></a><a className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary" href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" aria-label="Mis on Instagram"><MessageCircle className="size-4" /></a></div></div></footer>
    </main>
  );
}
