import { ProjectSections } from "@/app/components/pages/project/project-sections";
import { ProjectDetails } from "../../components/pages/project/project-details";
import { fetchHygraphQuery } from "@/app/utils/fetch-higraph-query";
import {
  ProjectDetailsData,
  ProjectsPageStaticData,
} from "@/app/types/page-info";

type ProjectProps = {
  params: {
    slug: string;
  };
};

const getProjectDetails = async (slug: string): Promise<ProjectDetailsData> => {
  const query = `
    query ProjectQuery() {
      project(where: {slug: "${slug}"}) {
        pageThumbnail {
          url
        }
        thumbnail {
          url
        }
        sections {
          title
          image {
            url
          }
        }
        title
        shortDescription
        description {
          raw
          text
        }
        technologies {
          name
        }
        liveProjectUrl
        githubUrl
      }
    }`;

  return fetchHygraphQuery(
    query,
    60 * 60 * 24 //24 hours
  );
};
export default async function Project({ params: { slug } }: ProjectProps) {
  const { project } = await getProjectDetails(slug);
  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  );
}

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery() {
      projects(first: 100) {
        slug
      }
    }
  `;

  const projects = await fetchHygraphQuery<ProjectsPageStaticData>(query);

  return projects;
}
