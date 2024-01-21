import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;
const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ImgWrap = styled.div`
  margin-left: 50px;
  box-shadow: 10px 10px 5px #789461;
  border-radius: 50%;
  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
`;
const NameSurname = styled.p`
  font-size: 54px;
  font-weight: 900;
  font-family: "Rubik Doodle Shadow", system-ui;
  color: #304d30;
`;

const Position = styled.p`
  font-size: 28px;
  margin-bottom: 10px;
  color: #163020;
`;

const LinkWrap = styled.div`
  display: flex;
  gap: 15px;
`;

const Link = styled.a`
  border: none;
  background-color: transparent;
  color: #4f6f52;
  transition: color 500ms cubic-bezier(0.23, 1, 0.32, 1);
  &:hover,
  &:focus {
    color: #163020;
  }
`;

export { Container, InfoWrap, Position, LinkWrap, Link, ImgWrap, NameSurname };
