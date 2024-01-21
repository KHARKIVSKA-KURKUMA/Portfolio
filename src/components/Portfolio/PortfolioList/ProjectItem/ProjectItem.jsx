import { CiLink } from "react-icons/ci";
import { SlSocialGithub } from "react-icons/sl";
import {
  Post,
  ItemAbout,
  OverlayText,
  StyledDescr,
  StyledTitle,
  StyledToolList,
  StyledToolListItem,
  LinkToSite,
  LinksList,
} from "./ProjectItem.styled";

const ProjectItem = ({ project }) => {
  const { title, overlay, tools, href, website, description } = project;
  return (
    <Post>
      <img src={overlay} alt="Projects" />
      <ItemAbout>
        <StyledTitle>{title}</StyledTitle>
        <StyledToolList>
          {tools.map((tool) => (
            <StyledToolListItem key={tool}>{tool}</StyledToolListItem>
          ))}
        </StyledToolList>
      </ItemAbout>
      <OverlayText>
        <StyledDescr>{description}</StyledDescr>
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
