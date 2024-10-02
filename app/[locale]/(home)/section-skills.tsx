import { getScopedI18n } from '@locales/server';

import { SlideLiIntoView } from '@/components/animations/slide-li-into-view';
import { Icon, Icons } from '@/components/icons';
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
      <SectionTitle className="flex items-center">
        <Icon name="skill" className="size-8 mr-2" />
        {t('title')}
      </SectionTitle>

      <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill, index) => (
          <SlideLiIntoView
            key={index}
            index={index}
            className="col-span-4 md:col-span-1"
          >
            <SkillCard skill={skill} />
          </SlideLiIntoView>
        ))}
      </ul>
    </Section>
  );
}

async function SkillCard({ skill }: { skill: Skill }) {
  const t = await getScopedI18n('section_skills');

  return (
    <Card className="group h-full flex flex-col transition delay-0 duration-300 ease-in hover:scale-[1.01] hover:border-primary hover:bg-accent cursor-pointer shadow-lg">
      <CardHeader className="flex-grow">
        <CardTitle className="flex items-center text-primary">
          <skill.icon className="size-5 mr-2" />
          {skill.title}
        </CardTitle>
        <CardDescription className="mt-2">{t(skill.details)}</CardDescription>
      </CardHeader>

      <CardFooter>
        <ul className="flex flex-wrap gap-2">
          {skill.mainSkills.map((skillItem, index) => (
            <li key={index}>
              <Button
                size="sm"
                variant="outline"
                className="group-hover:bg-primary group-hover:text-white transition-colors ease-in duration-150"
              >
                {skillItem}
              </Button>
            </li>
          ))}
        </ul>
      </CardFooter>
    </Card>
  );
}
