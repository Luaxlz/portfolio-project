import { RichTextContent } from "@graphcms/rich-text-types";
import { KnownTech } from "./projects";

export type ProjectType = {
  imageTitle: string[];
  onlineUrl: string;
  projectImages: {
    url: string[];
  };
  repositoryUrl: string;
  title: string;
  description: {
    raw: RichTextContent;
  };
  technologies: KnownTech[];
};
