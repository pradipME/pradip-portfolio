import { useRef } from 'react'
import { useGSAP } from '../../animations/gsapSetup'
import { philosophyAnimation } from '../../animations/philosophyAnimations'
import { philosophy } from '../../data/philosophy'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useReveal } from '../../hooks/useReveal'
import { SectionLabel } from '../ui/SectionLabel'
import { PhilosophyWord } from './PhilosophyWord'

export function Philosophy() {
  const rootRef = useRef<HTMLElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useReveal(rootRef)

  useGSAP(
    () => {
      if (!rootRef.current || reducedMotion) return
      philosophyAnimation(rootRef.current)
    },
    { scope: rootRef, dependencies: [reducedMotion] },
  )

  return (
    <section
      id="philosophy"
      ref={rootRef}
      aria-label="Philosophy"
      className="relative bg-background"
    >
      <h2 className="sr-only">Philosophy</h2>

      <div className="flex min-h-svh flex-col justify-between px-(--gutter) py-20 md:py-16">
        <div className="mx-auto w-full max-w-(--content-max)">
          <SectionLabel index={philosophy.index} label={philosophy.label} />
        </div>

        <div className="mx-auto flex w-full max-w-(--content-max) flex-col justify-center">
          {philosophy.words.map((word) => (
            <PhilosophyWord key={word} word={word} />
          ))}
        </div>

        <div className="mx-auto w-full max-w-(--content-max)">
          <p
            data-philosophy-statement
            className="max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            {philosophy.statement}
          </p>
        </div>
      </div>
    </section>
  )
}
