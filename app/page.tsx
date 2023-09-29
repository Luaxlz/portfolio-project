import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { KnowTechs } from "./components/pages/home/know-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-higraph-query";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
      }
      workExperiences {
        companyLogo {
          url
        }
        role
        companyName
        companyUrl
        startDate
        endDate
        description {
          raw
        }
        technologies {
          name
        }
      }
      project {
        imageTitle
        onlineUrl
        projectImages {
          url
        }
        repositoryUrl
        title
        description {
          raw
        }
        technologies {
          name
        }
      }
    }
  `;

  return fetchHygraphQuery(
    query,
    60 * 60 * 24 //24 hours
  );
};

export default async function Home() {
  const { page: pageData, workExperiences, project } = await getPageData();
  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnowTechs />
      <HighlightedProjects />
      <WorkExperience experiences={workExperiences} />
    </>
  );
}
