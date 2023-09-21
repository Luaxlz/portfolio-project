import { CustomLink } from "@/app/components/link";
import { TechBadge } from "@/app/components/tech-badge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          alt="Thumbnail do projeto"
          src="https://placehold.co/420x304/png"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] min-h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt="Project title icon"
            src="/images/icons/project-title-icon.svg"
          />
          Project Title
        </h3>

        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          corporis fuga amet est neque animi et incidunt provident porro odio a
          sunt nulla non assumenda voluptatem, aut accusamus maxime maiores
          vero. Aperiam cum expedita illo labore incidunt in quis nihil
          asperiores beatae eos amet voluptatibus tempore ullam, libero
          reiciendis natus!
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="Next.JS" />
          <TechBadge name="Next.JS" />
          <TechBadge name="Next.JS" />
          <TechBadge name="Next.JS" />
          <TechBadge name="Next.JS" />
        </div>

        <CustomLink href="/projects/some-project">
          Ver projeto
          <HiArrowNarrowRight />
        </CustomLink>
      </div>
    </div>
  );
};
