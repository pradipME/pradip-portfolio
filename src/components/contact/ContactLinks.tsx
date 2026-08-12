import { ArrowUpRight } from 'lucide-react'
import { profile } from '../../data/profile'
import { GitHubIcon } from '../projects/GitHubIcon'
import { LinkedInIcon } from './LinkedInIcon'

export function ContactLinks() {
  const emailAddress = profile.email.replace(/^mailto:/, '')
  const hasGithub = profile.github !== ''
  const hasLinkedin = profile.linkedin !== ''

  return (
    <div className="mt-16 border-t border-line pt-8 sm:mt-20">
      <p
        data-reveal
        className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-text-tertiary"
      >
        Get in touch
      </p>

      <a
        data-reveal
        href={profile.email}
        className="group mt-5 inline-flex max-w-full items-center gap-3 font-display text-[clamp(1.5rem,5vw,3.5rem)] font-medium leading-none tracking-tight text-text-primary transition-colors hover:text-accent"
      >
        <span className="truncate">{emailAddress}</span>
        <ArrowUpRight
          aria-hidden="true"
          className="h-6 w-6 shrink-0 text-accent transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none sm:h-8 sm:w-8"
        />
      </a>

      {(hasGithub || hasLinkedin) && (
        <div data-reveal className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          {hasGithub && (
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              <GitHubIcon
                aria-hidden={true}
                className="h-4 w-4 text-text-tertiary transition-colors group-hover/link:text-accent"
              />
              GitHub
            </a>
          )}
          {hasLinkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              <LinkedInIcon
                aria-hidden={true}
                className="h-4 w-4 text-text-tertiary transition-colors group-hover/link:text-accent"
              />
              LinkedIn
            </a>
          )}
        </div>
      )}
    </div>
  )
}
