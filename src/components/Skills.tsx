/* eslint-disable @next/next/no-img-element */
import { Skill } from "@/types/type";
import React, { useState } from "react";

const Skills = ({ skills }: { skills: Skill[] }) => {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>();
  return (
    <div className="min-h-screen w-full p-6 flex flex-wrap gap-4 md:gap-8 group text-white relative">
      {hoveredSkill && (
        <div className="hidden percentage absolute text-[clamp(70px,10vw,150px)] font-bold self-center sm:flex items-center justify-center w-full">
          {hoveredSkill?.percentage}%
        </div>
      )}
      {skills.map((skill) => (
        <span
          className="text-[clamp(35px,5.5vw,130px)] leading-none font-semibold text-white/20 hover:text-white duration-300 relative "
          key={skill._id}
          onMouseEnter={() => {
            setHoveredSkill(skill);
          }}
          onMouseLeave={() => {
            setHoveredSkill(null);
          }}
          data-cursor-size="100px"
          data-cursor-color="#000000"
          data-cursor-exclusion
          // style={{ backgroundColor: "#fff" }}
          data-cursor-background-image={skill.image.url}
          // data-cursor-text={skill.percentage}
        >
          {skill.name}
          <span className="text-sm sm:hidden">{skill.percentage}%</span>
        </span>
      ))}
    </div>
  );
};

export default Skills;
