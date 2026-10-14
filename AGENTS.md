# AGENTS.md — Portfolio personal de Luis Alberto Abreu

Documento de contexto y bitácora del proyecto. **Mantener actualizado al final de cada paso.**
Responder siempre en español. Sección "Plan / Progreso" refleja el estado real.

---

## 1. Objetivo

Portfolio personal moderno, oscuro y atractivo. Inspiración: https://vinodjangid07.github.io
(fondo oscuro con gradientes violeta/azul, navbar flotante tipo píldora, hero con tipografía
grande y nombre con gradiente). Identidad propia y mejor pulido. Responsive (móvil y escritorio).

## 2. Stack (obligatorio)

- Vite + React + TypeScript (**strict**)
- Tailwind CSS
- Framer Motion (animaciones)
- lucide-react (íconos)
- react-i18next (i18next) — español por defecto + inglés, con selector de idioma
- **Sin librerías de componentes pesadas. Pedir confirmación antes de agregar dependencias extra.**

Fuentes previstas: Space Grotesk (display) + JetBrains Mono (detalles), vía Google Fonts en `index.html`.

## 3. Datos personales (usar EXACTAMENTE esto, no inventar)

- **Nombre:** Luis Alberto Abreu
- **Título:** Software Developer | Backend & Full Stack
- **Ubicación:** Mendoza, Argentina
- **Email:** luis.abreumza@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/luis-abreu-070b848a
- **GitHub:** https://github.com/lucho2206ab
- **NO publicar el teléfono.** (El CV lo contiene: +54 261 4715573 — excluir del sitio.)

### Perfil
Desarrollador con formación técnica y experiencia práctica en desarrollo web, APIs, automatización
e integración de sistemas. Participo en la modernización de aplicaciones internas y procesos de
gestión con Python, FastAPI, TypeScript, PostgreSQL y frontend moderno. También tengo experiencia
en proyectos IoT que integran hardware, software, datos y automatización. Mi trayectoria previa en
gestión administrativa me permite traducir necesidades de negocio en soluciones tecnológicas.

### Skills (agrupadas)
- **Backend & APIs:** Python, FastAPI, Flask, Node.js, Express.js, APIs RESTful
- **Frontend:** TypeScript, JavaScript (ES6+), React, SvelteKit, HTML5, CSS3, responsive
- **Bases de datos:** PostgreSQL, MySQL, Supabase, MongoDB
- **Automatización & IA:** n8n, APIs de IA generativa, Telegram Bots, Claude Code
- **IoT & Embedded:** ESP32/Wemos, Arduino, C/C++, sensores, ESP-NOW
- **Herramientas:** Git, GitHub, Power BI

### Experiencia (timeline)
1. **Jefe Administrativo — ASIC 1ª Zona de Riego (2023 – presente):** desarrollo y modernización
   de sistemas internos; app web de gestión de expedientes y mesa de entradas para reemplazar un
   sistema legacy (Python/FastAPI, PostgreSQL, TypeScript, SvelteKit); sistemas usados por más de
   50 usuarios; mejoras que redujeron tiempos de atención ~30%.
2. **Desarrollador IoT & Full Stack (Freelance) — Proyecto de Agricultura de Precisión (2024 – 2026):**
   arquitectura end-to-end (sensores, firmware, ESP-NOW, backend, BD, dashboard en React + TypeScript,
   automatización con n8n y Telegram con IA generativa), documentación de arquitectura.
3. **Asistente de Tesorería — OSDE (2006 – 2023):** ERP, bases de datos, automatización, migración y
   control de datos. (Mostrar resumida, como contexto del perfil híbrido.)

### Formación
- **Técnico Superior en Desarrollo de Software — IES 9023 (2021–2024)** *(principal)*
- Técnico en Administración de Empresas — ADEN Fundación Alta Dirección (2010–2013)
- Técnico en Higiene y Seguridad Laboral — INSUTEC (2004–2009)
- **Certificaciones:** Claude Code in Action — Anthropic Academy (2026); Power BI con IA — Daxus Latam
  (2025); Inmersión en IA con Google Gemini — Alura (2025)
- **Idiomas:** Español nativo, Inglés en formación

## 4. Secciones (orden)

Navbar flotante (Inicio, Sobre mí, Skills, Experiencia, Proyectos, Contacto)
→ Hero (nombre con gradiente, título, 2 botones: "Contacto" y "Descargar CV")
→ Sobre mí → Skills por categoría → Experiencia → Proyectos (tarjetas con descripción, stack y
links a repo/demo) → Contacto (email, GitHub, LinkedIn) → Footer.

## 5. Proyectos

