import styled from "styled-components";
import {
  biggerDesktop,
  blackColor,
  borderColor,
  desktop,
  linksBg,
  mobile,
  overlayBg,
  primaryColor,
  secondaryColor,
  tablet,
  transition,
  whiteColor,
} from "../../../../variables/variables";

const Post = styled.li`
  cursor: pointer;
  margin: 10px;
  padding: 15px;
  border: 1px solid ${borderColor};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc(100%);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
  img {
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
  }
  ${mobile} {
    width: calc((100% - 45px) / 2);
  }
  ${tablet} {
    width: calc((100% - 70px) / 3);
  }
  ${desktop} {
    width: calc((100% - 115px) / 3);
  }
`;

const ItemAbout = styled.div`
  height: auto;
  ${tablet} {
    min-height: 135px;
  }
  ${desktop} {
    min-height: 100px;
  }
`;

const StyledTitle = styled.p`
  font-size: 20px;
  font-family: "Inconsolata", monospace;
  font-weight: 900;
  margin: 10px 0;
  ${desktop} {
    font-size: 22px;
  }
  ${biggerDesktop} {
    font-size: 28px;
  }
`;

const LinksList = styled.ul`
  display: flex;
  gap: 15px;
`;

const LinkToSite = styled.a`
  background-color: ${linksBg};
  color: ${blackColor};
  margin-top: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledToolList = styled.ul`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;

const StyledToolListItem = styled.li`
  background-color: ${primaryColor};
  color: ${secondaryColor};
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 16px;
  ${tablet} {
    padding: 5px 15px;
    font-weight: 600;
  }
  ${biggerDesktop} {
    font-size: 20px;
    padding: 5px 20px;
  }
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
  background-color: ${overlayBg};
  color: ${whiteColor};
  opacity: 0;
  padding: 10px;
  overflow-y: auto;
  transition: opacity ${transition};
  ${Post}:hover &,
  ${Post}:focus & {
    opacity: 1;
  }
  ${desktop} {
    padding: 30px;
  }
`;

const StyledDescription = styled.p`
  font-size: 14px;
  text-align: center;
  margin-top: 30px;
  ${desktop} {
    font-size: 18px;
  }
  ${biggerDesktop} {
    font-size: 20px;
  }
`;

export {
  Post,
  OverlayText,
  StyledDescription,
  StyledTitle,
  StyledToolList,
  StyledToolListItem,
  LinkToSite,
  LinksList,
  ItemAbout,
};
