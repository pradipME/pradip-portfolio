import { useRef } from 'react'
import { useGSAP } from '../../animations/gsapSetup'
import { skillsAnimation } from '../../animations/skillsAnimations'
import { skills } from '../../data/skills'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useReveal } from '../../hooks/useReveal'
import { SectionLabel } from '../ui/SectionLabel'
import { SkillGroup } from './SkillGroup'

export function Skills() {
  const rootRef = useRef<HTMLElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useReveal(rootRef)

  useGSAP(
    () => {
      if (!rootRef.current || reducedMotion) return
      skillsAnimation(rootRef.current)
    },
    { scope: rootRef, dependencies: [reducedMotion] },
  )

  return (
    <section id="skills" ref={rootRef} aria-label="Capabilities" className="bg-background">
      <div className="mx-auto w-full max-w-(--content-max) px-(--gutter) py-24 sm:py-32">
        <SectionLabel index={skills.index} label={skills.label} />

        <h2
          data-reveal
          className="mt-8 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.02em] text-text-primary"
        >
          <span className="block">What I</span>
          <span className="block">Work With</span>
        </h2>

        <p
          data-reveal
          className="mt-8 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          {skills.statement}
        </p>

        <div className="mt-16 sm:mt-24">
          {skills.groups.map((group) => (
            <SkillGroup key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}
