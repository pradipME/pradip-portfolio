import { gsap } from './gsapSetup'

export function heroEntrance(scope: HTMLElement): gsap.core.Timeline {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  const lines = gsap.utils.toArray<HTMLElement>(scope.querySelectorAll('[data-hero-line]'))
  const eyebrow = scope.querySelector('[data-hero-eyebrow]')
  const subheading = scope.querySelector('[data-hero-subheading]')
  const actions = scope.querySelector('[data-hero-actions]')

  if (lines.length > 0) {
    gsap.set(lines, { yPercent: 110 })
    tl.to(lines, { yPercent: 0, duration: 1.1, ease: 'power4.out', stagger: 0.12 }, 0.08)
  }

  if (eyebrow) {
    tl.fromTo(eyebrow, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.7 }, 0.05)
  }
  if (subheading) {
    tl.fromTo(subheading, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
  }
  if (actions) {
    tl.fromTo(actions, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.55')
  }

  return tl
}

export function heroScroll(scope: HTMLElement): gsap.core.Timeline {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: scope,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  })
  const content = scope.querySelector('[data-hero-content]')
  const background = scope.querySelector('[data-hero-background]')

  if (content) tl.to(content, { yPercent: -10, opacity: 0.25, ease: 'none' }, 0)
  if (background) tl.to(background, { yPercent: 14, ease: 'none' }, 0)

  return tl
}

export function heroScrollIndicator(scope: HTMLElement): gsap.core.Timeline {
  const line = scope.querySelector('[data-scroll-line]')
  const tl = gsap.timeline()

  if (line) {
    tl.fromTo(
      line,
      { yPercent: -120 },
      { yPercent: 220, duration: 1.8, ease: 'none', repeat: -1, repeatDelay: 0.4 },
    )
  }

  return tl
}
