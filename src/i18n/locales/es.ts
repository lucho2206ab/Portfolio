export const es = {
  nav: {
    inicio: 'Inicio',
    sobreMi: 'Sobre mí',
    skills: 'Skills',
    experiencia: 'Experiencia',
    proyectos: 'Proyectos',
    contacto: 'Contacto',
  },
  a11y: {
    mainNav: 'Navegación principal',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    switchLanguage: 'Cambiar idioma',
    skipToContent: 'Saltar al contenido',
    themeToLight: 'Activar tema claro',
    themeToDark: 'Activar tema oscuro',
    backToTop: 'Volver arriba',
    viewCode: 'Ver código en GitHub',
    viewDemo: 'Ver demo',
  },
  common: {
    present: 'Presente',
    private: 'Privado',
    code: 'Código',
    demo: 'Demo',
  },
  hero: {
    tagline:
      'Desarrollo APIs, frontends modernos y automatizaciones, integrando software, datos e IoT.',
    ctaContact: 'Contacto',
    ctaCv: 'Descargar CV',
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'Perfil híbrido entre negocio y tecnología',
    paragraphs: [
      'Soy desarrollador de software con formación técnica y experiencia práctica en desarrollo web, APIs, automatización e integración de sistemas.',
      'Actualmente participo en la modernización de aplicaciones internas y procesos de gestión, trabajando con Python, FastAPI, TypeScript, PostgreSQL y tecnologías frontend modernas. También desarrollo proyectos IoT que integran hardware, software, datos y automatización.',
      'Mi trayectoria previa en gestión administrativa me permite comprender las necesidades del negocio y transformarlas en soluciones tecnológicas.',
    ],
    stats: [
      { value: '50+', label: 'usuarios usan los sistemas que mantengo' },
      { value: '~30%', label: 'menos tiempo de atención' },
      { value: '2023', label: 'digitalizando procesos internos' },
    ],
    factsTitle: 'En pocas palabras',
    facts: [
      { label: 'Ubicación', value: 'Mendoza, Argentina' },
      { label: 'Enfoque', value: 'Backend & Full Stack' },
      { label: 'Formación', value: 'Técnico Superior en Desarrollo de Software' },
      { label: 'Idiomas', value: 'Español nativo · Inglés en formación' },
    ],
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Competencias técnicas',
    subtitle: 'Tecnologías y herramientas con las que trabajo a diario.',
    groups: {
      backend: 'Backend & APIs',
      frontend: 'Frontend',
      databases: 'Bases de datos',
      automation: 'Automatización & IA',
      iot: 'IoT & Embedded',
      tools: 'Herramientas',
    },
  },
  experience: {
    eyebrow: 'Experiencia',
    title: 'Trayectoria profesional',
    subtitle: 'Experiencia laboral, formación y certificaciones.',
    workTitle: 'Experiencia laboral',
    educationTitle: 'Formación',
    certificationsTitle: 'Certificaciones',
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'En formación' },
    ],
    items: {
      asic: {
        role: 'Jefe Administrativo',
        bullets: [
          'Desarrollo y modernización de sistemas internos para digitalizar procesos administrativos y documentales.',
          'App web de gestión de expedientes y mesa de entradas para reemplazar un sistema legacy.',
          'APIs, bases de datos y aplicaciones web con Python/FastAPI, PostgreSQL, TypeScript y SvelteKit.',
          'Mejoras y automatizaciones que redujeron los tiempos de atención ~30%, en sistemas usados a diario por más de 50 usuarios.',
        ],
      },
      precision: {
        role: 'Desarrollador IoT & Full Stack (Freelance)',
        bullets: [
          'Arquitectura end-to-end: sensores, firmware, comunicación, backend, base de datos, frontend y automatización.',
          'Firmware para microcontroladores y sensores de humedad de suelo y temperatura.',
          'Comunicación entre nodos y gateway mediante ESP-NOW, con integración a servicios web.',
          'APIs y procesamiento de datos para registrar y consultar mediciones históricas.',
          'Dashboard web en React + TypeScript y automatizaciones con n8n, Telegram e IA generativa.',
        ],
      },
      osde: {
        role: 'Asistente de Tesorería',
        bullets: [
          'Gestión de sistemas ERP y procesos administrativos vinculados a pagos.',
          'Administración y control de datos; migraciones preservando la integridad de la información.',
          'Automatización de procesos con herramientas de Google.',
        ],
      },
    },
    educationItems: {
      ies: 'Técnico Superior en Desarrollo de Software',
      aden: 'Técnico en Administración de Empresas',
      insutec: 'Técnico en Higiene y Seguridad Laboral',
    },
  },
  projects: {
    eyebrow: 'Proyectos',
    title: 'Proyectos destacados',
    subtitle: 'Una selección de sistemas y aplicaciones que construí.',
    items: {
      expedientes: {
        title: 'Sistema de expedientes y mesa de entradas',
        description:
          'Aplicación web para la gestión de expedientes y mesa de entradas que reemplaza un sistema legacy. La usan a diario más de 50 personas y redujo los tiempos de atención ~30%.',
      },
      precision: {
        title: 'Agricultura de precisión (IoT)',
        description:
          'Arquitectura end-to-end para monitoreo agrícola: sensores y firmware, comunicación ESP-NOW, backend y base de datos, dashboard en React + TypeScript y automatizaciones con IA.',
      },
      huella: {
        title: 'Mi_huella_app',
        description:
          'Aplicación web que calcula la huella de carbono a partir de los hábitos del usuario.',
      },
      origamix: {
        title: 'Origamix',
        description:
          'Juego de bloques estilo Tetris con mecánicas de apilado y puntuación.',
      },
      mapas: {
        title: 'Asic_mapas',
        description:
          'Proyecto de capas y mapas interactivos sobre OpenStreetMap.',
      },
    },
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Construyamos algo juntos',
    subtitle:
      '¿Tenés un proyecto, una vacante o una propuesta? Escribime y te respondo a la brevedad.',
    emailLabel: 'Email',
    emailCta: 'Enviar correo',
    githubCta: 'Ver perfil',
    linkedinCta: 'Conectar',
    open: 'Abrir',
  },
  footer: {
    tagline: 'Desarrollo software backend y full stack.',
    nav: 'Navegación',
    social: 'Redes',
    rights: 'Todos los derechos reservados.',
    builtWith: 'Hecho con React, TypeScript y Tailwind CSS.',
  },
}

export type TranslationSchema = typeof es
