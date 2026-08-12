import { profile } from '../../data/profile'

export function AboutPortrait() {
  return (
    <figure data-reveal className="mx-auto w-full max-w-sm md:max-w-none">
      <div className="overflow-hidden border border-line bg-background-secondary">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src="/images/portrait.webp"
            alt={profile.name}
            loading="lazy"
            decoding="async"
            width={816}
            height={816}
            className="h-full w-full object-cover object-center"
            style={{ filter: 'grayscale(0.82) contrast(1.04) brightness(0.94)' }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(10,10,10,0)_52%,rgba(10,10,10,0.5)_100%)]"
          />
        </div>
        <figcaption className="flex items-center justify-between gap-4 border-t border-line px-4 py-3">
          <span className="truncate text-[0.65rem] font-medium uppercase tracking-[0.25em] text-text-primary">
            {profile.name}
          </span>
          <span className="flex shrink-0 items-center gap-2 text-[0.6rem] uppercase tracking-[0.2em] text-text-tertiary">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
            {profile.location}
          </span>
        </figcaption>
      </div>
    </figure>
  )
}
