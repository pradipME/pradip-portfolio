import { profile } from '../../data/profile'

const ROLES = ['Developer', 'Tester', 'Problem Solver']

export function AboutPortrait() {
  return (
    <figure
      data-about-portrait
      className="about-portrait relative mx-auto w-full max-w-[22rem] md:max-w-[26rem] lg:mx-0 lg:max-w-none"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          data-about-halo
          className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(232,71,42,0.2)_0%,rgba(232,71,42,0.05)_46%,transparent_68%)] blur-2xl"
        />
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <g data-about-halo stroke="var(--line)" strokeWidth="1">
            <circle cx="200" cy="200" r="148" />
            <circle cx="200" cy="200" r="188" strokeDasharray="2 7" />
          </g>
          <circle
            data-about-halo
            cx="200"
            cy="200"
            r="118"
            stroke="rgba(232,71,42,0.45)"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative">
        <img
          src="/images/portrait-cutout.webp"
          alt={profile.name}
          loading="lazy"
          decoding="async"
          width={816}
          height={816}
          className="aspect-square h-auto w-full object-contain"
          style={{ filter: 'grayscale(0.55) contrast(1.06) brightness(0.98)' }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/40 to-transparent"
        />

        <span
          aria-hidden="true"
          data-about-hud
          className="pointer-events-none absolute left-0 top-0 h-7 w-7 border-l border-t border-line"
        />
        <span
          aria-hidden="true"
          data-about-hud
          className="pointer-events-none absolute right-0 top-0 h-7 w-7 border-r border-t border-line"
        />
        <span
          aria-hidden="true"
          data-about-hud
          className="pointer-events-none absolute bottom-0 left-0 h-7 w-7 border-b border-l border-line"
        />
        <span
          aria-hidden="true"
          data-about-hud
          className="pointer-events-none absolute bottom-0 right-0 h-7 w-7 border-b border-r border-line"
        />

        <svg
          data-about-hud
          aria-hidden="true"
          focusable="false"
          className="pointer-events-none absolute right-4 top-4 hidden h-4 w-4 text-accent md:block"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path d="M8 0v16M0 8h16" stroke="currentColor" strokeWidth="1" />
          <circle cx="8" cy="8" r="2" fill="currentColor" />
        </svg>
      </div>

      <div
        data-about-hud
        className="mt-5 flex items-center justify-between text-[0.62rem] font-medium uppercase tracking-[0.28em] text-text-tertiary"
      >
        <span className="text-text-secondary">{'{ PRADIP }'}</span>
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          {profile.location}
        </span>
      </div>

      <div
        data-about-hud
        className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-line pt-3 text-[0.62rem] uppercase tracking-[0.22em] text-text-tertiary"
      >
        {ROLES.map((role, index) => (
          <span key={role} className="flex items-center gap-3">
            {index > 0 && (
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-text-tertiary/70" />
            )}
            {role}
          </span>
        ))}
      </div>
    </figure>
  )
}
