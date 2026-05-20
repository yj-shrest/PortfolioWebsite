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
    <div className="flex w-full max-w-[60rem] flex-col px-4 pb-20 md:pb-25">
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between">
        <h1 className="text-[2rem] font-sans font-semibold text-black">
          Professional Skills
        </h1>
        <div className="flex w-full justify-center mt-5 gap-4 sm:gap-8 md:w-auto md:space-x-15">
          <button
            className={`${
              tab === "programming"
                ? "text-[#000000] border-b-3 border-[#2D8BE8]"
                : "text-[#8B8888] border-b-4 border-transparent hover:border-[#ccc]"
            } font-sans text-[1rem] sm:text-[1.15rem] md:text-[1.3rem] font-medium md:font-semibold`}
            onClick={() => handleTabChange("programming")}
          >
            Programming
          </button>
          <button
            className={`${
              tab === "engineering"
                ? "text-[#000000] border-b-3 border-[#2D8BE8]"
                : "text-[#8B8888] border-b-4 border-transparent hover:border-[#ccc]"
            } font-sans text-[1rem] sm:text-[1.15rem] md:text-[1.3rem] font-medium md:font-semibold`}
            onClick={() => handleTabChange("engineering")}
          >
            Engineering
          </button>
          <button
            className={`${
              tab === "design"
                ? "text-[#000000] border-b-3 border-[#2D8BE8]"
                : "text-[#8B8888] border-b-4 border-transparent hover:border-[#ccc]"
            } font-sans text-[1rem] sm:text-[1.15rem] md:text-[1.3rem] font-medium md:font-semibold`}
            onClick={() => handleTabChange("design")}
          >
            Design
          </button>
        </div>
      </div>
      {tab==='programming' &&( <div className="flex justify-center items-center pt-14">
        <img className="w-full max-w-[60rem]" src="/PortfolioWebsite/programming.png" alt="" />
      </div>)}
        {tab==='engineering' &&(
          <div className="grid grid-cols-1 sm:grid-cols-2 text-[1.05rem] sm:text-[1.2rem] md:text-[1.3rem] font-medium text-[#424040] py-4 items-stretch gap-4">
            {engineering.map((skill, index) => (
              <div className="flex flex-col justify-center px-5 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 shadow-lg" key={index}>
                {skill}
              </div>
            ))}
          </div>
        )}
        {tab==='design' &&(<div className="flex justify-center w-full pt-14">
        <img className="w-full max-w-[40rem]" src="/PortfolioWebsite/design.png" alt="" />
      </div>)}

    </div>
  );
};

export default Skills;
