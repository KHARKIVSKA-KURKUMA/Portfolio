import styled from "styled-components";
import { projects } from "../../../data/projects";
import ProjectItem from "./ProjectItem/ProjectItem";

const PortfolioSummary = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;

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
