export function HeroScrollIndicator() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
    >
      <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-text-tertiary">
        Scroll
      </span>
      <span className="relative h-14 w-px overflow-hidden bg-line">
        <span data-scroll-line className="absolute inset-0 bg-accent" />
      </span>
    </div>
  )
}
