import { useRef, useState } from 'react'
import { useGSAP } from '../../animations/gsapSetup'
import { createPreloaderTimeline } from '../../animations/preloaderAnimations'
import { prefersReducedMotion } from '../../lib/motion'
import { profile } from '../../data/profile'

interface PreloaderProps {
  onExitStart: () => void
}

export function Preloader({ onExitStart }: PreloaderProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [hidden, setHidden] = useState(false)

  useGSAP(
    () => {
      if (!rootRef.current || prefersReducedMotion()) return

      createPreloaderTimeline(rootRef.current, {
        onExitStart,
        onComplete: () => setHidden(true),
      })
    },
    { scope: rootRef, dependencies: [onExitStart] },
  )

  if (prefersReducedMotion() || hidden) return null

  return (
    <div
      ref={rootRef}
      role="status"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div data-preloader-inner className="flex flex-col items-center">
        <span
          data-preloader-mark
          className="font-display text-6xl font-bold tracking-tight text-text-primary"
        >
          PS<span className="text-accent">.</span>
        </span>
        <span
          data-preloader-caption
          className="mt-3 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-text-tertiary"
        >
          {profile.name}
        </span>
      </div>
    </div>
  )
}
