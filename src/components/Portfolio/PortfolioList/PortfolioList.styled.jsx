import styled from "styled-components";
import { desktop } from "../../../variables/variables";

const PortfolioSummary = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding-bottom: 30px;
  ${desktop} {
    gap: 25px;
  }
`;
export { PortfolioSummary };
