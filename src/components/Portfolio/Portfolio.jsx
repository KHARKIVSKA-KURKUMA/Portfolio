import { useState } from "react";
import Tumbler from "./Tumbler/Tumbler";
import PortfolioList from "./PortfolioList/PortfolioList";
import SkillsList from "./SkillsList/SkillsList";

const Portfolio = () => {
  const [activeBtn, setActiveBtn] = useState("Portfolio");
  const handleButtonClick = (btnName) => {
    setActiveBtn(btnName);
  };
  return (
    <>
      <Tumbler onClick={handleButtonClick} activeBtn={activeBtn} />
      {activeBtn === "Portfolio" ? <PortfolioList /> : <SkillsList />}
    </>
  );
};

export default Portfolio;
