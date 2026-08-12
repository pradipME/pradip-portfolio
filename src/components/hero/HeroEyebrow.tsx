import { hero } from '../../data/hero'

export function HeroEyebrow() {
  return (
    <p
      data-hero-eyebrow
      className="flex flex-wrap items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-text-secondary"
    >
      <span aria-hidden="true" className="h-px w-10 shrink-0 bg-accent" />
      {hero.eyebrow}
    </p>
  )
}
