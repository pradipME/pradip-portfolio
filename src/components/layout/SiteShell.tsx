import { useCallback, useState } from 'react'
import { Navbar } from '../navigation/Navbar'
import { Hero } from '../hero/Hero'
import { Philosophy } from '../philosophy/Philosophy'
import { Projects } from '../projects/Projects'
import { Footer } from '../footer/Footer'
import { Preloader } from './Preloader'
import { useLenis } from '../../hooks/useLenis'
import { prefersReducedMotion } from '../../lib/motion'

export function SiteShell() {
  const reducedMotion = prefersReducedMotion()
  const [ready, setReady] = useState(reducedMotion)
  const handleExitStart = useCallback(() => setReady(true), [])

  useLenis()

  return (
    <div id="top" className="flex min-h-dvh flex-col bg-background text-text-primary">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[110] focus:rounded-sm focus:bg-accent focus:px-4 focus:py-2 focus:font-medium focus:text-background"
      >
        Skip to content
      </a>
      {!reducedMotion && <Preloader onExitStart={handleExitStart} />}
      <Navbar revealed={ready} />
      <main id="main" className="flex-1">
        <Hero active={ready} />
        <Philosophy />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
