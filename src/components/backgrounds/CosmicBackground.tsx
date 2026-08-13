import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import {
  setupCosmicIntensity,
  type CosmicIntensity,
} from '../../animations/cosmicAnimations'

interface Particle {
  x: string
  y: string
  size: number
  opacity: number
  drift: number
  delay: number
  accent?: boolean
}

interface Fragment {
  text: string
  position: string
  accent?: boolean
}

const PARTICLES: Particle[] = [
  { x: '12%', y: '16%', size: 2, opacity: 0.5, drift: 9, delay: 0 },
  { x: '24%', y: '60%', size: 3, opacity: 0.35, drift: 12, delay: 1.2 },
  { x: '46%', y: '18%', size: 2, opacity: 0.4, drift: 10, delay: 0.6 },
  { x: '58%', y: '68%', size: 2, opacity: 0.45, drift: 11, delay: 2.1 },
  { x: '76%', y: '34%', size: 3, opacity: 0.3, drift: 13, delay: 0.3 },
  { x: '86%', y: '10%', size: 2, opacity: 0.4, drift: 9, delay: 1.8 },
  { x: '30%', y: '84%', size: 2, opacity: 0.3, drift: 12, delay: 2.8 },
  { x: '70%', y: '6%', size: 2, opacity: 0.35, drift: 10, delay: 1.4 },
]

const FRAGMENTS: Fragment[] = [
  { text: '19.07°N 72.87°E', position: 'left-[-4%] top-[4%]' },
  { text: 'SYNC 04', position: 'right-[-8%] top-[16%]', accent: true },
  { text: '0x3F', position: 'bottom-[14%] left-[-8%]' },
  { text: 'REFINE', position: 'bottom-[2%] right-[0%]', accent: true },
  { text: '</>', position: 'right-[-3%] top-[44%]' },
]

interface CosmicBackgroundProps {
  intensity?: CosmicIntensity
}

