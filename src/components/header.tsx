"use client"
import Link from "next/link"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import React from "react"
import { useScroll, useMotionValueEvent } from "motion/react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Menu,
  X,
  Shield,
  SquareActivity,
  Sparkles,
  Cpu,
  Gem,
  ShoppingBag,
  BookOpen,
  Notebook,
  Croissant,
  Smartphone,
  Rocket,
  Cloud,
  Bot,
} from "lucide-react"
import { useMedia } from "@/hooks/use-media"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

interface FeatureLink {
  href: string
  name: string
  description?: string
  icon: React.ReactElement
}

interface MobileLink {
  groupName?: string
  links?: FeatureLink[]
  name?: string
  href?: string
}

const features: FeatureLink[] = [
  {
    href: "#ux",
    name: "AI",
    description: "Generate Insights and Recommendations",
    icon: <Sparkles className="fill-green-500/15 stroke-foreground" />,
  },
  {
    href: "#performance",
    name: "Performance",
    description: "Lightning-fast load times",
    icon: <SquareActivity className="fill-indigo-500/15 stroke-foreground" />,
  },
  {
    href: "#security",
    name: "Security",
    description: "Keep your data safe and secure",
    icon: <Shield className="fill-blue-500/15 stroke-foreground" />,
  },
]

const moreFeatures: FeatureLink[] = [
  {
    href: "#ux",
    name: "Automation",
    description: "Automate your workflow",
    icon: <Bot className="fill-yellow-500/15 stroke-foreground" />,
  },
  {
    href: "#performance",
    name: "Scalability",
    description: "Scale your application",
    icon: <Rocket className="fill-orange-500/15 stroke-foreground" />,
  },
  {
    href: "#backup",
    name: "Backup",
    description: "Keep your data backed up",
    icon: <Cloud className="fill-teal-500/15 stroke-foreground" />,
  },
  {
    href: "#security",
    name: "Security",
    description: "Keep your data safe and secure",
    icon: <Shield className="fill-blue-500/15 stroke-foreground" />,
  },
  {
    href: "#support",
    name: "Partnerships",
    description: "Get help when you need it",
    icon: <Gem className="fill-pink-500/15 stroke-foreground" />,
  },
  {
    href: "#mobile",
    name: "Mobile App",
    description: "Get help when you need it",
    icon: <Smartphone className="fill-zinc-500/15 stroke-foreground" />,
  },
]

const useCases: FeatureLink[] = [
  {
    href: "#ux",
    name: "Marketplace",
    description: "Find and buy AI tools",
    icon: <ShoppingBag className="fill-emerald-500/25 stroke-foreground" />,
  },
  {
    href: "#security",
    name: "API Integration",
    description: "Integrate AI tools into your app",
    icon: <Cpu className="fill-blue-500/15 stroke-foreground" />,
  },
  {
    href: "#support",
    name: "Partnerships",
    description: "Get help when you need it",
    icon: <Gem className="fill-pink-500/15 stroke-foreground" />,
  },
  {
    href: "#mobile",
    name: "Mobile App",
    description: "Get help when you need it",
    icon: <Smartphone className="fill-zinc-500/15 stroke-foreground" />,
  },
]

const contentLinks: FeatureLink[] = [
  {
    name: "Announcements",
    href: "#announcements",
    icon: <BookOpen className="fill-purple-500/15 stroke-foreground" />,
  },
  {
    name: "Resources",
    href: "#resources",
    icon: <Croissant className="fill-red-500/15 stroke-foreground" />,
  },
  {
    name: "Blog",
    href: "#blog",
    icon: <Notebook className="fill-zinc-500/15 stroke-foreground" />,
  },
]

const mobileLinks: MobileLink[] = [
  {
    groupName: "Product",
    links: features,
  },
  {
    groupName: "Solutions",
    links: [...useCases, ...contentLinks],
  },
  { name: "Pricing", href: "#" },
  { name: "Company", href: "#" },
]

