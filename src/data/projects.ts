export type ProjectId =
  | 'expedientes'
  | 'precision'
  | 'huella'
  | 'origamix'
  | 'mapas'

export interface ProjectItem {
  readonly id: ProjectId
  /** `null` = sin repositorio público. */
  readonly repo: string | null
  /** `null` = sin demo pública. */
  readonly demo: string | null
  readonly stack: readonly string[]
  readonly featured?: boolean
}

/**
 * Proyectos mostrados (selección confirmada).
 * Título y descripción se traducen vía `projects.items.<id>`.
 */
export const projects: readonly ProjectItem[] = [
  {
    id: 'expedientes',
    repo: null,
    demo: null,
    featured: true,
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'TypeScript', 'SvelteKit'],
  },
  {
    id: 'precision',
    repo: null,
    demo: null,
    featured: true,
    stack: ['ESP32', 'ESP-NOW', 'C/C++', 'React', 'TypeScript', 'n8n'],
  },
  {
    id: 'huella',
    repo: 'https://github.com/lucho2206ab/Mi_huella_app',
    demo: 'https://mi-huella-app-frontend.onrender.com',
    stack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 'origamix',
    repo: 'https://github.com/lucho2206ab/Origamix',
    demo: 'https://origamix.vercel.app',
    stack: ['TypeScript', 'HTML5', 'CSS3'],
  },
  {
    id: 'mapas',
    repo: 'https://github.com/lucho2206ab/Asic_mapas',
    demo: null,
    stack: ['Python', 'OpenStreetMap'],
  },
]
