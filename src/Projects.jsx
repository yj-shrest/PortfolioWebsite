import React from "react";
import Project1 from "./Project1";
import Project2 from "./Project2"; 
import Project3 from "./Project3";
import Project4 from "./Project4";
import Project5 from "./Project5";
import Project6 from "./Project6";
import { useState } from "react";
const Projects = () => {
  const projects = [
    {
      id: 1,
      component: <Project1 />,
    },
    {
      id: 2,
      component: <Project2 />,
    },
    {
      id: 3,
      component: <Project3 />,
    },
    {
      id: 4,
      component: <Project4 />,
    },
    {
      id: 5,
      component: <Project5 />,
    },
    {
      id: 6,
      component: <Project6 />,
    },
  ];
  const [currentProject, setCurrentProject] = useState(0);
  const handleNextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };
  const handlePrevProject = () => {
    setCurrentProject((prev) =>
      prev === 0 ? 0 : prev -1
    );
  }
  return (
  <div id="projects" className="pt-10 flex flex-col w-[60rem] h-auto items-center justify-center">
    <div className="text-[2rem] font-sans font-semibold text-[#2f2f2f] pb-8 ">
      Project Showcase
    </div>
    <div className="flex flex-row justify-between w-full h-auto items-center">
      <div
        onClick={handlePrevProject}
        style={{
          width: 0,
          height: 0,
          borderTop: "20px solid transparent",
          borderBottom: "20px solid transparent",
          borderRight: `30px solid ${currentProject === 0 ? "gray" : "black"}`,
          cursor: currentProject === 0 ? "not-allowed" : "pointer",
        }}
      ></div>

      <div className="overflow-hidden w-[50rem] mx-4">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentProject * 100}%)` }}
        >
          {projects.map((p) => (
            <div key={p.id} className="w-[50rem] flex-shrink-0">
              {p.component}
            </div>
          ))}
        </div>
      </div>

      <div
        onClick={handleNextProject}
        style={{
          width: 0,
          height: 0,
          borderTop: "20px solid transparent",
          borderBottom: "20px solid transparent",
          borderLeft: "30px solid black",
          cursor: "pointer",
        }}
      ></div>
    </div>
  </div>
);


};

export default Projects;
