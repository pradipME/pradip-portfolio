import type { AboutData } from '../../data/about'
import { cn } from '../../lib/cn'

interface AboutIntroProps {
  data: AboutData
}

export function AboutIntro({ data }: AboutIntroProps) {
  return (
    <div className="about-intro">
      <p
        data-about-label
        className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-text-tertiary"
      >
        <span className="text-accent">{data.index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-line" />
        {data.label}
      </p>

      <h2 className="mt-8 font-display text-[clamp(2.75rem,6vw,5.75rem)] font-bold uppercase leading-[0.92] tracking-[-0.02em] text-text-primary">
        {data.heading.map((line, index) => (
          <span key={line} className="block overflow-hidden">
            <span
              data-about-line
              className={cn(
                'block will-change-transform',
                index === data.heading.length - 1 && 'text-accent',
              )}
            >
              {line}
            </span>
          </span>
        ))}
      </h2>

      <p
        data-about-intro
        className="mt-10 max-w-xl text-[clamp(1.1rem,2vw,1.5rem)] leading-snug text-text-primary"
      >
        {data.intro}
      </p>
    </div>
  )
}
