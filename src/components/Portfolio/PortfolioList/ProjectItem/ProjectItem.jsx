import styled from "styled-components";
import { CiLink } from "react-icons/ci";
import { SlSocialGithub } from "react-icons/sl";

const Post = styled.li`
  cursor: pointer;
  margin: 10px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc((100% - 50px) / 3);
  position: relative;
  overflow: hidden;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
  img {
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
  }
`;

const StyledTitle = styled.p`
  font-size: 22px;
  font-family: "Inconsolata", monospace;
  font-weight: 900;
  margin: 10px 0;
`;

const StyledDescr = styled.p`
  font-size: 18px;
  text-align: center;
`;

const LinkToSite = styled.a`
  margin-top: 10px;
  background-color: #d2e3c8;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
`;

const StyledToolList = styled.ul`
  display: flex;
  gap: 5px;
`;
const LinksList = styled.ul`
  display: flex;
  gap: 15px;
`;

const StyledToolListItem = styled.li`
  background-color: #4f6f52;
  color: #eef0e5;
  padding: 5px 15px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
`;

const OverlayText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #4f6f52e2;
  color: #fff;
  opacity: 0;
  padding: 30px;
  transition: opacity 0.3s ease-in-out;
  ${Post}:hover & {
    opacity: 1;
  }
`;

const ProjectItem = ({ project }) => {
  const { title, overlay, tools, href, website, descr } = project;
  return (
    <Post>
      <img src={overlay.Project} alt="Projects" />
      <StyledTitle>{title}</StyledTitle>
      <StyledToolList>
        {tools.map((tool) => (
          <StyledToolListItem key={tool}>{tool}</StyledToolListItem>
        ))}
      </StyledToolList>
      <OverlayText>
        <StyledDescr>{descr}</StyledDescr>
        <LinksList>
          <li>
            <LinkToSite
              href={website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLink size={30} />
            </LinkToSite>
          </li>
          <li>
            <LinkToSite href={href} target="_blank" rel="noopener noreferrer">
              <SlSocialGithub size={20} />
            </LinkToSite>
          </li>
        </LinksList>
      </OverlayText>
    </Post>
  );
};

export default ProjectItem;
