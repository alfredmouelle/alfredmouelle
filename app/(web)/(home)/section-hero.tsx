import { ContactButton } from "@/components/contact-button";
import { DownloadCvButton } from "@/components/download-cv-button";
import { Section } from "@/components/page-wrapper";
import TypewriterText from "@/components/typewritter-text";
import Image from "next/image";

export const SectionHero = () => {
  return (
    <Section>
      <div className="hero grid min-h-[calc(100vh-14rem)] items-center gap-4 md:grid-cols-3">
        <div className="hero-brand relative order-2 flex flex-col gap-y-2 text-center md:order-none md:col-span-2 md:text-left">
          <p>Salut, je suis</p>
          <h1 className="text-3xl font-bold">Alfred Mouelle</h1>

          <div className="flex items-center justify-center gap-x-1 md:justify-start">
            <span className="text-xl font-medium">{"<"}</span>
            <TypewriterText
              text="Développeur Web"
              className="text-xl font-medium"
            />
            <span className="text-xl font-medium">{"/>"}</span>
          </div>

          <p className="text-balance">
            Je suis Alfred Mouelle, développeur Full Stack basé au Cameroun avec
            5 ans d’expérience dans le développement web et la conception
            d’applications. Passionné et autodidacte, j’ai acquis des
            compétences solides en ingénierie logicielle à travers de nombreux
            projets. Mon objectif est de maîtriser les nouvelles technologies
            pour non seulement enrichir mes connaissances, mais surtout pour
            offrir des solutions adaptées et de grande qualité à ceux qui en ont
            besoin. En tant que freelance, je suis dévoué à fournir un service
            efficace et à contribuer activement à la réussite des projets qui me
            sont confiés.
          </p>

          <div className="mt-4 flex flex-col gap-2 md:flex-row">
            <DownloadCvButton />
            <ContactButton />
          </div>
        </div>

        <div className="order-1 md:order-none">
          <Image
            src="/assets/images/hero-avatar.webp"
            className="rounded-full shadow-lg"
            alt="Photo de moi"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </Section>
  );
};
