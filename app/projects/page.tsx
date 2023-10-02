import { PageIntroduction } from "../components/pages/projects/page-introduction";
import { ProjectsList } from "../components/pages/projects/projects-list";
import { fetchHygraphQuery } from "../utils/fetch-higraph-query";

const getPageData = async () => {
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
    }
    `;
  return fetchHygraphQuery(query);
};

export default function Projects() {
  return (
    <>
      <PageIntroduction />
      <ProjectsList />
    </>
  );
}
