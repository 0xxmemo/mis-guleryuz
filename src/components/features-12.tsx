import { Integrations } from "@/components/illustrations/integrations"
import { Zap, Sparkles, Lock, Cpu } from "lucide-react"
import { Invoice } from "@/components/illustrations/invoice"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { IntelliJIDEA } from "@/components/ui/svgs/intellij"
import { VisualStudioCode } from "@/components/ui/svgs/vs-code"
import { Windsurf } from "@/components/ui/svgs/windsurf"

export default function FeaturesSection() {
  return (
    <section className="@container bg-background py-24">
      <div className="mx-auto w-full max-w-5xl px-6 xl:px-0">
        <div className="relative">
          <PlusDecorator className="-translate-[calc(50%-0.5px)]" />
          <PlusDecorator className="right-0 translate-x-[calc(50%-0.5px)] -translate-y-[calc(50%-0.5px)]" />
          <PlusDecorator className="right-0 bottom-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />
          <PlusDecorator className="bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]" />

          <div className="relative grid grid-cols-2 divide-foreground/10 overflow-hidden border border-foreground/10 *:p-4 *:nth-3:border-r-0! *:nth-[1n+1]:nth-[-n+5]:border-b @max-3xl:*:nth-4:border-r @max-3xl:*:nth-6:border-r @3xl:grid-cols-4 @3xl:*:nth-[1n+1]:nth-[-n+3]:border-b @3xl:*:nth-[1n+2]:nth-[-n+6]:border-r @4xl:*:p-8">
            <div className="col-span-full">
              <div className="mx-auto max-w-xl pt-8 text-center">
                <h2 className="text-4xl font-semibold text-balance">
                  Everything you need to deploy your app
                </h2>
                <p className="my-6 text-lg text-balance text-muted-foreground">
                  Quis tellus eget adipiscing convallis sit sit eget aliquet
                  quis. Suspendisse eget egestas a elementum at.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/pricing">Get Started</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-x-0 bottom-4 z-10 mx-auto max-w-56 space-y-3">
                  <h3 className="text-center font-medium">Replaces your IDE</h3>
                  <div className="grid grid-cols-3 gap-0.5 *:flex *:items-center *:justify-center *:rounded *:bg-foreground/5 *:px-2 *:py-3">
                    <div className="rounded-l-lg!">
                      <IntelliJIDEA className="size-5" />
                    </div>
                    <div>
                      <VisualStudioCode className="size-5" />
                    </div>
                    <div className="rounded-r-lg!">
                      <Windsurf className="size-5" />
                    </div>
                  </div>
                </div>

                <div className="mx-auto mt-16 max-w-4xl mask-b-from-35% px-4 pt-1 @4xl:px-8">
                  <div className="relative h-64 overflow-hidden rounded-(--radius) border border-transparent bg-background shadow-xl ring-1 shadow-black/10 ring-border-illustration @4xl:h-80">
                    <Image
                      src="https://raw.githubusercontent.com/tailark/assets/refs/heads/main/tailark_zazuhl.png"
                      alt="app screen"
                      width="2880"
                      height="1842"
                      className="size-full object-cover object-top-left"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 row-span-2 grid grid-rows-subgrid gap-8 p-8!">
              <div className="mx-auto w-full max-w-84 self-center">
                <Invoice />
              </div>
              <div className="mx-auto max-w-sm text-center">
                <h3 className="font-semibold text-balance">
                  Powerful analytics dashboard
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Track performance metrics with real-time data visualization
                  and customizable reports for informed.
                </p>
              </div>
            </div>
            <div className="relative col-span-2 row-span-2 grid grid-rows-subgrid gap-8 p-8!">
              <PlusDecorator className="bottom-0 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%+0.5px)]" />

              <div className="mx-auto max-w-sm self-center @4xl:px-8">
                <Integrations />
              </div>
              <div className="relative z-10 mx-auto max-w-sm text-center">
                <h3 className="font-semibold text-balance">
                  Streamlined invoicing system
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Generate, send, and manage professional invoices automatically
                  with integrated payment tracking.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Zap className="size-4 text-foreground" />
                <h3 className="text-sm font-medium">Faaast</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                It supports an entire helping developers and innovate.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Cpu className="size-4 text-foreground" />
                <h3 className="text-sm font-medium">Powerful</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                It supports an entire helping developers and businesses.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Lock className="size-4 text-foreground" />
                <h3 className="text-sm font-medium">Security</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                An helping developers businesses innovate.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-foreground" />

                <h3 className="text-sm font-medium">AI Powered</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Helping developers businesses innovate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const PlusDecorator = ({ className }: { className?: string }) => (
  <div
    aria-hidden
    className={cn(
      "absolute size-3 mask-radial-from-15% before:absolute before:inset-0 before:m-auto before:h-px before:bg-foreground/25 after:absolute after:inset-0 after:m-auto after:w-px after:bg-foreground/25",
      className
    )}
  />
)
