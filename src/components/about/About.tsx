import { useRef } from 'react'
import { aboutEntrance } from '../../animations/aboutAnimations'
import { useGSAP } from '../../animations/gsapSetup'
import { about } from '../../data/about'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useReveal } from '../../hooks/useReveal'
import { AboutDetails } from './AboutDetails'
import { AboutIntro } from './AboutIntro'
import { AboutPortrait } from './AboutPortrait'
import { AboutQuote } from './AboutQuote'

export function About() {
  const rootRef = useRef<HTMLElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useReveal(rootRef)

  useGSAP(
    () => {
      if (!rootRef.current || reducedMotion) return
      aboutEntrance(rootRef.current)
    },
    { scope: rootRef, dependencies: [reducedMotion] },
  )

  return (
    <section
      id="about"
      ref={rootRef}
      aria-label="About"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-52 -top-52 h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(circle,rgba(232,71,42,0.1)_0%,transparent_60%)]" />
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.016)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.016)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="noise-overlay absolute inset-0 opacity-[0.04]" />
      </div>

      <div className="relative mx-auto w-full max-w-(--content-max) px-(--gutter)">
        <div className="about-grid">
          <AboutIntro data={about} />
          <AboutPortrait />
          <AboutQuote text={about.philosophy} label="Philosophy" />
          <AboutDetails groups={about.details} />
        </div>
      </div>
    </section>
  )
}
