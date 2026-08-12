import { gsap } from './gsapSetup'

export function aboutEntrance(scope: HTMLElement): gsap.core.Timeline {
  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    scrollTrigger: { trigger: scope, start: 'top 72%' },
  })

  const label = scope.querySelector<HTMLElement>('[data-about-label]')
  const lines = gsap.utils.toArray<HTMLElement>(scope.querySelectorAll('[data-about-line]'))
  const intro = scope.querySelector<HTMLElement>('[data-about-intro]')
  const portrait = scope.querySelector<HTMLElement>('[data-about-portrait]')
  const halo = gsap.utils.toArray<HTMLElement>(scope.querySelectorAll('[data-about-halo]'))
  const hud = gsap.utils.toArray<HTMLElement>(scope.querySelectorAll('[data-about-hud]'))

  if (label) {
    tl.fromTo(label, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, 0)
  }

  if (lines.length > 0) {
    gsap.set(lines, { yPercent: 118 })
    tl.to(
      lines,
      { yPercent: 0, duration: 0.95, ease: 'power4.out', stagger: 0.12 },
      0.1,
    )
  }

  if (intro) {
    tl.fromTo(intro, { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.45')
  }

  if (portrait) {
    gsap.set(portrait, { opacity: 0, y: 44, scale: 0.97 })
    tl.to(portrait, { opacity: 1, y: 0, scale: 1, duration: 1.05 }, 0.25)
  }

  if (halo.length > 0) {
    tl.fromTo(
      halo,
      { opacity: 0 },
      { opacity: 1, duration: 1.3, ease: 'power2.out' },
      0.45,
    )
  }

  if (hud.length > 0) {
    tl.fromTo(hud, { opacity: 0 }, { opacity: 1, duration: 0.7, stagger: 0.07 }, 0.65)
  }

  return tl
}
