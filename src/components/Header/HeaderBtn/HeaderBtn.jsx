import CV from "../../data/CV.pdf";
import { GoDownload } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { LinkToEmail, Button, BtnWrap } from "./HeaderBtn.styled";

const HeaderBtn = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Kateryna_Vasiuk_Frontend.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <BtnWrap>
      <Button onClick={handleDownload}>
        Download CV <GoDownload size={20} />
      </Button>
      <LinkToEmail href="mailto:k.s.vasiuk@gmail.com">
        Contact Me <CiMail size={20} />
      </LinkToEmail>
    </BtnWrap>
  );
};

export default HeaderBtn;
