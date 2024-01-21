import { useState } from "react";
import Tumbler from "./Tumbler/Tumbler";

const Portfolio = () => {
  const [activeBtn, setActiveBtn] = useState("Portfolio");
  const handleButtonClick = (btnName) => {
    setActiveBtn(btnName);
  };
  return (
    <>
      <Tumbler onClick={handleButtonClick} activeBtn={activeBtn} />
    </>
  );
};

export default Portfolio;
