import { useRef } from 'react'
import { about } from '../../data/about'
import { useReveal } from '../../hooks/useReveal'
import { AboutDetails } from './AboutDetails'
import { AboutIntro } from './AboutIntro'

export function About() {
  const rootRef = useRef<HTMLElement>(null)

  useReveal(rootRef)

  return (
    <section id="about" ref={rootRef} aria-label="About" className="bg-background">
      <div className="mx-auto w-full max-w-(--content-max) px-(--gutter) py-24 sm:py-32">
        <AboutIntro data={about} />
        <AboutDetails groups={about.details} />
      </div>
    </section>
  )
}
