import type { Project } from '../../data/projects'
import { FinFlowVisual } from '../visuals/FinFlowVisual'
import { ThinkiTVisual } from '../visuals/ThinkiTVisual'
import { SeleniumVisual } from '../visuals/SeleniumVisual'

interface ProjectVisualProps {
  project: Project
}

export function ProjectVisual({ project }: ProjectVisualProps) {
  return (
    <div aria-hidden="true" className="h-full w-full">
      {project.visual === 'finflow' && <FinFlowVisual />}
      {project.visual === 'thinkit' && <ThinkiTVisual />}
      {project.visual === 'selenium' && <SeleniumVisual />}
    </div>
  )
}
