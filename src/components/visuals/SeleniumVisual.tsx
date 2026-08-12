import { CircleCheck, CircleX, Globe, Play, Terminal } from 'lucide-react'
import { cn } from '../../lib/cn'

const SUITE_TREE: Array<{ label: string; depth: number; open?: boolean }> = [
  { label: 'AutomationSuite', depth: 0, open: true },
  { label: 'LoginFlowTest', depth: 1 },
  { label: 'CheckoutFlowTest', depth: 1 },
  { label: 'CartRegressionTest', depth: 1 },
  { label: 'OrderHistoryTest', depth: 1 },
]

const TEST_ROWS = [
  { name: 'Login flow', result: 'PASS', time: '1.2s' },
  { name: 'Add to cart', result: 'PASS', time: '0.8s' },
  { name: 'Checkout flow', result: 'FAIL', time: '1.6s' },
  { name: 'Order history', result: 'PASS', time: '0.9s' },
] as const

const TERMINAL_LINES = [
  { text: '$ mvn clean test', tone: 'muted' },
  { text: '[INFO] Tests run: 12, Failures: 1, Errors: 0, Skipped: 0', tone: 'info' },
  { text: '[PASS] Login flow ........ 1.2s', tone: 'pass' },
  { text: '[PASS] Add to cart ....... 0.8s', tone: 'pass' },
  { text: '[FAIL] Checkout flow ..... 1.6s', tone: 'fail' },
  { text: '[PASS] Order history ..... 0.9s', tone: 'pass' },
] as const

const FLOW = [
  { label: 'Chrome', icon: Globe },
  { label: 'WebDriver', icon: Play },
  { label: 'TestNG', icon: Terminal },
]

export function SeleniumVisual() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-background-secondary font-mono">
      <div className="flex shrink-0 items-center gap-2 border-b border-line px-4 py-2.5 sm:px-6">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-surface" />
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-surface" />
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
        <span className="ml-3 hidden flex-1 items-center gap-2 truncate rounded bg-surface px-3 py-1 text-[0.58rem] text-text-tertiary sm:flex">
          <Globe className="h-3 w-3 shrink-0 text-text-secondary" aria-hidden="true" />
          <span className="truncate">localhost:8080 — automation-suite</span>
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 text-[0.52rem] uppercase tracking-[0.16em] text-text-secondary">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          Executing
        </span>
      </div>

      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-44 shrink-0 flex-col border-r border-line p-3 sm:flex">
          <p className="mb-2 px-1 text-[0.5rem] uppercase tracking-[0.2em] text-text-tertiary">
            Test suite
          </p>
          <ul className="min-h-0 flex-1 space-y-1 overflow-hidden text-[0.56rem]">
            {SUITE_TREE.map((node) => (
              <li
                key={node.label}
                className={cn(
                  'flex items-center gap-1.5 truncate',
                  node.depth === 0 ? 'font-semibold text-text-primary' : 'text-text-secondary',
                )}
                style={{ paddingLeft: `${node.depth * 0.75}rem` }}
              >
                <span className="shrink-0 text-accent" aria-hidden="true">
                  {node.open ? '▾' : '▸'}
                </span>
                <span className="truncate">{node.label}</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-line pt-2 text-[0.5rem] text-text-tertiary">
            src/test/java
          </div>
        </aside>

        <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-hidden p-3 sm:p-4">
          <div className="hidden shrink-0 flex-wrap items-center gap-1.5 sm:flex">
            {FLOW.map((step, index) => (
              <span key={step.label} className="flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-2 py-1 text-[0.55rem] text-text-secondary">
                  <step.icon className="h-3 w-3 shrink-0 text-text-tertiary" aria-hidden="true" />
                  {step.label}
                </span>
                {index < FLOW.length - 1 && (
                  <span aria-hidden="true" className="text-[0.6rem] text-text-tertiary">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>

          <ul className="min-h-0 flex-1 space-y-2 overflow-hidden">
            {TEST_ROWS.map((test) => (
              <li
                key={test.name}
                className="flex items-center justify-between gap-2 rounded-md border border-line bg-surface/50 px-2.5 py-1.5 sm:px-3 sm:py-2"
              >
                <span className="flex min-w-0 items-center gap-2">
                  {test.result === 'PASS' ? (
                    <CircleCheck className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                  ) : (
                    <CircleX className="h-3.5 w-3.5 shrink-0 text-text-tertiary" aria-hidden="true" />
                  )}
                  <span className="truncate text-[0.58rem] text-text-secondary">{test.name}</span>
                </span>
                <span className="flex shrink-0 items-center gap-2.5">
                  <span className="hidden text-[0.52rem] text-text-tertiary sm:inline">
                    {test.time}
                  </span>
                  <span
                    className={cn(
                      'rounded-full px-2 py-0.5 text-[0.5rem] font-semibold',
                      test.result === 'PASS'
                        ? 'bg-accent-soft text-accent'
                        : 'bg-surface text-text-tertiary',
                    )}
                  >
                    {test.result}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <div className="hidden shrink-0 sm:block">
            <div className="flex items-center justify-between text-[0.52rem] text-text-tertiary">
              <span>Pass rate</span>
              <span className="text-text-secondary">10 / 12</span>
            </div>
            <div className="mt-1.5 flex h-1.5 w-full gap-0.5 overflow-hidden rounded-full bg-surface">
              <span className="w-[83%] rounded-full bg-accent" aria-hidden="true" />
              <span className="w-[17%] rounded-full bg-text-tertiary" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      <div className="shrink-0 border-t border-line bg-[#0c0c0e] px-4 py-2.5 sm:px-6">
        <div className="flex items-center gap-2 text-[0.5rem] uppercase tracking-[0.16em] text-text-tertiary">
          <Terminal className="h-3 w-3" aria-hidden="true" />
          Maven output
        </div>
        <div className="mt-1.5 space-y-0.5 overflow-hidden font-mono text-[0.54rem] leading-relaxed">
          {TERMINAL_LINES.map((line) => (
            <p
              key={line.text}
              className={cn(
                'truncate whitespace-nowrap',
                line.tone === 'muted' && 'text-text-tertiary',
                line.tone === 'info' && 'text-text-secondary',
                line.tone === 'pass' && 'text-text-primary',
                line.tone === 'fail' && 'text-accent',
              )}
            >
              {line.tone === 'pass' || line.tone === 'fail' ? (
                <>
                  <span className="text-accent">›</span> {line.text}
                </>
              ) : (
                line.text
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
