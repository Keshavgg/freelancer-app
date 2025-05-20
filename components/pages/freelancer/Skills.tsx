import React from "react";

function Skills({ skills }: { skills: string[] }) {
  return (
    <>
      {skills.map((skill, index) => (
        <div key={index} className="bg-zinc-100 px-3 py-1 rounded-xl">
          <span>{skill}</span>
        </div>
      ))}
    </>
  );
}

export default Skills;
