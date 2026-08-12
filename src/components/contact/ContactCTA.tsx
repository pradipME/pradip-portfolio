import type { ContactData } from '../../data/contact'
import { SectionLabel } from '../ui/SectionLabel'

interface ContactCTAProps {
  data: ContactData
}

export function ContactCTA({ data }: ContactCTAProps) {
  return (
    <div>
      <SectionLabel index={data.index} label={data.label} />

      <h2
        data-reveal
        className="mt-8 font-display text-[clamp(2.5rem,9vw,8rem)] font-bold uppercase leading-[0.9] tracking-[-0.02em] text-text-primary"
      >
        {data.heading.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>

      <p
        data-reveal
        className="mt-10 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
      >
        {data.statement}
      </p>
    </div>
  )
}
