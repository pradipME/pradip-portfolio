import { useEffect } from 'react'
import Lenis from 'lenis'

export function useLenis(enabled = true): void {
  useEffect(() => {
    if (!enabled) return

    const lenis = new Lenis({ autoRaf: true })

    return () => lenis.destroy()
  }, [enabled])
}
