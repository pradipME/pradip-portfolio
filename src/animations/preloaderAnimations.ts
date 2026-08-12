import { gsap } from './gsapSetup'

export interface PreloaderCallbacks {
  onExitStart: () => void
  onComplete: () => void
}

export function createPreloaderTimeline(
  scope: HTMLElement,
  callbacks: PreloaderCallbacks,
): gsap.core.Timeline {
  const mark = scope.querySelector('[data-preloader-mark]')
  const caption = scope.querySelector('[data-preloader-caption]')
  const inner = scope.querySelector('[data-preloader-inner]')

  const tl = gsap.timeline()

  if (mark) {
    tl.fromTo(mark, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' })
  }
  if (caption) {
    tl.fromTo(caption, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' }, '-=0.25')
  }

  tl.add(callbacks.onExitStart, '+=0.3')

  if (inner) {
    tl.to(inner, { yPercent: -60, opacity: 0, duration: 0.45, ease: 'power2.in' }, '<')
  }
  tl.to(scope, { yPercent: -100, duration: 0.85, ease: 'power3.inOut' }, '<')

  tl.add(callbacks.onComplete)

  return tl
}
