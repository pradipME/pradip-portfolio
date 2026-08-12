import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '../animations/gsapSetup'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export function useLenis(enabled = true): void {
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (!enabled || reducedMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      anchors: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const ticker = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(ticker)

    const refresh = () => ScrollTrigger.refresh()
    const refreshTimeout = window.setTimeout(refresh, 100)
    window.addEventListener('load', refresh)

    return () => {
      window.clearTimeout(refreshTimeout)
      window.removeEventListener('load', refresh)
      gsap.ticker.remove(ticker)
      lenis.destroy()
    }
  }, [enabled, reducedMotion])
}
