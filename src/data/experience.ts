export type ExperienceId = 'asic' | 'precision' | 'osde'

export interface ExperienceItem {
  readonly id: ExperienceId
  readonly company: string
  readonly start: string
  /** `null` = actualidad (se traduce con `common.present`). */
  readonly end: string | null
  readonly stack?: readonly string[]
}

/**
 * Datos no traducibles de cada experiencia. El rol y los bullets se traducen vía
 * `experience.items.<id>` en `src/i18n/locales`.
 */
export const experienceItems: readonly ExperienceItem[] = [
  {
    id: 'asic',
    company: 'ASIC 1ª Zona de Riego',
    start: '2023',
    end: null,
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'TypeScript', 'SvelteKit'],
  },
  {
    id: 'precision',
    company: 'Proyecto de Agricultura de Precisión',
    start: '2024',
    end: '2026',
    stack: ['ESP32', 'ESP-NOW', 'C/C++', 'React', 'TypeScript', 'n8n'],
  },
  {
    id: 'osde',
    company: 'OSDE',
    start: '2006',
    end: '2023',
  },
]
