export function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-48 right-[-12%] h-[62vmin] w-[62vmin] rounded-full bg-[radial-gradient(circle,var(--accent-soft)_0%,transparent_62%)]" />
      <div className="absolute top-1/2 right-[-6rem] h-[72vmin] w-[72vmin] -translate-y-1/2 rounded-full border border-line" />
    </div>
  )
}
