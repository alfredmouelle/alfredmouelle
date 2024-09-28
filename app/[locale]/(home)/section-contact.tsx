import { getScopedI18n } from '@locales/server';

import { SlideLiIntoView } from '@/components/animations/slide-li-into-view';
import { Icons } from '@/components/icons';
import { Section, SectionTitle } from '@/components/section';

import { ContactForm } from './contact.form';

const contacts = [
  {
    Icon: Icons.github,
    label: '@alfredmouelle',
    url: 'https://github.com/alfredmouelle',
  },
  {
    Icon: Icons.twitter,
    label: '@kali47_',
    url: 'https://twitter.com/kali47_',
  },
  {
    Icon: Icons.linkedin,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/alfred-mouelle-72a976228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  },
  {
    Icon: Icons.mail,
    label: 'Email',
    url: 'mailto:alfredmouelle@gmail.com',
  },
  {
    Icon: Icons.website,
    label: 'ComeUp',
    url: 'https://comeup.com/fr/@alfredmouelle',
  },
  {
    Icon: Icons.phone,
    label: '+237 693 69 27 21',
    url: 'https://api.whatsapp.com/send?phone=237693692721',
  },
] satisfies Array<{
  Icon: any;
  url: string;
  label: string;
}>;

export const SectionContact = async () => {
  const t = await getScopedI18n('section_contact');

  return (
    <Section id="contact">
      <SectionTitle>{t('title')}</SectionTitle>

      <div>
        <p className="text-center text-gray-500">{t('quickContact')}</p>
        <ul className="mt-8 grid grid-cols-3 items-center justify-center gap-1 gap-y-4 md:grid-cols-6">
          {contacts.map((contact, index) => (
            <SlideLiIntoView index={index} key={index}>
              <a
                target="_blank"
                href={contact.url}
                className="group flex flex-col items-center justify-center gap-y-1.5 text-xs text-gray-500 transition delay-0 duration-200 hover:scale-[1.03] hover:text-primary md:text-sm"
              >
                <contact.Icon className="h-8 w-8 text-muted-foreground group-hover:text-primary" />
                {contact.label}
              </a>
            </SlideLiIntoView>
          ))}
        </ul>

        <ContactForm />
      </div>
    </Section>
  );
};
