import { ArrowUpRight } from 'lucide-react'
import { GitHubIcon } from './GitHubIcon'
import type { Project } from '../../data/projects'

interface ProjectLinksProps {
  project: Project
}

export function ProjectLinks({ project }: ProjectLinksProps) {
  const hasLive = project.live !== null
  const hasGithub = project.github !== null

  if (!hasLive && !hasGithub) return null

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-3">
      {hasLive && (
        <a
          href={project.live as string}
          target="_blank"
          rel="noreferrer"
          className="group/link inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-accent"
        >
          View project
          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 text-text-tertiary transition-colors group-hover/link:text-accent"
          />
        </a>
      )}
      {hasGithub && (
        <a
          href={project.github as string}
          target="_blank"
          rel="noreferrer"
          className="group/link inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-accent"
        >
          GitHub
          <GitHubIcon
            aria-hidden={true}
            className="h-4 w-4 text-text-tertiary transition-colors group-hover/link:text-accent"
          />
        </a>
      )}
    </div>
  )
}