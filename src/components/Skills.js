import React from "react";

// Import skills data
import { skills } from "../data";

const Skills = () => {
  return (
    <section className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="grid grid-cols-8 gap-4">
            <div className="col-span-1"></div> {/* Empty column on the left */}
            {skills.map((skill, index) => {
              return (
                <div className="flex items-center justify-center" key={index}>
                  <img src={skill.image} alt="" />
                </div>
              );
            })}
            <div className="col-span-2"></div> {/* Empty column on the right */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
