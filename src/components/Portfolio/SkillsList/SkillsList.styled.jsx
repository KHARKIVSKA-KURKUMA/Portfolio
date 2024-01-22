import styled from "styled-components";
import { desktop, tablet } from "../../../variables/variables";

const SkillsSummary = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  margin: 30px auto 20px;
  justify-content: center;
  ${tablet} {
    width: calc(100% - 50px);
  }
  ${desktop} {
    width: 750px;
  }
`;
const SkillsItem = styled.li`
  padding: 10px 15px;
  text-align: center;
  background-color: #597e52;
  border-radius: 10px;
  font-size: 18px;
  color: #eef0e5;
  font-weight: 600;
  ${desktop} {
    font-size: 20px;
    padding: 15px 30px;
  }
`;
export { SkillsSummary, SkillsItem };
