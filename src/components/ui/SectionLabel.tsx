import { cn } from '../../lib/cn'

interface SectionLabelProps {
  index: string
  label: string
  className?: string
}

export function SectionLabel({ index, label, className }: SectionLabelProps) {
  return (
    <p
      data-reveal
      className={cn(
        'flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.32em] text-text-tertiary',
        className,
      )}
    >
      <span className="text-accent">{index}</span>
      <span aria-hidden="true" className="h-px w-8 bg-line" />
      {label}
    </p>
  )
}
