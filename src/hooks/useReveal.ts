import type { RefObject } from 'react'
import { gsap, useGSAP } from '../animations/gsapSetup'
import { revealUp } from '../animations/reveal'
import { prefersReducedMotion } from '../lib/motion'

interface UseRevealOptions {
  selector?: string
  start?: string
}

export function useReveal<T extends HTMLElement>(
  scopeRef: RefObject<T | null>,
  options: UseRevealOptions = {},
): void {
  const { selector = '[data-reveal]', start = 'top 85%' } = options

  useGSAP(
    () => {
      if (!scopeRef.current || prefersReducedMotion()) return

      const targets = gsap.utils.toArray<HTMLElement>(
        scopeRef.current.querySelectorAll(selector),
      )
      targets.forEach((target) => revealUp(target, { start }))
    },
    { scope: scopeRef, dependencies: [selector, start] },
  )
}
