import type { AboutDetailGroup } from '../../data/about'

interface AboutDetailsProps {
  groups: AboutDetailGroup[]
}

export function AboutDetails({ groups }: AboutDetailsProps) {
  return (
    <div className="mt-20 grid gap-12 border-t border-line pt-12 sm:mt-28 md:grid-cols-3">
      {groups.map((group) => (
        <div key={group.title} data-reveal>
          <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-text-tertiary">
            {group.title}
          </h3>
          <ul className="mt-5 space-y-2.5">
            {group.items.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-text-secondary">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