export default function HeaderOne() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const isLarge = useMedia("(min-width: 64rem)")

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <header
      data-state={isMobileMenuOpen ? "active" : "inactive"}
      {...(isScrolled && { "data-scrolled": true })}
      className="fixed inset-x-0 top-0 z-50 has-data-[state=open]:h-screen has-data-[state=open]:bg-background/50 has-data-[state=open]:backdrop-blur"
    >
      <div
        className={cn(
          "absolute inset-x-0 top-0 z-50 h-18 border-b ring-1 ring-transparent transition-[height,background-color,border-color,box-shadow,backdrop-filter] duration-200 ease-[cubic-bezier(0.645,0.045,0.355,1)]",
          "in-data-scrolled:bg-background/75 in-data-scrolled:backdrop-blur",
          "lg:has-data-[state=open]:h-[calc(var(--nav-viewport-height,0px)+3.4rem)] lg:has-data-[state=open]:border-b lg:has-data-[state=open]:border-transparent lg:has-data-[state=open]:bg-card/75 lg:has-data-[state=open]:shadow-lg lg:has-data-[state=open]:shadow-black/6.5 lg:has-data-[state=open]:ring-foreground/5 lg:has-data-[state=open]:backdrop-blur",
          "max-lg:h-14 max-lg:overflow-hidden max-lg:border-b max-lg:in-data-[state=active]:h-screen max-lg:in-data-[state=active]:bg-background/75 max-lg:in-data-[state=active]:backdrop-blur"
        )}
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative flex flex-wrap items-center justify-between lg:py-5">
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 hidden h-px bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-size-[4px_1px] bg-repeat-x opacity-20 in-has-data-[state=open]:block"
            />
            <div className="flex justify-between gap-8 max-lg:h-14 max-lg:w-full max-lg:border-b">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo uniColor />
              </Link>

              {isLarge && <NavMenu />}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={
                  isMobileMenuOpen == true ? "Close Menu" : "Open Menu"
                }
                className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="m-auto size-5 transition-opacity duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
                <X className="absolute inset-0 m-auto size-5 scale-0 -rotate-180 opacity-0 transition-opacity duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
              </button>
            </div>

            {!isLarge && isMobileMenuOpen && (
              <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} />
            )}

            <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 in-data-[state=active]:flex max-lg:in-data-[state=active]:mt-6 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button asChild variant="outline" size="sm">
                  <Link href="#">
                    <span>Login</span>
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="#">
                    <span>Get Started</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

const MobileMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <nav className="w-full">
      <Accordion
        type="single"
        collapsible
        className="mt-0.5 space-y-0.5 **:hover:no-underline"
      >
        {mobileLinks.map((link) => {
          if (link.groupName && link.links) {
            return (
              <AccordionItem
                key={link.groupName}
                value={link.groupName}
                className="group relative before:pointer-events-none before:absolute before:inset-x-0 before:bottom-0 before:border-b before:border-border"
              >
                <AccordionTrigger className="flex items-center justify-between border-b-0 py-3 text-lg font-medium data-[state=open]:bg-foreground/5">
                  {link.groupName}
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <ul>
                    {link.links.map((feature) => (
                      <li key={feature.name}>
                        <Link
                          href={feature.href}
                          onClick={closeMenu}
                          className="grid grid-cols-[auto_1fr] items-center gap-2.5 py-2"
                        >
                          <div
                            aria-hidden
                            className="flex items-center justify-center *:size-4"
                          >
                            {feature.icon}
                          </div>
                          <div className="text-base">{feature.name}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )
          }
          return null
        })}
      </Accordion>
      {mobileLinks.map((link) => {
        if (link.name && link.href) {
          return (
            <Link
              key={link.name ?? link.href}
              href={link.href}
              onClick={closeMenu}
              className="group relative block border-0 border-b py-4 text-lg font-medium"
            >
              {link.name}
            </Link>
          )
        }
        return null
      })}
    </nav>
  )
}

const NavMenu = () => {
  const headerRef = React.useRef<HTMLElement | null>(null)

  React.useEffect(() => {
    headerRef.current = document.querySelector<HTMLElement>("header")
  }, [])

  const handleValueChange = React.useCallback((value: string) => {
    const header = headerRef.current
    if (!header) return

    if (!value) {
      header.style.removeProperty("--nav-viewport-height")
      return
    }

    const heights: Record<string, number> = {
      product: 280,
      solutions: 220,
    }

    const height = heights[value]
    if (height) {
      header.style.setProperty("--nav-viewport-height", `${height}px`)
    }
  }, [])

  return (
    <NavigationMenu
      onValueChange={handleValueChange}
      className="[--viewport-outer-px:2rem] **:data-[slot=navigation-menu-viewport]:rounded-none **:data-[slot=navigation-menu-viewport]:border-0 **:data-[slot=navigation-menu-viewport]:bg-transparent **:data-[slot=navigation-menu-viewport]:shadow-none **:data-[slot=navigation-menu-viewport]:ring-0 max-lg:hidden"
    >
      <NavigationMenuList className="gap-3">
        <NavigationMenuItem value="product">
          <NavigationMenuTrigger>Product</NavigationMenuTrigger>
          <NavigationMenuContent className="mt-4.5 origin-top pt-5 pb-14 shadow-none ring-0">
            <div className="grid w-full max-w-5xl min-w-5xl grid-cols-4 gap-4 divide-x divide-foreground/10 pl-10">
              <div className="row-span-2 -mr-2 grid grid-rows-subgrid gap-1 pr-2">
                <span className="ml-2 text-xs font-medium text-muted-foreground uppercase">
                  Features
                </span>
                <ul className="mt-2 space-y-2">
                  {features.map((feature) => (
                    <ListItem
                      key={feature.name}
                      href={feature.href}
                      title={feature.name}
                      description={feature.description}
                    >
                      {feature.icon}
                    </ListItem>
                  ))}
                </ul>
              </div>
              <div className="col-span-2 row-span-2 grid grid-rows-subgrid gap-1 border-r-0">
                <span className="ml-2 text-xs font-medium text-muted-foreground uppercase">
                  More Features
                </span>
                <ul className="mt-2 grid grid-cols-2 gap-2">
                  {moreFeatures.map((feature) => (
                    <ListItem
                      key={feature.name}
                      href={feature.href}
                      title={feature.name}
                      description={feature.description}
                    >
                      {feature.icon}
                    </ListItem>
                  ))}
                </ul>
              </div>
              <div className="row-span-2 grid grid-rows-subgrid gap-1">
                <span className="ml-2 text-xs font-medium text-muted-foreground uppercase">
                  Changelog
                </span>
                <div
                  data-theme="quartz"
                  className="relative mt-3 grid overflow-hidden rounded-xl bg-blue-200 bg-linear-to-br from-pink-50 via-white/50 to-emerald-200 p-1 inset-ring-1 inset-ring-foreground/10 transition-colors duration-200 hover:bg-blue-300"
                >
                  <div className="absolute inset-0 aspect-video px-6">
                    <div className="group relative -mx-4 h-4/5 mask-b-from-35% px-4 pt-6 before:absolute before:inset-x-6 before:top-4 before:bottom-0 before:z-1 before:rounded-t-xl before:border before:border-transparent before:bg-background before:ring-1 before:ring-foreground/10 after:absolute after:inset-x-9 after:top-2 after:bottom-0 after:rounded-t-xl after:border after:border-transparent after:bg-background/75 after:ring-1 after:ring-foreground/5">
                      <div className="relative z-10 h-full overflow-hidden rounded-t-xl border border-transparent bg-card p-8 text-sm shadow-xl ring-1 shadow-black/25 ring-foreground/10"></div>
                    </div>
                  </div>
                  <div className="space-y-0.5 self-end p-3">
                    <NavigationMenuLink
                      asChild
                      className="p-0 text-sm font-medium text-foreground before:absolute before:inset-0 hover:bg-transparent focus:bg-transparent"
                    >
                      <Link href="#">Multimodal Learning</Link>
                    </NavigationMenuLink>
                    <p className="line-clamp-1 text-xs text-muted-foreground">
                      Explore how our platform integrates text, image, and audio
                      processing into a unified framework.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="solutions">
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent className="mt-4.5 origin-top pt-5 pb-12">
            <div className="grid w-full max-w-5xl min-w-5xl grid-cols-4 gap-4 divide-x divide-foreground/10 pl-10">
              <div className="col-span-2 row-span-2 -mr-4 grid grid-rows-subgrid gap-1 pr-2">
                <span className="ml-2 text-xs font-medium text-muted-foreground uppercase">
                  Use Cases
                </span>
                <ul className="mt-2 grid grid-cols-2 gap-2">
                  {useCases.map((useCase) => (
                    <ListItem
                      key={useCase.name}
                      href={useCase.href}
                      title={useCase.name}
                      description={useCase.description}
                    >
                      {useCase.icon}
                    </ListItem>
                  ))}
                </ul>
              </div>
              <div className="row-span-2 grid grid-rows-subgrid gap-1 pl-2">
                <span className="ml-2 text-xs font-medium text-muted-foreground uppercase">
                  Content
                </span>
                <ul className="mt-2">
                  {contentLinks.map((content) => (
                    <NavigationMenuLink key={content.name} asChild>
                      <Link
                        href={content.href}
                        className="grid grid-cols-[auto_1fr] items-center gap-2.5"
                      >
                        {content.icon}
                        <div className="text-sm font-medium text-foreground">
                          {content.name}
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="pricing">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="#">Pricing</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem value="company">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="#">Company</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  description,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string
  title: string
  description?: string
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="grid grid-cols-[auto_1fr] gap-2.5">
          <div className="relative flex size-9 items-center justify-center rounded-lg border border-transparent bg-illustration shadow-sm ring-1 ring-foreground/10 *:drop-shadow *:drop-shadow-black/6.5 before:absolute before:inset-0 before:rounded-lg before:bg-radial before:to-foreground/3">
            {children}
          </div>
          <div className="space-y-0.5">
            <div className="text-sm font-medium text-foreground">{title}</div>
            <p className="line-clamp-1 text-xs text-muted-foreground">
              {description}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
