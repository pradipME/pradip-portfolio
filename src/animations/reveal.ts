import { gsap } from './gsapSetup'

export function fadeUp(element: HTMLElement | null): void {
  if (!element || prefersReducedMotion()) return

  gsap.fromTo(element, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9 })
}

export function revealUp(
  target: HTMLElement,
  options: { start?: string } = {},
): gsap.core.Tween {
  return gsap.fromTo(
    target,
    { opacity: 0, y: 32 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: target, start: options.start ?? 'top 85%' },
    },
  )
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