- Fuente: repos públicos de https://github.com/lucho2206ab
- **Proponer una selección de 4–6 antes de implementar.**
- Incluir siempre tarjetas para:
  - **Sistema de expedientes** (ASIC, sin repo público) — sin datos confidenciales.
  - **Proyecto de agricultura de precisión** (sin repo público) — sin datos confidenciales.

### Repos públicos detectados (2026-10, vía API GitHub)
| Repo | Descripción | Lenguaje | Estrellas |
|------|-------------|----------|-----------|
| Origamix | Juego de bloques estilo tetris | TypeScript | 0 |
| Asic_mapas | Proyecto capas en Open Street Maps | Python | 0 |
| Mi_huella_app | App que calcula la huella de carbono | TypeScript | 1 |
| SeleccionArgentina | Web de estadísticas de fútbol | JavaScript | 0 |
| tp_nro2 | Proyecto en React-Vite | JavaScript | 0 |
| Dengue | (sin descripción) | EJS | 0 |
| Crud-NJs | (sin descripción) | — | 0 |
| pruebapython | Prueba de repositorio de programas en Python | — | 0 |
| crud_progra2 | CRUD Node.js, TypeScript, Express, Passport | — | 0 |

> Nota: `gh` no está autenticado en este entorno; se usó la API pública de GitHub.

## 6. Diseño

- Tema **oscuro por defecto** con toggle claro/oscuro.
- Paleta: fondo casi negro azulado; acentos violeta → azul → celeste.
- Glassmorphism sutil en tarjetas.
- Tipografía: Space Grotesk (display) + JetBrains Mono (detalles).
- Animaciones de entrada al hacer scroll + microinteracciones en hover.
- **Respetar `prefers-reduced-motion`.**

## 7. Logo

- Marca de **5 líneas rectas que convergen en un punto inferior** (espiga/brote).
- Recrear como componente SVG inline con trazo en degradé celeste→violeta.
- Usar en navbar; generar favicon con trazo más grueso.
- Referencias originales en `src/assets/` (a incorporar por el usuario si aún no están).

## 8. Calidad

- Contenido en `src/data/*.ts`; traducciones en `src/i18n/`.
- Componentes pequeños y tipados, **sin `any`**.
- Accesibilidad (semántica, contraste, foco visible, alt), SEO (title, meta description, Open Graph).
- Objetivo Lighthouse > 90.
- Sin lorem ipsum ni datos inventados; dejar `TODO` claro si falta algo.

## 9. Despliegue

- **Producción: Vercel.** URL: https://luis-abreu-portfolio.vercel.app
  - Proyecto Vercel: `luisab-projects/luis-abreu-portfolio` (scope `luisab-projects`, usuario
    `lucho2206ab`).
  - `vercel.json` en la raíz fuerza `framework: vite`, `buildCommand: npm run build` y
    `outputDirectory: dist` (el proyecto se creó con preset "Other" y servía `public/` → 404).
  - **Repo GitHub conectado:** `https://github.com/lucho2206ab/Portfolio` (branch `main`) →
    auto-deploy en cada push (`vercel git connect` respondió "already connected").
  - Deploy manual: `vercel --prod --yes` (requiere `vercel login`; sesión local ya activa).
- **Dominio en meta tags:** todas las URLs SEO (canonical, `og:url`, `og:image`, `twitter:image`,
  `robots.txt`, `sitemap.xml`) apuntan a `https://luis-abreu-portfolio.vercel.app`.
- (Opcional) Dominio propio a futuro: actualizar las URLs anteriores y `vercel domains add`.
- (Opcional) workflow de GitHub Actions para GitHub Pages.

## 10. Forma de trabajo

Trabajar por pasos; **al terminar cada paso correr `npm run build` y el linter, resumir lo hecho y
esperar OK** antes de seguir.

1. Scaffolding y config
2. Layout, navbar y hero
3. Resto de secciones
4. i18n y tema
5. Pulido y despliegue

## 11. Cómo ejecutar en local

```bash
npm install       # instalar dependencias (una vez)
npm run dev       # servidor de desarrollo -> http://localhost:5173
npm run build     # type-check (tsc -b) + build de producción a dist/
npm run preview   # sirve el build de dist/ en local
npm run lint      # oxlint
```

---

## Plan / Progreso

- [x] **Paso 0** — Crear `AGENTS.md` con contexto. Lectura del CV (`public/CV_...pdf`) y relevamiento
      de repos públicos de GitHub. — *completado*
- [x] **Paso 1** — Scaffolding (Vite+React+TS), Tailwind, Framer Motion, lucide-react, i18n, config
      strict, `vite.config.ts` con base GH Pages, ESLint. — *completado*
- [x] **Paso 2** — Layout, navbar flotante (píldora, glass, scroll-spy, menú móvil) y hero
      (nombre con gradiente, ubicación, 2 CTAs, redes). — *completado*
