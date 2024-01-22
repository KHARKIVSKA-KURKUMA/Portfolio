import styled from "styled-components";

const Post = styled.li`
  cursor: pointer;
  margin: 10px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: calc((100% - 115px) / 3);
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
`;

const ItemAbout = styled.div`
  height: 100px;
`;

const StyledTitle = styled.p`
  font-size: 22px;
  font-family: "Inconsolata", monospace;
  font-weight: 900;
  margin: 10px 0;
`;

const StyledDescription = styled.p`
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
  flex-wrap: wrap;
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
