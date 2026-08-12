import { profile } from '../../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-(--content-max) px-(--gutter) py-10 sm:py-12">
        <div className="flex flex-col gap-1.5">
          <p className="font-display text-sm font-semibold tracking-tight text-text-primary">
            {profile.name}
          </p>
          <p className="text-xs text-text-tertiary">{profile.role}</p>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
          <p className="text-xs text-text-tertiary">Built with React, TypeScript and Tailwind</p>
        </div>
      </div>
    </footer>
  )
}