export function CosmicBackground({ intensity = 'auto' }: CosmicBackgroundProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!rootRef.current) return undefined
    return setupCosmicIntensity(rootRef.current, intensity)
  }, [intensity])

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_72%_34%,rgba(232,71,42,0.05),transparent_60%)]" />

      <div className="absolute right-[-14%] top-[16%] w-[clamp(24rem,62vmin,42rem)] max-md:opacity-60">
        <div className="cosmic-glow absolute -inset-[16%] rounded-full bg-[radial-gradient(circle,rgba(232,71,42,0.1),transparent_62%)]" />

        <svg
          viewBox="0 0 900 560"
          className="relative h-auto w-full"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <radialGradient id="cosmic-core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="72%" stopColor="#020202" />
              <stop offset="100%" stopColor="#0d0d0d" />
            </radialGradient>
            <linearGradient id="cosmic-disk-band" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(232,71,42,0)" />
              <stop offset="12%" stopColor="rgba(232,71,42,0.16)" />
              <stop offset="26%" stopColor="rgba(232,71,42,0.48)" />
              <stop offset="36%" stopColor="rgba(255,150,110,0.75)" />
              <stop offset="45%" stopColor="rgba(232,71,42,0.5)" />
              <stop offset="62%" stopColor="rgba(232,71,42,0.18)" />
              <stop offset="82%" stopColor="rgba(232,71,42,0.06)" />
              <stop offset="100%" stopColor="rgba(232,71,42,0)" />
            </linearGradient>
            <radialGradient id="cosmic-atmo" cx="50%" cy="50%" r="50%">
              <stop offset="42%" stopColor="rgba(232,71,42,0.13)" />
              <stop offset="72%" stopColor="rgba(120,20,12,0.07)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>
            <mask id="cosmic-disk-back">
              <rect width="900" height="560" fill="white" />
              <ellipse cx="450" cy="288" rx="150" ry="54" fill="black" />
              <rect y="282" width="900" height="278" fill="black" />
            </mask>
            <mask id="cosmic-disk-front">
              <rect width="900" height="560" fill="white" />
              <ellipse cx="450" cy="288" rx="150" ry="54" fill="black" />
              <rect y="0" width="900" height="300" fill="black" />
            </mask>
          </defs>

          <circle cx="450" cy="300" r="380" fill="url(#cosmic-atmo)" />

          <g stroke="rgba(255,255,255,0.035)" strokeWidth="1">
            <path d="M450 300 L110 150" />
            <path d="M450 300 L780 120" />
            <path d="M450 300 L800 470" />
            <path d="M450 300 L120 480" />
          </g>

          <g fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1">
            <ellipse cx="450" cy="300" rx="316" ry="118" />
          </g>

          <g className="cosmic-disk">
            <ellipse
              cx="450"
              cy="300"
              rx="370"
              ry="140"
              fill="none"
              strokeDasharray="2 10"
              stroke="rgba(255,255,255,0.045)"
              strokeWidth="1"
            />
            <ellipse
              cx="450"
              cy="300"
              rx="424"
              ry="162"
              fill="none"
              strokeDasharray="1 6"
              stroke="rgba(232,71,42,0.16)"
              strokeWidth="1"
            />
            <circle
              cx="450"
              cy="300"
              r="152"
              fill="none"
              strokeDasharray="1 5"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          </g>

          <ellipse
            cx="450"
            cy="302"
            rx="300"
            ry="104"
            fill="url(#cosmic-disk-band)"
            mask="url(#cosmic-disk-back)"
            opacity="0.4"
          />
          <ellipse
            cx="450"
            cy="302"
            rx="300"
            ry="104"
            fill="url(#cosmic-disk-band)"
            mask="url(#cosmic-disk-front)"
            opacity="0.9"
          />

          <circle cx="450" cy="300" r="84" fill="url(#cosmic-core)" />
          <circle cx="450" cy="300" r="84" fill="none" stroke="rgba(232,71,42,0.16)" strokeWidth="1" />
          <circle cx="450" cy="300" r="90" fill="none" stroke="rgba(255,160,120,0.5)" strokeWidth="1.4" />
          <circle cx="450" cy="300" r="96" fill="none" stroke="rgba(232,71,42,0.35)" strokeWidth="6" opacity="0.5" />
          <circle cx="450" cy="300" r="103" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        </svg>

        {FRAGMENTS.map((fragment) => (
          <span
            key={fragment.text}
            className={`cosmic-frag absolute text-[0.55rem] uppercase tracking-[0.3em] ${
              fragment.accent ? 'text-accent/60' : 'text-text-tertiary/70'
            } ${fragment.position} max-md:hidden`}
          >
            {fragment.text}
          </span>
        ))}

        {PARTICLES.map((particle) => (
          <span
            key={`${particle.x}-${particle.y}`}
            className="cosmic-particle absolute rounded-full max-md:hidden"
            style={
              {
                left: particle.x,
                top: particle.y,
                width: particle.size,
                height: particle.size,
                opacity: particle.opacity,
                backgroundColor: particle.accent
                  ? 'var(--accent)'
                  : 'var(--text-tertiary)',
                '--cosmic-drift': `${particle.drift}s`,
                '--cosmic-delay': `${particle.delay}s`,
              } as CSSProperties
            }
          />
        ))}

        <span aria-hidden="true" className="absolute left-[30%] top-[1%] text-text-tertiary/50 max-md:hidden">
          +
        </span>
        <span aria-hidden="true" className="absolute bottom-[22%] right-[5%] text-accent/40 max-md:hidden">
          +
        </span>

        <svg
          viewBox="0 0 60 30"
          className="absolute left-[-7%] top-[36%] h-6 w-12 max-md:hidden"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M0 15h16v8h12" stroke="rgba(232,71,42,0.28)" strokeWidth="1" />
          <rect x="30" y="21" width="3" height="3" fill="rgba(232,71,42,0.5)" />
          <circle cx="46" cy="15" r="2" fill="rgba(255,255,255,0.25)" />
        </svg>

        <svg
          viewBox="0 0 60 30"
          className="absolute bottom-[26%] right-[-5%] h-6 w-12 rotate-90 max-md:hidden"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M0 15h16v8h12" stroke="rgba(232,71,42,0.22)" strokeWidth="1" />
          <rect x="30" y="21" width="3" height="3" fill="rgba(232,71,42,0.4)" />
        </svg>
      </div>
    </div>
  )
}
