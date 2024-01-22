import styled from "styled-components";
import {
  hoverDarkGreen,
  mobile,
  primaryColor,
  secondaryColor,
  tablet,
  transition,
} from "../../../variables/variables";

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
  ${tablet} {
    gap: 50px;
  }
`;

const Button = styled.button`
  background-color: ${primaryColor};
  color: ${secondaryColor};
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 18px;
  width: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  transition: background-color ${transition};
  ${mobile} {
    flex-direction: row;
    justify-content: center;
    padding: 15px 30px;
  }
  &:hover,
  &:focus {
    background-color: ${hoverDarkGreen};
  }
`;
const LinkToEmail = styled.a`
  background-color: ${secondaryColor};
  color: ${hoverDarkGreen};
  border-radius: 10px;
  padding: 15px 20px;
  font-size: 18px;
  width: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  transition: background-color ${transition}, color ${transition};
  ${mobile} {
    flex-direction: row;
    justify-content: center;
    padding: 15px 30px;
  }
  &:hover,
  &:focus {
    background-color: ${hoverDarkGreen};
    color: ${secondaryColor};
  }
`;
export { LinkToEmail, Button, BtnWrap };