- [x] **Paso 3** — Sobre mí, Skills, Experiencia (+ Formación/Certificaciones/Idiomas), Proyectos
      (5 confirmados) y Contacto + Footer. — *completado*
- [x] **Paso 4** — i18n (ES/EN) **hecho** (adelantado al Paso 3, pedido del usuario). **Tema
      claro/oscuro hecho** (tokens semánticos + toggle + anti-FOUC).
- [x] **Paso 5** — Pulido, accesibilidad, SEO y despliegue (Vercel). Hecho: skip-link, `og.png`,
  `robots.txt`, `sitemap.xml`, `.gitignore`, repo git + GitHub y deploy en Vercel con auto-deploy.

## Decisiones / Notas

- Package manager: **npm** (npm 11, Node 24).
- Teléfono del CV **excluido** del sitio por pedido explícito.
- `create-vite` ejecutado en carpeta temporal y copiado para **preservar `public/`**. (Alternativa:
  se generan los archivos a mano.)

### Versiones instaladas (Paso 1, 2026-10)
- React 19.2 · Vite 8.3 · TypeScript ~6.0 · @vitejs/plugin-react 6
- Tailwind CSS **v4.3** (config CSS-first con `@import "tailwindcss"` + `@theme`; plugin
  `@tailwindcss/vite`). No hay `tailwind.config.js`.
- framer-motion 14 · lucide-react 1.56 · i18next 26 · react-i18next 17
- Linter: **oxlint** (default de `create-vite` 9; script `npm run lint`). No se agregó ESLint.
- Alias `@/*` → `src/*` (configurado en `vite.config.ts` y `tsconfig.app.json`; sin `baseUrl`
  por deprecación en TS 6).
- `base: '/'` en `vite.config.ts` (sirve tanto para Vercel como para un eventual sitio de usuario).
- `strict` + `noUncheckedIndexedAccess` + `exactOptionalPropertyTypes` + `verbatimModuleSyntax`.
- Fuentes Space Grotesk + JetBrains Mono vía Google Fonts en `index.html`.
- `public/favicon.svg`: **placeholder** con la marca de 5 líneas (se hero-ifica en Paso 2).

### Pendientes / TODOs
- Logo real en `src/components/ui/Logo.tsx` — *hecho* (Paso 2). `public/favicon.svg` usa la misma
  marca de 5 líneas con trazo más grueso. Colocar referencias originales en `src/assets/` (hoy solo
  `.gitkeep`) si el usuario las aporta.
- `public/og.png` (1200×630) generado con Edge headless — *hecho* (Paso 5). `og:image`/`twitter:image`
  activos en `index.html`, apuntando al dominio de Vercel.
- Despliegue hecho (Paso 5): GitHub (`lucho2206ab/Portfolio`) + Vercel
  (`luis-abreu-portfolio.vercel.app`, auto-deploy en push a `main`).
- **Dominio propio (a futuro):** el usuario comprará un dominio más adelante. Cuando lo tenga:
  reemplazar `https://luis-abreu-portfolio.vercel.app` por el nuevo dominio en `index.html`
  (canonical, `og:url`, `og:image`, `twitter:image`), `public/robots.txt` y `public/sitemap.xml`;
  luego `vercel domains add <dominio>` y configurar el DNS. **La URL actual queda perfecta por ahora.**

### Paso 2 — Layout / navbar / hero (2026-10)
- `Background` global (glows violeta/azul/celeste + viñeta) en `src/components/layout/Background.tsx`.
- `Navbar` flotante tipo píldora con glass, scroll-spy (`useActiveSection`), píldora activa animada
  (`layoutId`) y menú móvil con `AnimatePresence`. Lado derecho **reservado** para selector de idioma
  y toggle de tema (Paso 4).
- `Hero`: badge de ubicación, nombre con gradiente, título mono, 2 CTAs ("Contacto" → `#contacto`,
  "Descargar CV" → PDF) y redes. Cue de scroll a `#sobre-mi`.
- Helpers: `src/lib/cn.ts` (clases) y `src/lib/motion.ts` (variantes). `MotionConfig reducedMotion="user"`.
- **Íconos de marca propios** en `src/components/ui/icons.tsx` (GitHub/LinkedIn): lucide-react v1 ya
  **no** incluye íconos de marcas.
- Nav labels migrados a i18n (Paso 4): `src/data/navigation.ts` guarda `id` + `key` (`nav.*`) y los
  textos viven en `src/i18n/locales`.
- Las secciones del Paso 3 deben incluir `scroll-mt-28` (offset por el navbar fijo).
- **Selección de proyectos confirmada (5):** Sistema de expedientes (ASIC), Agricultura de precisión
  (IoT), Mi_huella_app, Origamix, Asic_mapas.

