import { useState } from "react";
import { Container, TumblerBtn } from "./Tumbler.styled";

const Tumbler = ({ onClick, activeBtn }) => {
  return (
    <Container>
      <TumblerBtn
        active={activeBtn === "Portfolio"}
        onClick={() => onClick("Portfolio")}
        type="button"
      >
        Portfolio
      </TumblerBtn>
      <TumblerBtn
        active={activeBtn === "Skills"}
        onClick={() => onClick("Skills")}
        type="button"
      >
        Skills
      </TumblerBtn>
    </Container>
  );
};

export default Tumbler;
