import { CustomLink } from "@/app/components/link";
import { TechBadge } from "@/app/components/tech-badge";
import { Project } from "@/app/types/projects";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          alt={`Thumbnail do projeto ${project.title}`}
          src={project.thumbnail.url}
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
          {project.title}
        </h3>

        <div className="text-gray-400 my-6">{project.shortDescription}</div>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          {project?.technologies.map((tech) => (
            <TechBadge
              key={`project-${project.title}-tech-${tech.name}`}
              name={tech.name}
            />
          ))}
        </div>

        <CustomLink href={`/projects/${project.slug}`}>
          Ver projeto
          <HiArrowNarrowRight />
        </CustomLink>
      </div>
    </div>
  );
};
