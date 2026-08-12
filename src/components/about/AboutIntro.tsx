import type { AboutData } from '../../data/about'
import { SectionLabel } from '../ui/SectionLabel'

interface AboutIntroProps {
  data: AboutData
}

export function AboutIntro({ data }: AboutIntroProps) {
  return (
    <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-16">
      <div>
        <SectionLabel index={data.index} label={data.label} />

        <h2
          data-reveal
          className="mt-8 font-display text-[clamp(2.75rem,8vw,7rem)] font-bold uppercase leading-[0.9] tracking-[-0.02em] text-text-primary"
        >
          {data.heading.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
      </div>

      <div className="flex flex-col justify-center md:pt-0">
        <p
          data-reveal
          className="max-w-2xl text-[clamp(1.25rem,3vw,1.75rem)] leading-snug text-text-primary"
        >
          {data.intro}
        </p>
        <p
          data-reveal
          className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary"
        >
          {data.philosophy}
        </p>
      </div>
    </div>
  )
}
