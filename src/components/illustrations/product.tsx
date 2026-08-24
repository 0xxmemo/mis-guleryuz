'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { LazyMotion, domAnimation, m, AnimatePresence } from 'motion/react'

const screenshots = [
    {
        light: 'https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle_un3f39.png',
        dark: 'https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle-dark_cv2taw.png',
    },
    {
        light: 'https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle-2_qt7ip8.png',
        dark: 'https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle-dark_cv2taw.png',
    },
    {
        light: 'https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle-3_tgdnaa.png',
        dark: 'https://raw.githubusercontent.com/tailark/assets/refs/heads/main/circle-dark_cv2taw.png',
    },
]

export const Product = () => {
    const [active, setActive] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % screenshots.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <LazyMotion features={domAnimation}>
        <AnimatePresence
            mode="popLayout"
            initial={false}>
            <m.div
                key={active}
                initial={{ opacity: 0, scale: 0.9, y: 32 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.1, y: -32 }}
                transition={{ duration: 1.2, type: 'spring', bounce: 0.2, ease: 'easeInOut' }}
                className="origin-bottom">
                <div className="bg-background/60 ring-foreground/10 rounded-2xl p-1 shadow-xl shadow-black/10 ring-1">
                    <div className="bg-card dark:bg-background ring-border-illustration relative aspect-auto origin-top overflow-hidden rounded-xl border-4 border-l-8 border-transparent shadow ring-1">
                        <Image
                            className="object-top-left min-w-xl size-full object-cover dark:hidden"
                            src={screenshots[active].light}
                            alt="app screenshot"
                            width={2880}
                            height={1920}
                            sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px"
                        />
                        <Image
                            className="object-top-left min-w-xl not-dark:hidden size-full object-cover"
                            src={screenshots[active].dark}
                            alt="app screenshot"
                            width={2880}
                            height={1920}
                            sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px"
                        />
                    </div>
                </div>
            </m.div>
        </AnimatePresence>
    
        </LazyMotion>)
}
