import { Bike, Clock, MapPin, Search, ShoppingCart } from 'lucide-react'
import { cn } from '../../lib/cn'

const CATEGORIES = ['Fruits & Veg', 'Snacks', 'Beverages', 'Household']

const PRODUCTS = [
  { name: 'Apple', meta: '1 kg', icon: 'apple' },
  { name: 'Milk', meta: '1 L', icon: 'milk' },
  { name: 'Bread', meta: '400 g', icon: 'bread' },
  { name: 'Rice', meta: '5 kg', icon: 'rice' },
  { name: 'Coffee', meta: '250 g', icon: 'coffee' },
  { name: 'Soap', meta: '1 pc', icon: 'soap' },
] as const

type ProductIconName = (typeof PRODUCTS)[number]['icon']

function ProductIcon({ name }: { name: ProductIconName }) {
  switch (name) {
    case 'apple':
      return (
        <svg viewBox="0 0 64 64" className="h-9 w-9 sm:h-12 sm:w-12" aria-hidden="true">
          <defs>
            <radialGradient id="thinkit-apple" cx="0.35" cy="0.3" r="0.9">
              <stop offset="0%" stopColor="#ef5b3c" />
              <stop offset="100%" stopColor="#b72e14" />
            </radialGradient>
          </defs>
          <path
            d="M33 20c-4-6-9-9-14-9"
            stroke="#4a4a52"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="41" cy="18" rx="6" ry="2.6" fill="#c9a46a" transform="rotate(-26 41 18)" />
          <circle cx="33" cy="40" r="17" fill="url(#thinkit-apple)" />
          <circle cx="27" cy="32" r="4" fill="#f4f4f2" opacity="0.22" />
        </svg>
      )
    case 'milk':
      return (
        <svg viewBox="0 0 64 64" className="h-9 w-9 sm:h-12 sm:w-12" aria-hidden="true">
          <path
            d="M20 26 L24 14 h16 l4 12 v26 a4 4 0 0 1 -4 4 H24 a4 4 0 0 1 -4 -4 Z"
            fill="#f4f4f2"
            opacity="0.92"
          />
          <path d="M24 14 h16 l4 10 H20 Z" fill="#e8472a" opacity="0.92" />
          <rect x="26" y="32" width="12" height="14" rx="2" fill="#101013" />
          <circle cx="29" cy="36" r="1.2" fill="#f4f4f2" opacity="0.5" />
          <circle cx="32" cy="40" r="1.2" fill="#f4f4f2" opacity="0.5" />
        </svg>
      )
    case 'bread':
      return (
        <svg viewBox="0 0 64 64" className="h-9 w-9 sm:h-12 sm:w-12" aria-hidden="true">
          <path
            d="M16 42 h32 c0 -11 -4 -20 -16 -20 s-16 9 -16 20 z"
            fill="#8a6a44"
            opacity="0.95"
          />
          <path d="M16 42 h32 v3 a2 2 0 0 1 -2 2 H18 a2 2 0 0 1 -2 -2 z" fill="#5c442a" />
          <path
            d="M26 32 l3 4 M34 32 l3 4 M42 32 l3 4"
            stroke="#5c442a"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
          />
          <circle cx="24" cy="34" r="3" fill="#5c442a" opacity="0.18" />
        </svg>
      )
    case 'rice':
      return (
        <svg viewBox="0 0 64 64" className="h-9 w-9 sm:h-12 sm:w-12" aria-hidden="true">
          <path
            d="M22 20 h20 l4 6 v25 a3 3 0 0 1 -3 3 H21 a3 3 0 0 1 -3 -3 V26 z"
            fill="#f4f4f2"
            opacity="0.9"
          />
          <path d="M22 20 h20 l-2 -5 a2 2 0 0 0 -2 -1.5 H26 a2 2 0 0 0 -2 1.5 z" fill="#d8d8d0" />
          <rect x="24" y="32" width="16" height="13" rx="2" fill="#e8472a" opacity="0.92" />
          <circle cx="32" cy="38.5" r="2.5" fill="#f4f4f2" />
        </svg>
      )
    case 'coffee':
      return (
        <svg viewBox="0 0 64 64" className="h-9 w-9 sm:h-12 sm:w-12" aria-hidden="true">
          <path d="M21 27 h20 v9 c0 7 -4 12 -10 12 s-10 -5 -10 -12 z" fill="#6b5b4a" />
          <path
            d="M41 30 h2 c4 0 6 3 4 6 s-5 3 -7 1"
            stroke="#6b5b4a"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path d="M21 27 h20 l1 4 H20 z" fill="#3a3a40" />
          <path
            d="M29 13 c-2 -2 2 -3 0 -5 M36 13 c-2 -2 2 -3 0 -5"
            stroke="#f4f4f2"
            opacity="0.35"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'soap':
      return (
        <svg viewBox="0 0 64 64" className="h-9 w-9 sm:h-12 sm:w-12" aria-hidden="true">
          <rect x="17" y="26" width="30" height="18" rx="6" fill="#a3a3ab" opacity="0.92" />
          <rect
            x="17"
            y="26"
            width="30"
            height="18"
            rx="6"
            fill="none"
            stroke="#d8d8d0"
            strokeWidth="1.4"
          />
          <path d="M24 30 h16 M24 35 h16 M24 40 h10" stroke="#70707a" strokeWidth="1.6" opacity="0.5" />
          <circle cx="46" cy="24" r="3" fill="#f4f4f2" opacity="0.4" />
          <circle cx="52" cy="30" r="1.8" fill="#f4f4f2" opacity="0.35" />
          <circle cx="18" cy="21" r="2.4" fill="#f4f4f2" opacity="0.3" />
        </svg>
      )
  }
}

export function ThinkiTVisual() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-background-secondary font-sans">
      <div className="flex shrink-0 items-center gap-3 border-b border-line px-4 py-2.5 sm:px-6">
        <span className="font-display text-sm font-bold tracking-tight text-text-primary">
          ThinkiT<span className="text-accent">.</span>
        </span>
        <span className="hidden min-w-0 flex-1 items-center gap-2 rounded-full bg-surface px-3 py-1.5 sm:flex">
          <Search className="h-3 w-3 shrink-0 text-text-tertiary" aria-hidden="true" />
          <span className="truncate text-[0.6rem] text-text-tertiary">
            Search fruits, snacks, beverages…
          </span>
        </span>
        <span className="relative ml-auto rounded-full border border-line px-2.5 py-1.5 sm:ml-0">
          <ShoppingCart className="h-3.5 w-3.5 text-text-primary" aria-hidden="true" />
          <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[0.5rem] font-bold text-background">
            3
          </span>
        </span>
      </div>

      <div className="hidden shrink-0 items-center gap-3 border-b border-line px-4 py-2 sm:flex sm:px-6">
        <span className="flex h-7 w-9 shrink-0 items-center justify-center">
          <Bike className="animate-float h-5 w-5 text-accent" aria-hidden="true" />
        </span>
        <div className="min-w-0 text-[0.58rem] leading-tight">
          <p className="font-medium text-text-primary">Delivering in 10 min</p>
          <p className="flex items-center gap-1 truncate text-text-tertiary">
            <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" />
            Kharghar · Order #2481
          </p>
        </div>
        <span className="ml-auto inline-flex shrink-0 items-center gap-1 rounded-full bg-accent-soft px-2.5 py-1 text-[0.52rem] font-semibold uppercase tracking-[0.14em] text-accent">
          <Clock className="h-3 w-3" aria-hidden="true" />
          <span className="hidden sm:inline">Live</span>
        </span>
      </div>

      <div className="flex shrink-0 items-center gap-2 overflow-hidden border-b border-line px-4 py-2.5 sm:px-6">
        {CATEGORIES.map((category, index) => (
          <span
            key={category}
            className={cn(
              'shrink-0 rounded-full px-2.5 py-1 text-[0.55rem]',
              index === 0
                ? 'bg-accent font-medium text-background'
                : 'border border-line text-text-secondary',
            )}
          >
            {category}
          </span>
        ))}
      </div>

      <div className="min-h-0 flex-1 p-3 sm:p-5">
        <div className="grid h-full grid-cols-3 gap-2 sm:gap-3">
          {PRODUCTS.map((product, index) => (
            <div
              key={product.name}
              className={cn(
                'flex min-h-0 flex-col justify-between rounded-md border border-line bg-surface p-2 sm:p-3',
                index >= 3 && 'hidden sm:flex',
              )}
            >
              <span className="flex min-h-0 flex-1 items-center justify-center py-1">
                <ProductIcon name={product.icon} />
              </span>
              <span className="mt-1.5 truncate text-[0.58rem] font-medium text-text-primary">
                {product.name}
              </span>
              <span className="hidden truncate text-[0.5rem] text-text-tertiary sm:block">
                {product.meta}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-between gap-3 border-t border-line bg-surface/40 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-[0.6rem] font-bold text-background">
            3
          </span>
          <div className="min-w-0 text-[0.58rem] leading-tight">
            <p className="truncate font-medium text-text-primary">3 items · $18.40</p>
            <p className="truncate text-text-tertiary">Grocery + Snacks · Free delivery</p>
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-text-primary px-3.5 py-1.5 text-[0.58rem] font-semibold text-background">
          Checkout →
        </span>
      </div>
    </div>
  )
}
