import { gsap } from './gsapSetup'

export function fadeUp(element: HTMLElement | null): void {
  if (!element || prefersReducedMotion()) return

  gsap.fromTo(element, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9 })
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
