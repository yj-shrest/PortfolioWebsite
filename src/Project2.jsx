import React from "react";

const Project2 = () => {
  return (
    <div className="flex flex-col relative w-[50rem] pb-10 h-auto space-y-2">
      <div className="flex w-[30rem] items-end pb-2 space-x-2">
        <h1
          className="text-[4rem] font-bold leading-none"
          style={{
            WebkitTextStroke: "1px black",
            color: "transparent",
          }}
        >
          02
        </h1>
        <h1 className="text-[2rem] font-semibold text-[#2f2f2f] leading-none">
          Smart Lagani
        </h1>
      </div>
      <div className="flex justify-between">
        <div>
          <div className="w-[25rem] border-t-3 pb-10 border-[#2D8BE8]"></div>
          <img
            className="w-[25rem] h-auto rounded-xl"
            src="/project2.png"
            alt="image1"
          />
        </div>
        <div className="flex flex-col pl-10 justify-between space-y-2">
          <p className="text-[1.2rem] font-sans text-[#6D6969]  mt-26 font-medium text-justify">
            SmartLagani! a Stock Market Predictor App documentation. This
            application leverages real-time data, fundamental analysis, and Long
            Short-Term Memory (LSTM) models to classify stocks and make
            predictions about the stock market. Whether you're an investor,
            trader, or financial enthusiast, this app aims to provide valuable
            insights into stock market trends.
          </p>
          <div className="flex justify-between items-end">
            <div className="flex space-x-2 items-end">
              <a href="https://github.com/Hack-A-Week/SYRuS-2024">
              <img
                className="h-[3rem] object-contain"
                src="/Githubicon.png"
                alt=""
                />
              </a>
              <a href="https://www.youtube.com/watch?v=aVivUsV5yBU">
              <img
                className="h-[3rem] object-contain"
                src="/Youtube.png"
                alt=""
                />
              </a>
            </div>
            <img
              className="h-[4.5rem] object-contain"
              src="/ReactNative.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
