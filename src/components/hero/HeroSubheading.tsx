import { hero } from '../../data/hero'

export function HeroSubheading() {
  return (
    <p
      data-hero-subheading
      className="mt-8 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
    >
      {hero.subheading}
    </p>
  )
}
