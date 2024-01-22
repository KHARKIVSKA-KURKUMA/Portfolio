import { CiLink } from "react-icons/ci";
import { SlSocialGithub } from "react-icons/sl";
import PropTypes from "prop-types";
import {
  Post,
  ItemAbout,
  OverlayText,
  StyledDescription,
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
      <img src={overlay} alt={title} />
      <ItemAbout>
        <StyledTitle>{title}</StyledTitle>
        <StyledToolList>
          {tools.map((tool) => (
            <StyledToolListItem key={tool}>{tool}</StyledToolListItem>
          ))}
        </StyledToolList>
      </ItemAbout>
      <OverlayText>
        <StyledDescription>{description}</StyledDescription>
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

ProjectItem.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overlay: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    href: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectItem;
