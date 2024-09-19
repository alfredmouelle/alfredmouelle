import { Icons } from "@/components/icons";
import { Section } from "@/components/page-wrapper";
import { SectionTitle } from "@/components/section-title";
import Image from "next/image";

export const SectionScholarship = () => {
  return (
    <Section id="scholarship">
      <SectionTitle>Parcours scolaire</SectionTitle>
      <div className="grid md:grid-cols-2">
        <Image
          src="/assets/images/education-man.svg"
          width={500}
          height={500}
          alt="Mascotte"
        />
        <div className="relative">
          <div className="absolute left-1/2 h-full -translate-x-1/2 transform border-l-2 border-gray-300"></div>
          <div className="space-y-8">
            <div className="flex w-full items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-lg font-semibold">
                  Brevet de Technicien Supérieur
                </h3>
                <p className="text-blue-500">Génie Logiciel</p>
                <p className="text-gray-500">2018 - 2020</p>
              </div>
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                <Icons.check className="text-white" />
              </div>
              <div className="w-1/2 pl-8">
                <p className="text-gray-500">
                  Institut Universitaire des Grandes Ecoles des Tropiques
                </p>
                <p className="text-gray-500">Douala - Cameroun</p>
              </div>
            </div>
            <div className="flex w-full items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-lg font-semibold">Baccalauréat</h3>
                <p className="text-blue-500">Technologie de l’information</p>
                <p className="text-gray-500">2017 - 2018</p>
              </div>
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                <Icons.check className="text-white" />
              </div>
              <div className="w-1/2 pl-8">
                <p className="text-gray-500">Lycée Bilingue de Kribi</p>
                <p className="text-gray-500">Kribi - Cameroun</p>
              </div>
            </div>
            <div className="flex w-full items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-lg font-semibold">Probatoire</h3>
                <p className="text-blue-500">Technologie de l’information</p>
                <p className="text-gray-500">2016 - 2017</p>
              </div>
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                <Icons.check className="text-white" />
              </div>
              <div className="w-1/2 pl-8">
                <p className="text-gray-500">Lycée Bilingue de Kribi</p>
                <p className="text-gray-500">Kribi - Cameroun</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
