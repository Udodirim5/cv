import React from "react";
import { FiFolder, FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../../../data/data";

const Projects = () => {
  return (
    <div className=" space-y-6">
      <hr className='text-gray-400 my-10'/>
      <div className="flex items-center gap-2">
        <FiFolder className="text-blue-600" />
        <h2 className="text-xl font-bold">Projects</h2>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="space-y-3">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-gray-800">{project.title}</h3>
              <div className="flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-gray-500 hover:text-blue-600"
                >
                  <FiGithub />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  className="text-gray-500 hover:text-blue-600"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
            <p className="text-gray-700 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
