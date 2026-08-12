interface AboutQuoteProps {
  text: string
  label: string
}

export function AboutQuote({ text, label }: AboutQuoteProps) {
  return (
    <blockquote data-reveal className="about-quote">
      <div className="relative overflow-hidden border border-line bg-background-secondary/70 px-7 py-8 sm:px-10 sm:py-10">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-7 right-6 font-display text-[7rem] leading-none text-accent/10"
        >
          &ldquo;
        </span>
        <p className="relative max-w-3xl font-display text-xl leading-snug text-text-primary sm:text-2xl md:text-[1.75rem]">
          {text}
        </p>
        <footer className="mt-6 flex items-center gap-3 text-[0.65rem] font-medium uppercase tracking-[0.32em] text-text-tertiary">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          {label}
        </footer>
      </div>
    </blockquote>
  )
}
