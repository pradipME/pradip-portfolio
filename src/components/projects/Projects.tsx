import { useRef } from 'react'
import { useGSAP } from '../../animations/gsapSetup'
import { projectAnimations } from '../../animations/projectAnimations'
import { projects } from '../../data/projects'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useReveal } from '../../hooks/useReveal'
import { SectionLabel } from '../ui/SectionLabel'
import { ProjectRow } from './ProjectRow'

export function Projects() {
  const rootRef = useRef<HTMLElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useReveal(rootRef)

  useGSAP(
    () => {
      if (!rootRef.current || reducedMotion) return
      projectAnimations(rootRef.current)
    },
    { scope: rootRef, dependencies: [reducedMotion] },
  )

  return (
    <section id="work" ref={rootRef} aria-label="Selected projects">
      <div className="mx-auto w-full max-w-(--content-max) px-(--gutter) py-24 sm:py-32">
        <SectionLabel index="02" label="Selected Work" />

        <h2
          data-reveal
          className="mt-8 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.02em] text-text-primary"
        >
          <span className="block">Selected</span>
          <span className="block">Projects</span>
        </h2>

        <div className="mt-16 sm:mt-24">
          {projects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
