import type { Project } from '../../data/projects'

interface ProjectMetaProps {
  project: Project
}

export function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <div>
      <p data-reveal className="text-sm text-accent">
        {project.number}
      </p>
      <p
        data-reveal
        className="mt-4 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-text-secondary"
      >
        {project.category}
      </p>
      <h3
        data-reveal
        className="mt-3 font-display text-[clamp(2.5rem,8vw,6.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.02em] text-text-primary"
      >
        {project.title}
      </h3>
    </div>
  )
}
