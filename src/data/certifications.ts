export interface Certification {
  readonly name: string
  readonly issuer: string
  readonly year: string
}

/** Nombres propios: no se traducen. */
export const certifications: readonly Certification[] = [
  { name: 'Claude Code in Action', issuer: 'Anthropic Academy', year: '2026' },
  { name: 'Power BI con IA', issuer: 'Daxus Latam', year: '2025' },
  {
    name: 'Inmersión en IA con Google Gemini',
    issuer: 'Alura',
    year: '2025',
  },
]
