"use client"

import Link from "next/link"
import React from "react"
import { CalendarDays, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site"
import { cn } from "@/lib/utils"

const links = [
  { href: "#top", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
]

export default function HeaderThree() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  return (
    <header data-state={isMobileMenuOpen ? "active" : "inactive"} className="bg-background">
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-50 bg-linear-to-b from-background px-3 pt-3 backdrop-blur",
          !isMobileMenuOpen && "h-18 overflow-hidden",
          isMobileMenuOpen && "h-screen bg-background/75 backdrop-blur"
        )}
      >
        <div className="mx-auto max-w-5xl rounded-2xl bg-card/75 px-6 shadow-md ring-1 shadow-black/6.5 ring-border backdrop-blur-xl lg:px-2">
          <div className="relative flex flex-wrap items-center justify-between lg:py-2">
            <div className="flex items-center justify-between gap-8 max-lg:h-14 max-lg:w-full max-lg:in-data-[state=active]:border-b max-lg:in-data-[state=active]:border-foreground/5">
              <Link href="#top" aria-label={`${siteConfig.name} home`} className="-ml-3 flex items-center gap-2 rounded-xl px-3 py-1 hover:bg-foreground/5 lg:-m-1">
                <span className="grid size-8 place-items-center rounded-lg bg-primary text-xs font-semibold text-primary-foreground">MG</span>
                <span className="text-sm font-semibold tracking-tight">{siteConfig.name}</span>
              </Link>
              <button type="button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"} className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden">
                <Menu className="m-auto size-5 transition-opacity duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
                <X className="absolute inset-0 m-auto size-5 scale-0 -rotate-180 opacity-0 transition-opacity duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
              </button>
            </div>
            <nav className="absolute inset-0 m-auto hidden size-fit lg:block" aria-label="Main navigation">
              <div className="flex gap-3">
                {links.map((link) => <Link key={link.href} href={link.href} className="inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">{link.label}</Link>)}
              </div>
            </nav>
            {isMobileMenuOpen && <nav className="w-full pb-6 pt-3 lg:hidden" aria-label="Mobile navigation">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="group relative block border-0 border-b py-4 text-lg font-medium">{link.label}</Link>)}</nav>}
            <div className="hidden items-center justify-end lg:flex lg:gap-3">
              <Button asChild size="sm"><Link href="#booking">Book a call <CalendarDays aria-hidden="true" /></Link></Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
