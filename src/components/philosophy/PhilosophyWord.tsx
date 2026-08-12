interface PhilosophyWordProps {
  word: string
}

export function PhilosophyWord({ word }: PhilosophyWordProps) {
  return (
    <p
      data-philosophy-word
      className="font-display text-[clamp(3.5rem,16vw,9rem)] font-bold uppercase leading-[0.9] tracking-[-0.03em] text-text-primary"
    >
      {word}
      <span className="text-accent">.</span>
    </p>
  )
}
