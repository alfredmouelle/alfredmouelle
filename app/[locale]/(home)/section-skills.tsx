import { getScopedI18n } from '@locales/server';

import { Icons } from '@/components/icons';
import { Section, SectionTitle } from '@/components/section';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface Skill {
  icon: any;
  title: string;
  mainSkills: string[];
  details: 'backend_desc' | 'frontend_desc' | 'mobile_desc' | 'node_code_desc';
}

const skills = [
  {
    title: 'Backend',
    icon: Icons.server,
    details: 'backend_desc',
    mainSkills: ['Node.js', 'PHP', 'Spring Boot'],
  },
  {
    title: 'Frontend',
    icon: Icons.layout,
    details: 'frontend_desc',
    mainSkills: ['Next.js', 'Nuxt', 'Angular'],
  },
  {
    title: 'Mobile',
    icon: Icons.smartphone,
    details: 'mobile_desc',
    mainSkills: ['Flutter', 'React Native'],
  },
  {
    title: 'No Code',
    icon: Icons.code,
    mainSkills: ['Webflow'],
    details: 'node_code_desc',
  },
] satisfies Skill[];

export async function SectionSkills() {
  const t = await getScopedI18n('section_skills');

  return (
    <Section id="skills">
      <SectionTitle>{t('title')}</SectionTitle>

      <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill, index) => (
          <li key={index} className="col-span-4 md:col-span-1">
            <SkillCard skill={skill} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

async function SkillCard({ skill }: { skill: Skill }) {
  const t = await getScopedI18n('section_skills');

  return (
    <Card className="h-full flex flex-col transition delay-0 duration-300 ease-in hover:scale-[1.01] hover:border-primary hover:bg-accent cursor-pointer">
      <CardHeader className="flex-grow">
        <CardTitle className="flex items-center gap-x-2 text-primary">
          <skill.icon className="w-5 h-5 mr-2" />
          {skill.title}
        </CardTitle>
        <CardDescription className="mt-2">{t(skill.details)}</CardDescription>
      </CardHeader>

      <CardFooter>
        <ul className="flex flex-wrap gap-2">
          {skill.mainSkills.map((skillItem, index) => (
            <li key={index}>
              <Button size="sm" variant="outline">
                {skillItem}
              </Button>
            </li>
          ))}
        </ul>
      </CardFooter>
    </Card>
  );
}