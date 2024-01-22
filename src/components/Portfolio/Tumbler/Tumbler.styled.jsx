import styled from "styled-components";
import {
  desktop,
  hoverDarkGreen,
  mobile,
  primaryColor,
  secondaryColor,
  whiteColor,
} from "../../../variables/variables";

const Container = styled.div`
  margin: 20px auto 0;
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: ${whiteColor};
  border-radius: 10px;
  gap: 10px;
  flex-direction: column;
  ${mobile} {
    gap: 5px;
    flex-direction: row;
    max-width: 620px;
  }
  ${desktop} {
    max-width: 700px;
  }
`;

const TumblerBtn = styled.button.attrs((props) => ({
  active: String(props.active) || "false",
}))`
  padding: 15px 10px;
  font-size: 18px;
  width: calc(100%);
  border-radius: 10px;
  background-color: ${({ active }) =>
    active === "true" ? `${primaryColor}` : `${secondaryColor}`};
  color: ${({ active }) =>
    active === "true" ? `${secondaryColor}` : `${hoverDarkGreen}`};
  cursor: pointer;
  ${mobile} {
    width: calc((100% - 5px) / 2);
  }
`;

export { Container, TumblerBtn };
