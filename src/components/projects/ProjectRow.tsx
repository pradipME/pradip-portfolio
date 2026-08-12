import type { Project } from '../../data/projects'
import { ProjectLinks } from './ProjectLinks'
import { ProjectMeta } from './ProjectMeta'
import { ProjectVisual } from './ProjectVisual'

interface ProjectRowProps {
  project: Project
}

export function ProjectRow({ project }: ProjectRowProps) {
  return (
    <article data-project-row className="group border-t border-line py-16 first:border-t-0 sm:py-20">
      <ProjectMeta project={project} />

      <div
        data-project-visual
        className="relative mt-10 aspect-[4/3] overflow-hidden rounded-md border border-line bg-background-secondary sm:aspect-video"
      >
        <div data-project-visual-inner className="absolute inset-0">
          <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transform-none">
            <ProjectVisual project={project} />
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <p data-reveal className="max-w-xl text-base leading-relaxed text-text-secondary">
          {project.description}
        </p>

        <div data-reveal className="flex flex-col gap-6">
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-line px-3 py-1 text-xs text-text-secondary"
              >
                {tech}
              </li>
            ))}
          </ul>
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  )
}
