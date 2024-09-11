import { ContactButton } from "@/components/contact-button";
import { ContactUs } from "@/components/contact-us.form";
import { DownloadCvButton } from "@/components/download-cv-button";
import { Section } from "@/components/page-wrapper";
import { SectionTitle } from "@/components/section-title";
import { getJobs } from "@/jobs-helper";

export default async function Home() {
  const jobs = await getJobs();

  return (
    <>
      <Section>
        <div className="grid h-[calc(100vh-14rem)] items-center">
          <div className="flex flex-col gap-y-2">
            <p>Salut, je suis</p>
            <SectionTitle>Alfred Mouelle</SectionTitle>

            <p className="text-xl font-medium">{"<Développeur Web />"}</p>
            <p className="text-balance">
              Je suis un jeune extrêmement autodidacte avec une expérience de 5
              ans dans le développement Web et la conception d’application. De
              plus en plus de technologies abondent le développent; je
              m&apos;efforce de me les approprier non seulement pour la
              connaissance personnelle, mais également pour rendre le plus
              possible service à ceux qui en ont besoin.
            </p>

            <div className="mt-4 flex flex-col gap-2 md:flex-row">
              <DownloadCvButton />
              <ContactButton />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <ContactUs />
      </Section>
    </>
  );
}
