import { navLinks } from '../../data/profile'
import { cn } from '../../lib/cn'

interface NavbarProps {
  revealed?: boolean
}

export function Navbar({ revealed = true }: NavbarProps) {
  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b border-line bg-background/80 backdrop-blur-sm transition-[opacity,transform] duration-700 ease-out',
        revealed
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-3 opacity-0',
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-(--content-max) items-center justify-between px-(--gutter) py-4"
      >
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-text-primary"
        >
          PS<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-2 md:inline-flex" title="Open to work">
            <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="sr-only">Open to work</span>
          </span>

          <a
            href="#contact"
            className="rounded-full border border-line px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:text-accent"
          >
            Let&apos;s talk
          </a>
        </div>
      </nav>
    </header>
  )
}
