import { KnownTech } from "./projects";
import type { RichTextContent } from "@graphcms/rich-text-types";
import { WorkExperience } from "./work-experience";
import { ProjectType } from "./project-type";

export type Social = {
  url: string;
  iconSvg: string;
};

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent;
  };
  technologies: KnownTech[];
  profilePicture: {
    url: string;
  };
  socials: Social[];
  knownTechs: KnownTech[];
};

export type HomePageData = {
  page: HomePageInfo;
  workExperiences: WorkExperience[];
  project: ProjectType[];
};