### Paso 3 + i18n (2026-10)
- Secciones: `About`, `Skills`, `Experience` (timeline + Formación/Certificaciones/Idiomas),
  `Projects` (5 tarjetas), `Contact` y `Footer`. Todas con `Reveal`/`Stagger` (`whileInView`) y
  `scroll-mt-28`.
- **i18n (react-i18next):** `src/i18n/index.ts` + `config.ts` (idiomas `es`/`en`, labels, detección,
  persistencia en `localStorage`, actualiza `<html lang>`). Locales tipadas: `es.ts` es la fuente de
  tipos (`TranslationSchema`) y `en.ts` la implementa → paridad garantizada. Selector `ES/EN` en el
  navbar (`LanguageSwitcher`).
- Contenido: textos traducibles en `src/i18n/locales`; datos neutros en `src/data/*`
  (`skills`, `experience`, `education`, `certifications`, `projects`, `navigation`).
- Demos reales: Mi_huella_app (Render) y Origamix (Vercel). Repos de los 3 públicos enlazados.
- `main.tsx` monta `<Suspense fallback={null}>` por la inicialización de i18n.
- Bundle: ~451 kB (143 kB gzip) — framer-motion + i18next. *(Optimización en Paso 5.)*
- **Tema claro/oscuro:** ver Paso 4b.

### Paso 4b — Tema claro/oscuro (2026-10)
- Tokens semánticos con CSS variables en `src/index.css`: `--page`, `--elevated`, `--surface`,
  `--surface-strong`, `--line`, `--line-strong`, `--fg`, `--body`, `--muted`, `--subtle`,
  `--accent-text`, `--gradient-hero`. Se exponen como colores Tailwind vía `@theme inline`
  (`bg-page`, `text-fg`, `border-line`, `ring-page`, etc.).
- Tema por clase en `<html>`: `:root`/`.dark` (por defecto) y `.light`. Variant `dark` custom:
  `@custom-variant dark (&:where(.dark, .dark *))`. La paleta y `color-scheme` cambian por tema.
- `src/hooks/useTheme.ts`: sincroniza la clase del DOM, persiste en `localStorage` (clave `theme`) y
  actualiza `meta[name="theme-color"]`. `src/components/layout/ThemeToggle.tsx` (Sun/Moon) en el
  navbar, con `aria-pressed` y labels i18n `a11y.themeToDark` / `a11y.themeToLight`.
- Anti-FOUC: script inline en `index.html` aplica la clase antes del paint (respeta
  `prefers-color-scheme` si no hay preferencia guardada).
- Clase utilitaria `.text-gradient` (nombre del hero) usando `var(--gradient-hero)`.
- **Decisión:** los fondos/gradientes con color de marca (glows del `Background`, botón primario)
  usan clases con `dark:` para ajustar intensidad; el botón primario mantiene `text-white` fijo.
- Todos los componentes migrados del set ad-hoc (`white/*`, `slate-*`, `ink-*`) a tokens semánticos.

### Paso 5 — Pulido, accesibilidad, SEO y despliegue (2026-10)
- **Accesibilidad:** `SkipLink` (`src/components/layout/SkipLink.tsx`) con `sr-only` +
  `focus:not-sr-only`, apuntando a `<main id="contenido">`. Foco visible global (`:focus-visible`)
  definido en `src/index.css`. Labels i18n `a11y.*` (nav, menú, idioma, tema, volver arriba, saltar).
- **SEO:** `index.html` con `title`, `description`, `author`, `theme-color`, `canonical`, Open Graph
  (`og:*` + `og:image` 1200×630 + `image:alt`) y Twitter (`summary_large_image`).
  `public/og.png` generado con Edge headless (`--headless=new --screenshot --window-size=1200,630`).
  `public/robots.txt` y `public/sitemap.xml` presentes. Todas las URLs apuntan al dominio de Vercel.
- **Rendimiento:** bundle ~452 kB (143 kB gzip) — framer-motion + i18next. Fuentes con `display=swap`
  + `preconnect`. *(Quedó pendiente un posible code-splitting si se busca exprimir Lighthouse.)*
- **Repositorio / despliegue:**
  - `git init` (rama `main`), commit inicial + push a `https://github.com/lucho2206ab/Portfolio`
    (rebase sobre el README autogenerado por GitHub). Identidad local:
    `Luis Alberto Abreu <luis.abreumza@gmail.com>`.
  - `vercel.json` corrige el preset (Vite/`dist`). Proyecto `luisab-projects/luis-abreu-portfolio`
    linkeado desde el repo (`vercel link`); GitHub **conectado** (`vercel git connect`) →
    auto-deploy en cada push a `main`.
  - `.gitignore` ampliado: `.vercel`, `.env*` (excepto `.env.example`), `.vercelignore`.
  - Producción verificada: `/`, `/robots.txt`, `/sitemap.xml`, `/og.png`, `/favicon.svg` → 200.
