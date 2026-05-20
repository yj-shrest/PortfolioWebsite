import React from "react";

const Project3 = () => {
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
          05
        </h1>
        <h1 className="text-[1.6rem] sm:text-[2rem] font-semibold text-[#2f2f2f] leading-none">
          AI Insights
        </h1>
      </div>

      <div className="w-full md:w-[30rem] border-t-3 border-[#2D8BE8]"></div>
      <img
        className="w-full md:w-[30rem] h-auto md:h-[16rem] rounded-xl"
        src="/PortfolioWebsite/Project5/image1.png"
        alt="image1"
      />
      <div className="flex flex-col space-y-2 md:-translate-y-[13rem] md:translate-x-[20rem]">
        <div className="flex space-x-2 items-end md:translate-x-[23rem]">
          <a href="https://drive.google.com/file/d/1Q1tmOU-UQUziJ-YpMXMJUsus0DvRWy_t/view">
          <img className="w-[3rem] " src="/PortfolioWebsite/Youtube.png" alt="" />
          </a>
          <a href="https://github.com/yj-shrest/analysis">
          <img className="w-[3rem]" src="/PortfolioWebsite/Githubicon.png" alt="" />
          </a>
        </div>
        <div className="w-full md:w-[18rem] border-t-3 border-[#2D8BE8] md:translate-x-[12rem] "></div>
        <img
          className="w-full md:w-[30rem] h-auto md:h-[16rem] rounded-xl  "
          src="/PortfolioWebsite/Project5/image2.png"
          alt="image2"
        />
      </div>
      <div className="flex space-x-2 w-full md:mt-[-17.7rem]">
        <img className="h-[3.25rem] sm:h-[4rem] object-contain" src="/PortfolioWebsite/numpy.png" alt="" />
        <img className="h-[3.25rem] sm:h-[4rem] object-contain" src="/PortfolioWebsite/pandas.png" alt="" />
      </div>
      <p className="text-[1rem] sm:text-[1.2rem] font-sans text-[#6D6969] font-medium text-left sm:text-justify">
        AI Insights is an AI-powered application designed to provide
        comprehensive data analysis and predictions. It offers insights through
        data analysis, machine learning predictions, conversational AI, and
        dynamic data visualization, targeting sectors such as business,
        healthcare, and policy making to support informed decision-making.
      </p>
    </div>
  );
};

export default Project3;
