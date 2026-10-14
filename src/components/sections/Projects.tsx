import { useTranslation } from 'react-i18next'
import { ExternalLink, Lock } from 'lucide-react'
import { Chip } from '@/components/ui/Chip'
import { Container } from '@/components/ui/Container'
import { GithubIcon } from '@/components/ui/icons'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Stagger, StaggerItem } from '@/components/ui/Reveal'
import { projects } from '@/data/projects'
import { cn } from '@/lib/cn'

export function Projects() {
  const { t } = useTranslation()

  return (
    <Section id="proyectos">
      <Container>
        <SectionHeading
          eyebrow={t('projects.eyebrow')}
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
        />

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const isPrivate = project.repo === null
            return (
              <StaggerItem key={project.id} className="h-full">
                <article
                  className={cn(
                    'flex h-full flex-col rounded-2xl border bg-surface p-6 transition-colors',
                    project.featured
                      ? 'border-accent-violet/30 hover:border-accent-violet/50'
                      : 'border-line hover:border-line-strong',
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-balance text-fg">
                      {t(`projects.items.${project.id}.title`)}
                    </h3>
                    {isPrivate && (
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[10px] tracking-wide text-muted uppercase">
                        <Lock className="h-3 w-3" />
                        {t('common.private')}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {t(`projects.items.${project.id}.description`)}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li key={tech}>
                        <Chip>{tech}</Chip>
                      </li>
                    ))}
                  </ul>

                  {(project.repo !== null || project.demo !== null) && (
                    <div className="mt-6 flex items-center gap-4 border-t border-line pt-4">
                      {project.repo !== null && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${t('a11y.viewCode')}: ${t(`projects.items.${project.id}.title`)}`}
                          className="inline-flex items-center gap-1.5 text-sm text-body transition-colors hover:text-fg"
                        >
                          <GithubIcon className="h-4 w-4" />
                          {t('common.code')}
                        </a>
                      )}
                      {project.demo !== null && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${t('a11y.viewDemo')}: ${t(`projects.items.${project.id}.title`)}`}
                          className="inline-flex items-center gap-1.5 text-sm text-body transition-colors hover:text-fg"
                        >
                          <ExternalLink className="h-4 w-4" />
                          {t('common.demo')}
                        </a>
                      )}
                    </div>
                  )}
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </Container>
    </Section>
  )
}
