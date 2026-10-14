import { useTranslation } from 'react-i18next'
import {
  Cpu,
  Database,
  Layout,
  Server,
  Wrench,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import { Chip } from '@/components/ui/Chip'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Stagger, StaggerItem } from '@/components/ui/Reveal'
import { skillGroups, type SkillGroupId } from '@/data/skills'

const groupIcons: Record<SkillGroupId, LucideIcon> = {
  backend: Server,
  frontend: Layout,
  databases: Database,
  automation: Workflow,
  iot: Cpu,
  tools: Wrench,
}

export function Skills() {
  const { t } = useTranslation()

  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          eyebrow={t('skills.eyebrow')}
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
        />

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = groupIcons[group.id]
            return (
              <StaggerItem key={group.id} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-surface text-accent-text">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <h3 className="font-display text-base font-semibold text-fg">
                      {t(`skills.groups.${group.id}`)}
                    </h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <Chip>{item}</Chip>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </Container>
    </Section>
  )
}
