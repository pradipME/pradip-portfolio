import { ArrowRight } from 'lucide-react'
import { hero } from '../../data/hero'

export function HeroActions() {
  return (
    <div data-hero-actions className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
      <a
        href={hero.primaryCta.href}
        className="group inline-flex items-center gap-2.5 rounded-full bg-text-primary px-7 py-3.5 text-sm font-semibold text-background transition-colors duration-300 hover:bg-accent"
      >
        {hero.primaryCta.label}
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
      <a
        href={hero.secondaryCta.href}
        className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-medium text-text-primary transition-colors duration-300 hover:border-accent hover:text-accent"
      >
        {hero.secondaryCta.label}
      </a>
    </div>
  )
}
