import styled from "styled-components";

const SkillsSummary = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 750px;
  gap: 10px;
  margin: 30px auto 20px;
  justify-content: center;
`;
const SkillsItem = styled.li`
  padding: 15px 30px;
  text-align: center;
  background-color: #597e52;
  border-radius: 10px;
  font-size: 20px;
  color: #eef0e5;
  font-weight: 600;
`;
export { SkillsSummary, SkillsItem };
