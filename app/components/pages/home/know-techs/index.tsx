import { SectionTitle } from "@/app/components/section-title";
import { TechCard } from "./tech-card";
import { KnownTech } from "@/app/types/projects";

type KnowTechsProps = {
  techs: KnownTech[];
};

export const KnowTechs = ({ techs }: KnowTechsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle title="Conhecimentos" subtitle="competências" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((tech) => (
          <TechCard key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  );
};
