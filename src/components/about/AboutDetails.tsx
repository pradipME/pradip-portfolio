import type { AboutDetailGroup } from '../../data/about'

interface AboutDetailsProps {
  groups: AboutDetailGroup[]
}

export function AboutDetails({ groups }: AboutDetailsProps) {
  return (
    <div className="about-details">
      <div className="grid gap-12 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, index) => (
          <div key={group.title} data-reveal>
            <div className="flex items-baseline gap-3">
              <span
                aria-hidden="true"
                className="font-display text-sm leading-none text-accent"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-text-tertiary">
                {group.title}
              </h3>
            </div>
            <ul className="mt-5 space-y-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-text-secondary"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.6em] h-px w-3 shrink-0 bg-line"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
