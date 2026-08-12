import { hero } from '../../data/hero'

export function HeroHeadline() {
  return (
    <h1 className="mt-8 font-display text-[clamp(2.5rem,7.5vw,6.75rem)] font-bold leading-[0.95] tracking-[-0.02em] uppercase text-text-primary">
      {hero.headlineLines.map((line, index) => (
        <span key={line} className="block overflow-hidden pb-[0.08em]">
          <span data-hero-line className="block">
            {line}
            {index === hero.headlineLines.length - 1 && <span className="text-accent">.</span>}
          </span>
        </span>
      ))}
    </h1>
  )
}
