import { profile } from '../../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-(--content-max) flex-col gap-2 px-(--gutter) py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <p className="text-xs text-text-tertiary">Built with React, TypeScript and Tailwind</p>
      </div>
    </footer>
  )
}
