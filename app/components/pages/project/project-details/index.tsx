import { Button } from "@/app/components/button";
import { SectionTitle } from "@/app/components/section-title";
import { TechBadge } from "@/app/components/tech-badge";
import { TbBrandGithub } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi";
import { CustomLink } from "@/app/components/link";
import { HiArrowNarrowLeft } from "react-icons/hi";

export const ProjectDetails = () => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1] bg-red-500"
        style={{
          background:
            "url(/images/hero-bg.png) no-repeat center/cover, url(https://placehold.co/1376x720/png) no-repeat center/cover",
        }}
      />
      <SectionTitle
        subtitle="projetos"
        title="Nome do Projeto"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />
      <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        {/* Breve descrição do projeto */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quo
        ipsam error, omnis illum nam aspernatur. Illo eum itaque, impedit at rem
        laboriosam nemo praesentium, ipsa consectetur omnis ratione incidunt.
      </p>
      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        <TechBadge name="NextJS" />
        <TechBadge name="NextJS" />
        <TechBadge name="NextJS" />
        <TechBadge name="NextJS" />
        <TechBadge name="NextJS" />
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a href="https://github.com" target="_blank">
          <Button className="min-w-[180px]">
            <TbBrandGithub size={20} />
            Repositório
          </Button>
        </a>
        <a href="https://github.com" target="_blank">
          <Button className="min-w-[180px]">
            <FiGlobe size={20} />
            Projeto Online
          </Button>
        </a>
      </div>
      <CustomLink href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </CustomLink>
    </section>
  );
};
