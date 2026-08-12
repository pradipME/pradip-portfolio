import {
  ArrowLeftRight,
  Bell,
  ChevronRight,
  CreditCard,
  FileText,
  Home,
  LayoutDashboard,
  Lock,
  ShieldCheck,
  TrendingUp,
  User,
  Wallet,
} from 'lucide-react'
import { cn } from '../../lib/cn'

const NAV_ITEMS: Array<{ label: string; icon: typeof Home; active?: boolean }> = [
  { label: 'Overview', icon: LayoutDashboard, active: true },
  { label: 'Accounts', icon: Wallet },
  { label: 'Transfers', icon: ArrowLeftRight },
  { label: 'Cards', icon: CreditCard },
  { label: 'Statements', icon: FileText },
]

const TRANSACTIONS = [
  { label: 'Payroll', note: 'Salary credit', amount: '+ $1,850.00', positive: true },
  { label: 'Grocery', note: 'FreshMart', amount: '− $42.50', positive: false },
  { label: 'Rent', note: 'Monthly rent', amount: '− $1,200.00', positive: false },
  { label: 'Freelance', note: 'Invoice #104', amount: '+ $620.00', positive: true },
]

function BankCard() {
  return (
    <div className="relative aspect-[1.6/1] w-full overflow-hidden rounded-lg border border-line bg-[linear-gradient(135deg,#1d1d22_0%,#0e0e11_100%)] p-3.5">
      <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-accent/10" />
      <div className="absolute -bottom-12 -left-6 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(232,71,42,0.08)_0%,transparent_70%)]" />

      <div className="relative flex items-center justify-between">
        <span className="font-display text-[0.7rem] font-semibold tracking-tight text-text-primary">
          FinFlow<span className="text-accent">.</span>
        </span>
        <Lock className="h-3.5 w-3.5 text-text-tertiary" aria-hidden="true" />
      </div>

      <div className="relative mt-5 flex items-center gap-2">
        <span className="relative inline-flex h-6 w-8 items-center justify-center overflow-hidden rounded-sm border border-line bg-[linear-gradient(135deg,#f4f4f2_0%,#c9c9cf_100%)]">
          <span className="absolute -left-1 -top-2 h-7 w-4 rotate-[-24deg] bg-[linear-gradient(90deg,rgba(232,71,42,0.9),rgba(232,71,42,0.55))]" />
        </span>
        <span className="text-[0.5rem] uppercase tracking-[0.22em] text-text-tertiary">Debit</span>
      </div>

      <div className="relative mt-3 font-mono text-[0.72rem] tracking-[0.14em] text-text-primary">
        4242&nbsp;&nbsp;••••&nbsp;&nbsp;••••&nbsp;&nbsp;1048
      </div>

      <div className="relative mt-2 flex items-center justify-between text-[0.5rem] uppercase tracking-[0.18em] text-text-tertiary">
        <span>Pradip Sonawane</span>
        <span>12 / 27</span>
      </div>
    </div>
  )
}

function SpendingChart() {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between">
        <p className="text-[0.55rem] uppercase tracking-[0.2em] text-text-tertiary">Spending</p>
        <span className="flex items-center gap-1 text-[0.55rem] font-medium text-accent">
          <TrendingUp className="h-3 w-3" aria-hidden="true" />
          8.2%
        </span>
      </div>
      <svg viewBox="0 0 120 64" className="mt-2 h-14 w-full" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="finflow-bar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <rect x="2" y="30" width="10" height="34" rx="3" fill="var(--surface)" />
        <rect x="16" y="22" width="10" height="42" rx="3" fill="var(--surface)" />
        <rect x="30" y="12" width="10" height="52" rx="3" fill="var(--surface)" />
        <rect x="44" y="26" width="10" height="38" rx="3" fill="var(--surface)" />
        <rect x="58" y="6" width="10" height="58" rx="3" fill="url(#finflow-bar)" />
        <rect x="72" y="18" width="10" height="46" rx="3" fill="var(--surface)" />
        <rect x="86" y="28" width="10" height="36" rx="3" fill="var(--surface)" />
        <rect x="100" y="14" width="10" height="50" rx="3" fill="var(--surface)" />
      </svg>
    </div>
  )
}

