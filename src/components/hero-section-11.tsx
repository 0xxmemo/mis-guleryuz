import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroHeader from "@/components/header"
import { Product } from "@/components/illustrations/product"
import { LogoCloud } from "@/components/logo-cloud"

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 mx-1 grid max-w-5xl grid-cols-3 border-x [--color-border:var(--color-border-illustration)] sm:grid-cols-4 md:mx-auto"
          >
            <div className="h-full border-r border-dashed" />
            <div className="h-full border-r border-dashed" />
            <div className="h-full max-sm:hidden" />
            <div className="h-full border-l border-dashed max-sm:hidden" />
          </div>
          <div className="mb:pb-24 relative pt-24 pb-16 md:pt-36 lg:pt-40">
            <div className="mx-auto w-full px-6 lg:max-w-5xl">
              <div className="grid items-center max-lg:gap-12 lg:grid-cols-2">
                <div>
                  <div className="lg:max-w-sm">
                    <h1 className="text-4xl font-semibold text-balance md:text-5xl">
                      Payments infrastructure for SaaS
                    </h1>
                    <p className="mt-4 mb-6 text-lg text-balance text-muted-foreground">
                      One tool that does it all. Search, generate, analyze, and
                      chat—right inside Tailark.
                    </p>

                    <div className="flex items-center gap-3">
                      <Button asChild size="sm">
                        <Link href="#link">Start Building</Link>
                      </Button>
                      <Button key={2} asChild size="sm" variant="outline">
                        <Link href="#link">Request demo</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="mt-12 grid max-w-sm grid-cols-2">
                    <div className="space-y-2 *:block">
                      <span className="text-lg font-semibold">
                        99.9{" "}
                        <span className="text-lg text-muted-foreground">%</span>
                      </span>
                      <p className="text-sm text-balance text-muted-foreground">
                        <strong className="font-medium text-foreground">
                          Uptime guarantee
                        </strong>{" "}
                        for all our services.
                      </p>
                    </div>

                    <div className="space-y-2 *:block">
                      <span className="text-lg font-semibold">
                        12{" "}
                        <span className="text-lg text-muted-foreground">X</span>
                      </span>
                      <p className="text-sm text-balance text-muted-foreground">
                        <strong className="font-medium text-foreground">
                          12X
                        </strong>{" "}
                        faster processing than previous generation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="max-lg:max-w-[calc(100vw-3rem)] lg:-mr-6">
                  <Product />
                </div>
              </div>
            </div>
          </div>
          <LogoCloud />
        </section>
      </main>
    </>
  )
}
