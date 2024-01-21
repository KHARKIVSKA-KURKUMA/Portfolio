import { projects } from "../../../data/projects";
import ProjectItem from "./ProjectItem/ProjectItem";
import { PortfolioSummary } from "./PortfolioList.styled";

const PortfolioList = () => {
  return (
    <PortfolioSummary>
      {projects.map((project) => {
        return <ProjectItem key={project.title} project={project} />;
      })}
    </PortfolioSummary>
  );
};

export default PortfolioList;