export function FinFlowVisual() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-background-secondary font-sans">
      <div className="flex shrink-0 items-center gap-2 border-b border-line px-4 py-2.5 sm:px-5">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-surface" />
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-surface" />
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
        <span className="ml-3 hidden flex-1 truncate rounded bg-surface px-3 py-1 font-mono text-[0.6rem] text-text-tertiary sm:block">
          app.finflow.dev — Dashboard
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.14em] text-accent">
          <ShieldCheck className="h-3 w-3" aria-hidden="true" />
          <span className="hidden sm:inline">Protected</span>
        </span>
      </div>

      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-40 shrink-0 flex-col gap-0.5 border-r border-line p-3.5 sm:flex">
          <p className="mb-2.5 px-2 text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-text-tertiary">
            FinFlow
          </p>
          {NAV_ITEMS.map((item) => (
            <span
              key={item.label}
              className={cn(
                'flex items-center gap-2.5 rounded-md px-2 py-1.5 text-[0.62rem]',
                item.active
                  ? 'bg-accent-soft font-medium text-accent'
                  : 'text-text-secondary',
              )}
            >
              <item.icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {item.label}
            </span>
          ))}
          <div className="mt-auto flex items-center gap-2 rounded-md border border-line p-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20">
              <User className="h-3 w-3 text-accent" aria-hidden="true" />
            </span>
            <div className="min-w-0 text-[0.55rem] leading-tight">
              <p className="truncate font-medium text-text-primary">Pradip</p>
              <p className="truncate text-text-tertiary">Verified</p>
            </div>
          </div>
        </aside>

        <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-hidden p-3 sm:gap-4 sm:p-5">
          <div className="flex shrink-0 items-center justify-between">
            <div className="min-w-0">
              <p className="truncate text-[0.6rem] font-medium text-text-secondary">
                Welcome back, Pradip
              </p>
              <p className="font-display text-sm font-semibold tracking-tight text-text-primary sm:text-base">
                Account Overview
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-line">
                <Bell className="h-3 w-3 text-text-secondary" aria-hidden="true" />
                <span
                  aria-hidden="true"
                  className="absolute right-0.5 top-0.5 h-1.5 w-1.5 rounded-full bg-accent"
                />
              </span>
              <span className="hidden h-7 w-7 items-center justify-center rounded-full bg-accent/20 sm:flex">
                <User className="h-3 w-3 text-accent" aria-hidden="true" />
              </span>
            </div>
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-2 gap-3 sm:gap-4">
            <div className="flex min-h-0 flex-col justify-between overflow-hidden rounded-lg border border-line bg-surface/50 p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <p className="text-[0.55rem] uppercase tracking-[0.2em] text-text-tertiary">
                  Available balance
                </p>
                <Home className="h-3.5 w-3.5 text-text-tertiary" aria-hidden="true" />
              </div>
              <p className="mt-2 font-display text-xl font-bold tracking-tight text-text-primary sm:text-3xl">
                $12,480<span className="text-text-tertiary">.50</span>
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {['Send', 'Request', 'Cards'].map((action) => (
                  <span
                    key={action}
                    className="rounded-full border border-line px-2.5 py-0.5 text-[0.52rem] text-text-secondary"
                  >
                    {action}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex min-h-0 flex-col rounded-lg border border-line bg-surface/50 p-3 sm:p-4">
              <SpendingChart />
              <div className="mt-2.5 grid grid-cols-2 gap-2 border-t border-line pt-2.5">
                <div>
                  <p className="text-[0.5rem] uppercase tracking-[0.18em] text-text-tertiary">
                    Income
                  </p>
                  <p className="text-[0.7rem] font-semibold text-text-primary">$3,240</p>
                </div>
                <div>
                  <p className="text-[0.5rem] uppercase tracking-[0.18em] text-text-tertiary">
                    Spending
                  </p>
                  <p className="text-[0.7rem] font-semibold text-text-primary">$1,842</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden min-h-0 shrink-0 grid-cols-2 gap-3 sm:grid sm:gap-4">
            <div className="min-w-0">
              <BankCard />
            </div>
            <div className="flex min-h-0 flex-col rounded-lg border border-line bg-surface/50 p-3 sm:p-4">
              <p className="text-[0.55rem] uppercase tracking-[0.2em] text-text-tertiary">
                Recent activity
              </p>
              <ul className="mt-2 min-h-0 flex-1 space-y-1.5 overflow-hidden">
                {TRANSACTIONS.map((txn) => (
                  <li key={txn.label} className="flex items-center justify-between gap-2 text-[0.6rem]">
                    <span className="flex min-w-0 items-center gap-1.5">
                      <span
                        aria-hidden="true"
                        className={cn(
                          'h-1.5 w-1.5 shrink-0 rounded-full',
                          txn.positive ? 'bg-accent' : 'bg-text-tertiary',
                        )}
                      />
                      <span className="truncate text-text-secondary">
                        {txn.label}
                        <span className="hidden text-text-tertiary lg:inline"> · {txn.note}</span>
                      </span>
                    </span>
                    <span
                      className={cn(
                        'shrink-0 font-medium',
                        txn.positive ? 'text-accent' : 'text-text-primary',
                      )}
                    >
                      {txn.amount}
                    </span>
                  </li>
                ))}
              </ul>
              <span className="mt-2 inline-flex items-center gap-1 text-[0.55rem] font-medium text-text-secondary">
                View all <ChevronRight className="h-3 w-3" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
