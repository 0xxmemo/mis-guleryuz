'use client'

import { useSyncExternalStore } from 'react'

export function useMedia(query: string): boolean {
    const subscribe = (callback: () => void) => {
        const mediaQuery = window.matchMedia(query)
        mediaQuery.addEventListener('change', callback)
        return () => mediaQuery.removeEventListener('change', callback)
    }

    const getSnapshot = () => window.matchMedia(query).matches
    const getServerSnapshot = () => true

    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
