import ProfilePhoto from "../../img/avatar.png";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import HeaderBtn from "./HeaderBtn/HeaderBtn";
import {
  Container,
  InfoWrap,
  Position,
  LinkWrap,
  Link,
  ImgWrap,
  NameSurname,
} from "./Header.styled";

const Header = () => {
  return (
    <>
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
      <HeaderBtn />
    </>
  );
};

export default Header;
