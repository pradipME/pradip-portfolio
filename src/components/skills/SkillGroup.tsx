import type { SkillGroup as SkillGroupData } from '../../data/skills'
import { SkillItem } from './SkillItem'

interface SkillGroupProps {
  group: SkillGroupData
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div
      data-skill-group
      className="grid gap-8 border-t border-line py-14 first:border-t-0 sm:py-16 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.5fr)] md:gap-12"
    >
      <div>
        <p className="text-sm text-accent">{group.number}</p>
        <h3 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold uppercase leading-[0.95] tracking-[-0.02em] text-text-primary">
          {group.title}
        </h3>
      </div>

      <ul>
        {group.skills.map((skill, index) => (
          <SkillItem key={skill} index={index} skill={skill} />
        ))}
      </ul>
    </div>
  )
}
