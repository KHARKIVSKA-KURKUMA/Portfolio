import styled from "styled-components";
import ProfilePhoto from "../../img/avatar.jpg";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;
const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ImgWrap = styled.div`
  margin-left: 70px;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
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
  &:hover {
    color: #163020;
  }
`;

const Header = () => {
  return (
    <Container>
      <InfoWrap>
        <NameSurname>Kateryna Vasiuk</NameSurname>
        <Position>Frontend developer</Position>
        <LinkWrap>
          <Link>
            <FaGithub size={35} />
          </Link>
          <Link>
            <FaLinkedin size={35} />
          </Link>
          <Link>
            <FaTelegram size={35} />
          </Link>
        </LinkWrap>
      </InfoWrap>
      <ImgWrap>
        <img src={ProfilePhoto} alt="Avatar" />
      </ImgWrap>
    </Container>
  );
};

export default Header;
