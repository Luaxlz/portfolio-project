import { ProjectSections } from "@/app/components/pages/project/project-sections";
import { ProjectDetails } from "../../components/pages/project/project-details";
import { ProjectsPageData } from "@/app/types/page-info";
import { fetchHygraphQuery } from "@/app/utils/fetch-higraph-query";

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }`;

  return fetchHygraphQuery(
    query,
    60 * 60 * 24 //24 hours
  );
};

export default function Project() {
  return (
    <>
      <ProjectDetails />
      <ProjectSections />
    </>
  );
}
