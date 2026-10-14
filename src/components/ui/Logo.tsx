import { useId } from 'react'

export interface LogoProps {
  readonly className?: string
  /** Si se pasa, el SVG se expone como imagen accesible con esa etiqueta. */
  readonly label?: string
}

/**
 * Marca personal: 5 líneas rectas que convergen en un punto inferior
 * (espiga/brote), con trazo en degradé celeste → violeta.
 */
export function Logo({ className, label }: LogoProps) {
  const gradientId = useId()

  const a11y = label
    ? ({ role: 'img', 'aria-label': label } as const)
    : ({ 'aria-hidden': true } as const)

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} {...a11y}>
      <defs>
        <linearGradient
          id={gradientId}
          x1="4"
          y1="3"
          x2="20"
          y2="21"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#38bdf8" />
          <stop offset="0.55" stopColor="#4f7cff" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <g
        stroke={`url(#${gradientId})`}
        strokeWidth="1.8"
        strokeLinecap="round"
      >
        <line x1="12" y1="21" x2="12" y2="3" />
        <line x1="12" y1="21" x2="8.2" y2="3.6" />
        <line x1="12" y1="21" x2="15.8" y2="3.6" />
        <line x1="12" y1="21" x2="4.6" y2="7" />
        <line x1="12" y1="21" x2="19.4" y2="7" />
      </g>
    </svg>
  )
}
