interface SkillItemProps {
  index: number
  skill: string
}

export function SkillItem({ index, skill }: SkillItemProps) {
  return (
    <li
      data-skill-item
      className="group flex items-baseline gap-5 border-b border-line py-5 transition-transform duration-300 ease-out hover:translate-x-1 motion-reduce:transform-none last:border-b-0"
    >
      <span
        aria-hidden="true"
        className="text-xs tabular-nums tracking-wide text-text-tertiary transition-colors duration-300 group-hover:text-accent"
      >
        {String(index + 1).padStart(2, '0')}
      </span>
      <span className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] font-medium uppercase leading-none tracking-tight text-text-primary transition-colors duration-300 group-hover:text-accent">
        {skill}
      </span>
    </li>
  )
}
