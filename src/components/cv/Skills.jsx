import React from "react";
import { FiCode } from "react-icons/fi";
import { skills } from "../../../data/data";

const Skills = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <FiCode className="text-blue-600" />
        <h2 className="text-xl font-bold">Skills</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {/* eslint-disable-next-line no-unused-vars */}
        {skills.map(({ name, icon: Icon, color }, index) => (
          <span
            key={index}
            className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-800 shadow-sm"
          >
            <Icon style={{ color }} />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
