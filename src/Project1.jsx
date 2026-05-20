import React from "react";

const Project1 = () => {
  return (
    <div className="flex flex-col bg-[#fafafa] relative w-full md:w-[50rem] pb-10 h-auto space-y-4 md:space-y-2">
      <div className="flex w-full md:w-[30rem] items-end pb-2 space-x-2">
        <h1
          className="text-[3rem] sm:text-[4rem] font-bold leading-none"
          style={{
            WebkitTextStroke: "1px black",
            color: "transparent",
          }}
        >
          01
        </h1>
        <h1 className="text-[1.6rem] sm:text-[2rem] font-semibold text-[#2f2f2f] leading-none">
          DSA Delights
        </h1>
      </div>

      <div className="w-full md:w-[30rem] border-t-3 border-[#2D8BE8]"></div>
      <img
        className="w-full md:w-[30rem] h-auto rounded-xl"
        src="/PortfolioWebsite/Project1/image1.png"
        alt="image1"
      />
      <div className="flex flex-col space-y-2 md:-translate-y-[13rem] md:translate-x-[20rem]">
        <a href="https://github.com/yj-shrest/DSA-DELISHTS">
        <img
          className="w-[3rem] md:translate-x-[27rem]"
          src="/PortfolioWebsite/Githubicon.png"
          alt=""
          />
        </a>
        <div className="w-full md:w-[18rem] border-t-3 border-[#2D8BE8] md:translate-x-[12rem] "></div>
        <img
          className="w-full md:w-[30rem] h-auto rounded-xl  "
          src="/PortfolioWebsite/Project1/image2.png"
          alt="image2"
        />
      </div>
      <div className="flex space-x-2 w-full md:mt-[-17.7rem]">
        <img className="h-[3.5rem] sm:h-[4.5rem] object-contain" src="/PortfolioWebsite/python.png" alt="" />
        <img className="h-[3.5rem] sm:h-[4.5rem] object-contain" src="/PortfolioWebsite/ctk.png" alt="" />
      </div>
      <p className="text-[1rem] sm:text-[1.2rem] font-sans text-[#6D6969] font-medium text-left sm:text-justify">
        DSA Delights is a recipebook built in CustomTkinter. With an intuitive
        design and a beautiful UI, the project offers a better recipebook
        experience than ever before. Users may look for recipes according to
        their need or create their own! Recipes are stored locally and upon
        startup appropriate data structures Hashtables and binary search trees
        are made for easy and fast retrieval. KMP and counting sort algorithms
        used to optimise searching speeds.
      </p>
    </div>
  );
};

export default Project1;
