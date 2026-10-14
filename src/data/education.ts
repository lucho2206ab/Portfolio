export type EducationId = 'ies' | 'aden' | 'insutec'

export interface EducationItem {
  readonly id: EducationId
  readonly institution: string
  readonly period: string
}

/** Títulos se traducen vía `experience.educationItems.<id>`. */
export const educationItems: readonly EducationItem[] = [
  { id: 'ies', institution: 'IES 9023', period: '2021 – 2024' },
  {
    id: 'aden',
    institution: 'ADEN Fundación Alta Dirección',
    period: '2010 – 2013',
  },
  { id: 'insutec', institution: 'INSUTEC', period: '2004 – 2009' },
]
