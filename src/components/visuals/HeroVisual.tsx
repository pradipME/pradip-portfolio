const LINES: Array<[number, number, number, number]> = [
  [70, 80, 210, 60],
  [210, 60, 360, 110],
  [360, 110, 470, 70],
  [210, 60, 310, 200],
  [360, 110, 310, 200],
  [70, 80, 150, 190],
  [150, 190, 310, 200],
  [310, 200, 250, 330],
  [150, 190, 120, 360],
  [250, 330, 450, 250],
  [250, 330, 300, 500],
  [120, 360, 90, 520],
  [300, 500, 400, 430],
  [450, 250, 400, 430],
  [470, 70, 450, 250],
]

const NODES: Array<{ x: number; y: number; accent?: boolean }> = [
  { x: 70, y: 80 },
  { x: 210, y: 60 },
  { x: 360, y: 110, accent: true },
  { x: 470, y: 70 },
  { x: 310, y: 200 },
  { x: 150, y: 190 },
  { x: 450, y: 250 },
  { x: 250, y: 330, accent: true },
  { x: 120, y: 360 },
  { x: 400, y: 430 },
  { x: 300, y: 500 },
  { x: 90, y: 520 },
]

export function HeroVisual() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-48 right-[-12%] h-[62vmin] w-[62vmin] rounded-full bg-[radial-gradient(circle,var(--accent-soft)_0%,transparent_62%)]" />
      <div className="absolute -bottom-44 left-[-10%] h-[54vmin] w-[54vmin] rounded-full bg-[radial-gradient(circle,rgba(232,71,42,0.07)_0%,transparent_60%)]" />
      <div className="absolute top-1/2 right-[-6rem] h-[72vmin] w-[72vmin] -translate-y-1/2 rounded-full border border-line" />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.05]"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <pattern id="hero-grid" width="72" height="72" patternUnits="userSpaceOnUse">
            <path
              d="M72 0H0V72"
              fill="none"
              stroke="var(--text-secondary)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:180px_180px]" />

      <svg
        data-hero-float
        className="absolute right-[1%] top-[10%] hidden h-[66vh] w-auto opacity-70 sm:block"
        viewBox="0 0 520 620"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <g stroke="var(--line)" strokeWidth="1.4">
          {LINES.map(([x1, y1, x2, y2]) => (
            <line key={`${x1}-${y1}-${x2}-${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} />
          ))}
        </g>

        <g opacity="0.5" stroke="var(--line)" strokeWidth="1">
          <circle cx="400" cy="330" r="78" />
          <circle cx="400" cy="330" r="126" />
          <circle cx="400" cy="330" r="176" strokeDasharray="3 7" />
        </g>

        <g fill="var(--text-tertiary)">
          {NODES.filter((n) => !n.accent).map((n) => (
            <circle key={`${n.x}-${n.y}`} cx={n.x} cy={n.y} r="2.4" />
          ))}
        </g>

        <g fill="var(--accent)" opacity="0.9">
          {NODES.filter((n) => n.accent).map((n) => (
            <circle key={`${n.x}-${n.y}`} cx={n.x} cy={n.y} r="3.2" />
          ))}
        </g>

        <circle cx="400" cy="330" r="3" fill="var(--text-secondary)" opacity="0.8" />
      </svg>

      <span
        data-hero-float
        className="absolute right-[14%] top-[26%] hidden h-2 w-2 rounded-full bg-accent/80 sm:block"
      />
      <span
        data-hero-float
        className="absolute right-[38%] top-[58%] hidden h-1.5 w-1.5 rounded-full bg-text-tertiary/80 sm:block"
      />

      <div className="noise-overlay absolute inset-0 opacity-[0.05]" />
    </div>
  )
}
