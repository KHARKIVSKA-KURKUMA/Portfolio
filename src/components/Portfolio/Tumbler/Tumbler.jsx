import { Container, TumblerBtn } from "./Tumbler.styled";
import PropTypes from "prop-types";

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

Tumbler.propTypes = {
  onClick: PropTypes.func.isRequired,
  activeBtn: PropTypes.string.isRequired,
};

export default Tumbler;
