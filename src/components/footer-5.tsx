import Link from "next/link"
import { Globe2, Mail, MessageCircle } from "lucide-react"
import { siteConfig } from "@/data/site"

const links = [
  { title: "Home", href: "#top" },
  { title: "Services", href: "#services" },
  { title: "Approach", href: "#approach" },
  { title: "Book a session", href: "#booking" },
]

export default function FooterSection() {
  return (
    <footer className="bg-background py-8 sm:py-16">
      <div className="mx-auto max-w-5xl space-y-6 px-6">
        <div className="flex flex-wrap justify-between gap-6">
          <Link href="#top" aria-label={`${siteConfig.name} home`} className="block size-fit">
            <span className="text-lg font-semibold tracking-tight">{siteConfig.name}</span>
            <span className="ml-2 text-sm text-muted-foreground">{siteConfig.role}</span>
          </Link>
          <div className="flex flex-wrap gap-3 text-sm">
            <a href={`mailto:${siteConfig.email}`} aria-label={`Email ${siteConfig.name}`} className="block text-muted-foreground hover:text-primary"><Mail className="size-5" /></a>
            <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="block text-muted-foreground hover:text-primary"><Globe2 className="size-5" /></a>
            <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="block text-muted-foreground hover:text-primary"><MessageCircle className="size-5" /></a>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-6">
          {links.map((item) => <Link key={item.title} href={item.href} className="block text-sm text-foreground transition-colors duration-150 hover:text-primary"><span>{item.title}</span></Link>)}
        </div>
        <div aria-hidden className="h-px bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-size-[6px_1px] bg-repeat-x opacity-25" />
        <div className="flex flex-wrap justify-between gap-4">
          <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
          <span className="text-sm text-muted-foreground">{siteConfig.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
