import React from "react";
import { ResumeSection } from "../assets/styles/main";
import {
  SkillName,
  SkillStackBox,
  SkillStrength,
  SkillStack,
  SkillStackGrid,
} from "../assets/styles/skills";

const Skills = (props) => {
  return (
    <ResumeSection>
      <SkillStackGrid columns={{ count: 5, size: "auto" }} gap="medium">
        {props.skills.map((skill, idx) => (
          <SkillStackBox align="center">
            <SkillStack anchor="center">
              <SkillStrength
                max="100"
                round="true"
                type="circle"
                size="small"
                values={[
                  {
                    value: skill.skill_strength,
                    label: skill.name,
                    color:
                      skill.skill_strength > 80
                        ? "accent-1"
                        : skill.skill_strength > 60
                        ? "status-ok"
                        : skill.skill_strength > 40
                        ? "neutral-1"
                        : "neutral-2",
                  },
                ]}
              />
              <SkillName render={skill.name} />
            </SkillStack>
          </SkillStackBox>
        ))}
      </SkillStackGrid>
    </ResumeSection>
  );
};

export default Skills;
