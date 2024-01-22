import styled from "styled-components";
import {
  imgShadowColor,
  hoverDarkGreen,
  primaryColor,
  darkGreen,
  transition,
  tablet,
  desktop,
} from "../../variables/variables";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  align-items: center;
  ${tablet} {
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: nowrap;
    padding-top: 30px;
  }
  ${desktop} {
    padding-top: 40px;
  }
`;
const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${tablet} {
    justify-content: space-between;
    align-items: flex-start;
  }
`;
const ImgWrap = styled.div`
  box-shadow: 10px 10px 5px ${imgShadowColor};
  border-radius: 50%;
  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
  ${tablet} {
    margin-left: 20px;
  }
  ${desktop} {
    margin-left: 40px;
  }
`;
const NameSurname = styled.p`
  font-size: 44px;
  font-weight: 900;
  font-family: "Rubik Doodle Shadow", system-ui;
  color: ${darkGreen};
  text-align: center;
  ${desktop} {
    font-size: 54px;
    text-align: start;
  }
`;

const Position = styled.p`
  font-size: 28px;
  margin-bottom: 10px;
  color: ${hoverDarkGreen};
`;

const LinkWrap = styled.div`
  display: flex;
  gap: 15px;
`;

const Link = styled.a`
  border: none;
  background-color: transparent;
  color: ${primaryColor};
  transition: color ${transition};
  &:hover,
  &:focus {
    color: ${hoverDarkGreen};
  }
`;

export { Container, InfoWrap, Position, LinkWrap, Link, ImgWrap, NameSurname };
