import { Beacon } from '@/components/ui/svgs/beacon'
import { Bolt } from '@/components/ui/svgs/bolt'
import { Hulu } from '@/components/ui/svgs/hulu'
import { Primevideo } from '@/components/ui/svgs/prime'
import { Stripe } from '@/components/ui/svgs/stripe'
import { Supabase } from '@/components/ui/svgs/supabase'
import { OpenAIFull } from '@/components/ui/svgs/open-ai'
import { Cisco } from '@/components/ui/svgs/cisco'

export function LogoCloud() {
    return (
        <div className="bg-card py-10">
            <div className="mx-auto max-w-5xl px-6">
                <div className="**:fill-foreground grid grid-cols-3 *:h-20 *:items-center *:px-4 sm:grid-cols-4">
                    <div className="flex">
                        <Primevideo
                            height={26}
                            width="auto"
                            className="*:!fill-foreground"
                        />
                    </div>
                    <div className="flex">
                        <Cisco
                            height={28}
                            width="auto"
                        />
                    </div>
                    <div className="flex">
                        <Stripe
                            height={22}
                            width="auto"
                        />
                    </div>
                    <div className="flex">
                        <Hulu
                            height={19}
                            width="auto"
                        />
                    </div>

                    <div className="flex">
                        <Bolt
                            height={18}
                            width="auto"
                        />
                    </div>

                    <div className="flex">
                        <Supabase
                            height={22}
                            width="auto"
                        />
                    </div>
                    <div className="flex">
                        <OpenAIFull
                            height={22}
                            width="auto"
                        />
                    </div>
                    <div className="flex">
                        <Beacon
                            height={18}
                            width="auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
