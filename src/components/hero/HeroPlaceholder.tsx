import { profile } from '../../data/profile'

export function HeroPlaceholder() {
  return (
    <section className="flex min-h-dvh items-center">
      <div className="mx-auto w-full max-w-(--content-max) px-(--gutter) pb-16 pt-28">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-accent">
          {profile.role}
        </p>
        <h1 className="font-display text-[clamp(2.5rem,9vw,7.5rem)] font-bold leading-[0.95] tracking-tight text-text-primary">
          {profile.name}
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
          {profile.tagline}
        </p>
        <p className="mt-16 text-xs uppercase tracking-[0.3em] text-text-tertiary">
          Foundation verified — visual sections land in the next phase
        </p>
      </div>
    </section>
  )
}
