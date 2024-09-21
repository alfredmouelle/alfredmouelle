import { SectionContact } from "./(home)/section-contact";
import { SectionHero } from "./(home)/section-hero";
import { SectionJobs } from "./(home)/section-jobs";
import { SectionScholarship } from "./(home)/section-scholarship";

export default async function Home() {
  return (
    <>
      <SectionHero />

      <SectionScholarship />

      <SectionJobs />

      <SectionContact />
    </>
  );
}
