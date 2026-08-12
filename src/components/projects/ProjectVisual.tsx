import type { Project } from '../../data/projects'
import { cn } from '../../lib/cn'

interface ProjectVisualProps {
  project: Project
}

export function ProjectVisual({ project }: ProjectVisualProps) {
  return (
    <div aria-hidden="true" className="h-full w-full">
      {project.visual === 'finflow' && <FinFlowVisual />}
      {project.visual === 'thinkit' && <ThinkiTVisual />}
      {project.visual === 'selenium' && <SeleniumVisual />}
    </div>
  )
}

function FinFlowVisual() {
  const transactions = [
    { label: 'Grocery', amount: '− $4.50', accent: false },
    { label: 'Transfer', amount: '+ $250.00', accent: true },
    { label: 'Coffee', amount: '− $3.20', accent: false },
  ]

  return (
    <div className="flex h-full w-full flex-col justify-between gap-6 bg-background-secondary p-6 sm:p-10">
      <div className="flex items-center justify-between">
        <span className="font-display text-sm font-semibold tracking-tight text-text-primary">
          FinFlow
        </span>
        <span className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.25em] text-text-tertiary">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          Dashboard
        </span>
      </div>

      <div>
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-text-tertiary">
          Available balance
        </p>
        <p className="mt-2 font-display text-4xl font-bold tracking-tight text-text-primary sm:text-6xl">
          $12,480<span className="text-text-tertiary">.50</span>
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {['Send', 'Request', 'Cards'].map((action) => (
            <span
              key={action}
              className="rounded-full border border-line px-4 py-1.5 text-xs text-text-secondary"
            >
              {action}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-line pt-5">
        <p className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-text-tertiary">
          Recent activity
        </p>
        <ul className="space-y-2.5">
          {transactions.map((txn) => (
            <li key={txn.label} className="flex items-center justify-between text-sm">
              <span className="text-text-secondary">{txn.label}</span>
              <span
                className={cn(
                  'font-medium',
                  txn.accent ? 'text-accent' : 'text-text-primary',
                )}
              >
                {txn.amount}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ThinkiTVisual() {
  const categories = ['Fruits & Veg', 'Snacks', 'Beverages', 'Household']
  const products = [
    { name: 'Apple', meta: '1 kg', tone: 'bg-surface' },
    { name: 'Milk', meta: '1 L', tone: 'bg-accent-soft' },
    { name: 'Bread', meta: '400 g', tone: 'bg-surface' },
    { name: 'Rice', meta: '5 kg', tone: 'bg-surface' },
    { name: 'Coffee', meta: '250 g', tone: 'bg-surface' },
    { name: 'Soap', meta: '1 pc', tone: 'bg-surface' },
  ]

  return (
    <div className="flex h-full w-full flex-col justify-between gap-6 bg-background-secondary p-6 sm:p-10">
      <div className="flex items-center justify-between">
        <span className="font-display text-sm font-semibold tracking-tight text-text-primary">
          ThinkiT
        </span>
        <span className="flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-text-secondary">
          <span aria-hidden="true" className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Delivering in 10 min
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <span key={category} className="rounded-full bg-surface px-3 py-1 text-xs text-text-secondary">
            {category}
          </span>
        ))}
      </div>

      <ul className="grid grid-cols-3 gap-3 sm:grid-cols-6">
        {products.map((product) => (
          <li
            key={product.name}
            className={cn(
              'flex flex-col justify-between gap-6 rounded-md p-3',
              product.tone,
            )}
          >
            <span className="text-xs font-medium text-text-primary">{product.name}</span>
            <span className="text-[0.65rem] text-text-tertiary">{product.meta}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SeleniumVisual() {
  const testCases = [
    { name: 'Login flow', status: 'PASS' },
    { name: 'Add to cart', status: 'PASS' },
    { name: 'Checkout', status: 'FAIL' },
    { name: 'Order history', status: 'PASS' },
  ]

  return (
    <div className="flex h-full w-full flex-col bg-background-secondary">
      <div className="flex items-center gap-2 border-b border-line px-5 py-3.5 sm:px-8">
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-surface" />
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-surface" />
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-surface" />
        <span className="ml-3 flex-1 truncate rounded bg-surface px-3 py-1 font-mono text-xs text-text-tertiary">
          src/test/java — AutomationSuite.java
        </span>
      </div>

      <div className="flex-1 space-y-2.5 p-5 sm:p-8">
        {testCases.map((testCase, index) => (
          <div key={testCase.name} className="flex items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-3">
              <span className="w-6 text-xs text-text-tertiary">0{index + 1}</span>
              <span className="text-text-secondary">{testCase.name}</span>
            </div>
            <span
              className={cn(
                'rounded-full px-3 py-0.5 text-xs font-semibold',
                testCase.status === 'PASS'
                  ? 'bg-accent-soft text-accent'
                  : 'bg-surface text-text-tertiary',
              )}
            >
              {testCase.status}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 border-t border-line px-5 py-3 text-xs text-text-tertiary sm:px-8">
        <span aria-hidden="true" className="text-accent">
          ›
        </span>
        <span className="font-mono">mvn clean test</span>
      </div>
    </div>
  )
}
