import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

export interface SectionProps {
  readonly id: string
  readonly children: ReactNode
  readonly className?: string
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-28 py-20 sm:py-28', className)}>
      {children}
    </section>
  )
}
