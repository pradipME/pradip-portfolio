import { useRef } from 'react'
import { useGSAP } from '../../animations/gsapSetup'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { heroEntrance, heroScroll, heroScrollIndicator } from '../../animations/heroAnimations'
import { HeroBackground } from './HeroBackground'
import { HeroEyebrow } from './HeroEyebrow'
import { HeroHeadline } from './HeroHeadline'
import { HeroSubheading } from './HeroSubheading'
import { HeroActions } from './HeroActions'
import { HeroScrollIndicator } from './HeroScrollIndicator'

interface HeroProps {
  active: boolean
}

export function Hero({ active }: HeroProps) {
  const rootRef = useRef<HTMLElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (!active || reducedMotion || !rootRef.current) return

      heroEntrance(rootRef.current)
      heroScroll(rootRef.current)
      heroScrollIndicator(rootRef.current)
    },
    { scope: rootRef, dependencies: [active, reducedMotion] },
  )

  return (
    <section
      id="hero"
      ref={rootRef}
      aria-label="Introduction"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      <div data-hero-background className="absolute inset-0">
        <HeroBackground />
      </div>

      <div
        data-hero-content
        className="relative z-10 mx-auto flex w-full max-w-(--content-max) flex-1 flex-col justify-center px-(--gutter) pb-36 pt-28"
      >
        <HeroEyebrow />
        <HeroHeadline />
        <HeroSubheading />
        <HeroActions />
      </div>

      <HeroScrollIndicator />
    </section>
  )
}
