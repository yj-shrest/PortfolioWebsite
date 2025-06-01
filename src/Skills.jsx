import React from "react";
import { useState } from "react";
const Skills = () => {
  const [tab, setTab] = useState("programming");
  const handleTabChange = (newTab) => {
    setTab(newTab);
  };
  const engineering = [
    "Object Oriented Programming",
    "Data Structures and Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Digital Logic Design",
    "Matlab/Multisim/Proteus",
  ]
  return (
    <div className="flex flex-col w-[60rem] h-auto pb-25">
      <div className="flex justify-between">
        <h1 className="text-[2rem] font-sans font-semibold text-black">
          Professional Skills
        </h1>
        <div className="flex justify-between space-x-15">
          <button
            className={`${
              tab === "programming"
                ? "text-[#000000] border-b-3 border-[#2D8BE8]"
                : "text-[#8B8888] border-b-4 border-transparent hover:border-[#ccc]"
            } font-sans text-[1.3rem] font-semibold`}
            onClick={() => handleTabChange("programming")}
          >
            Programming
          </button>
          <button
            className={`${
              tab === "engineering"
                ? "text-[#000000] border-b-3 border-[#2D8BE8]"
                : "text-[#8B8888] border-b-4 border-transparent hover:border-[#ccc]"
            } font-sans text-[1.3rem] font-semibold`}
            onClick={() => handleTabChange("engineering")}
          >
            Engineering
          </button>
          <button
            className={`${
              tab === "design"
                ? "text-[#000000] border-b-3 border-[#2D8BE8]"
                : "text-[#8B8888] border-b-4 border-transparent hover:border-[#ccc]"
            } font-sans text-[1.3rem] font-semibold`}
            onClick={() => handleTabChange("design")}
          >
            Design
          </button>
        </div>
      </div>
      {tab==='programming' &&( <div className="flex justify-start w-[60rem] pt-14">
        <img src="/programming.png" alt="" />
      </div>)}
        {tab==='engineering' &&(
          <div className="grid grid-cols-2 text-[1.3rem] font-medium text-[#424040] py-4 items-center">
            {engineering.map((skill, index) => (
              <div className="flex flex-col justify-center px-10 py-10 mx-4 shadow-lg" key={index}>
                {skill}
              </div>
            ))}
          </div>
        )}
        {tab==='design' &&(<div className="flex justify-start w-[40rem] pt-14">
        <img src="/design.png" alt="" />
      </div>)}

    </div>
  );
};

export default Skills;
