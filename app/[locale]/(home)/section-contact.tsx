import { Icons } from "@/components/icons";
import { Section, SectionTitle } from "@/components/section";
import { getScopedI18n } from "@locales/server";
import { ContactForm } from "./contact.form";

export const SectionContact = async () => {
  const t = await getScopedI18n("section_contact");

  return (
    <Section id="contact">
      <SectionTitle>{t("title")}</SectionTitle>

      <div>
        <p className="text-center text-gray-500">{t("quickContact")}</p>
        <div className="mt-8 grid grid-cols-3 items-center justify-center gap-1 gap-y-4 md:grid-cols-6">
          <a
            href="https://github.com/alfredmouelle"
            className="group flex flex-col items-center justify-center gap-y-1.5 text-xs text-gray-500 transition delay-0 duration-200 hover:scale-[1.03] hover:text-primary md:text-sm"
            target="_blank"
          >
            <Icons.github className="h-10 w-10 text-blue-300 group-hover:text-primary" />
            @alfredmouelle
          </a>

          <a
            href="https://twitter.com/kali47_"
            className="group flex flex-col items-center justify-center gap-y-1.5 text-xs text-gray-500 transition delay-0 duration-200 hover:scale-[1.03] hover:text-primary md:text-sm"
            target="_blank"
          >
            <Icons.twitter className="h-10 w-10 text-blue-300 group-hover:text-primary" />
            @kali47_
          </a>

          <a
            href="https://www.linkedin.com/in/alfred-mouelle-72a976228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            className="group flex flex-col items-center justify-center gap-y-1.5 text-xs text-gray-500 transition delay-0 duration-200 hover:scale-[1.03] hover:text-primary md:text-sm"
            target="_blank"
          >
            <Icons.linkedin className="h-10 w-10 text-blue-300 group-hover:text-primary" />
            LinkedIn
          </a>

          <a
            href="mailto:alfredmouelle@gmail.com"
            className="group flex flex-col items-center justify-center gap-y-1.5 text-xs text-gray-500 transition delay-0 duration-200 hover:scale-[1.03] hover:text-primary md:text-sm"
            target="_blank"
          >
            <Icons.mail className="h-10 w-10 text-blue-300 group-hover:text-primary" />
            Email
          </a>

          <a
            href="https://comeup.com/fr/@alfredmouelle"
            className="group flex flex-col items-center justify-center gap-y-1.5 text-xs text-gray-500 transition delay-0 duration-200 hover:scale-[1.03] hover:text-primary md:text-sm"
            target="_blank"
          >
            <Icons.website className="h-10 w-10 text-blue-300 group-hover:text-primary" />
            ComeUp
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=237693692721"
            className="group flex flex-col items-center justify-center gap-y-1.5 text-xs text-gray-500 transition delay-0 duration-200 hover:scale-[1.03] hover:text-primary md:text-sm"
            target="_blank"
          >
            <Icons.phone className="h-10 w-10 text-blue-300 group-hover:text-primary" />
            +237 693 69 27 21
          </a>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
};
