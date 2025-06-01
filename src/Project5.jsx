import React from "react";

const Project3 = () => {
  return (
    <div className="flex flex-col bg-[#fafafa] relative w-[50rem] pb-10 h-auto space-y-2">
      <div className="flex w-[30rem] items-end pb-2 space-x-2">
        <h1
          className="text-[4rem] font-bold leading-none"
          style={{
            WebkitTextStroke: "1px black",
            color: "transparent",
          }}
        >
          05
        </h1>
        <h1 className="text-[2rem] font-semibold text-[#2f2f2f] leading-none">
          AI Insights
        </h1>
      </div>

      <div className="w-[30rem] border-t-3 border-[#2D8BE8]"></div>
      <img
        className="w-[30rem] h-[16rem] rounded-xl"
        src="/PortfolioWebsite/Project5/image1.png"
        alt="image1"
      />
      <div className="translate-x-[20rem] -translate-y-[13rem] flex flex-col space-y-2">
        <div className="flex space-x-2 items-end  translate-x-[23rem]">
          <a href="https://drive.google.com/file/d/1Q1tmOU-UQUziJ-YpMXMJUsus0DvRWy_t/view">
          <img className="w-[3rem] " src="/PortfolioWebsite/Youtube.png" alt="" />
          </a>
          <a href="https://github.com/yj-shrest/analysis">
          <img className="w-[3rem]" src="/PortfolioWebsite/Githubicon.png" alt="" />
          </a>
        </div>
        <div className="w-[18rem] border-t-3 border-[#2D8BE8] translate-x-[12rem] "></div>
        <img
          className="w-[30rem] h-[16rem] rounded-xl  "
          src="/PortfolioWebsite/Project5/image2.png"
          alt="image2"
        />
      </div>
      <div className="flex space-x-2 w-full mt-[-17.7rem]">
        <img className="h-[4rem] object-contain" src="/PortfolioWebsite/numpy.png" alt="" />
        <img className="h-[4rem] object-contain" src="/PortfolioWebsite/pandas.png" alt="" />
      </div>
      <p className="text-[1.2rem] font-sans text-[#6D6969] font-medium text-justify">
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
