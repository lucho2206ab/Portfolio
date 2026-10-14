import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

export interface ChipProps {
  readonly children: ReactNode
  readonly className?: string
}

export function Chip({ children, className }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-body',
        className,
      )}
    >
      {children}
    </span>
  )
}
