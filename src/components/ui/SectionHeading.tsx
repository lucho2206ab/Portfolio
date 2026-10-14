import { cn } from '@/lib/cn'

export interface SectionHeadingProps {
  readonly eyebrow: string
  readonly title: string
  readonly subtitle?: string
  readonly className?: string
  readonly align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl',
        className,
      )}
    >
      <span className="font-mono text-xs tracking-[0.22em] text-accent-text uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance text-fg sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-pretty text-muted">{subtitle}</p>
      )}
    </div>
  )
}
