import { skills } from "../../../data/skills";
import { SkillsItem, SkillsSummary } from "./SkillsList.styled";

const SkillsList = () => {
  return (
    <SkillsSummary>
      {skills.map((skill) => {
        return <SkillsItem key={skill}>{skill}</SkillsItem>;
      })}
    </SkillsSummary>
  );
};

export default SkillsList;
