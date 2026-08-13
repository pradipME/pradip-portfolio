import { gsap, ScrollTrigger } from './gsapSetup'
import { prefersReducedMotion } from '../lib/motion'

export type CosmicIntensity =
  | 'auto'
  | 'hero'
  | 'philosophy'
  | 'work'
  | 'skills'
  | 'about'
  | 'contact'

interface SectionIntensity {
  id: string
  value: number
}

const SECTION_INTENSITY: SectionIntensity[] = [
  { id: '#hero', value: 0.9 },
  { id: '#philosophy', value: 0.5 },
  { id: '#work', value: 0.26 },
  { id: '#skills', value: 0.24 },
  { id: '#about', value: 0.4 },
  { id: '#contact', value: 0.16 },
]

const STATIC_INTENSITY: Record<string, number> = {
  hero: 0.9,
  philosophy: 0.5,
  work: 0.26,
  skills: 0.24,
  about: 0.4,
  contact: 0.16,
}

export function setupCosmicIntensity(
  root: HTMLElement,
  intensity: CosmicIntensity,
): (() => void) | undefined {
  const proxy = { value: 1 }
  const apply = () => {
    root.style.opacity = proxy.value.toFixed(3)
  }

  if (intensity !== 'auto') {
    proxy.value = STATIC_INTENSITY[intensity] ?? 0.6
    apply()
    return undefined
  }

  if (prefersReducedMotion() || window.matchMedia('(max-width: 767px)').matches) {
    proxy.value = prefersReducedMotion() ? 0.6 : 0.5
    apply()
    return undefined
  }

  const animateTo = (value: number) => {
    gsap.to(proxy, {
      value,
      duration: 0.8,
      ease: 'power1.inOut',
      overwrite: true,
      onUpdate: apply,
    })
  }

  const triggers = SECTION_INTENSITY.map(({ id, value }) => {
    const element = document.querySelector(id)
    if (!element) return null
    return ScrollTrigger.create({
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => animateTo(value),
      onEnterBack: () => animateTo(value),
    })
  })

  proxy.value = SECTION_INTENSITY[0].value
  apply()

  return () => {
    triggers.forEach((trigger) => trigger?.kill())
    gsap.killTweensOf(proxy)
  }
}
