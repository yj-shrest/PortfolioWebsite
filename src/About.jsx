import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const About = () => {
  return (
    <div id="about" className="flex w-[60rem] h-auto items-center justify-center pb-25">
      <div className="w-[75rem]">
        {/* <img src="/about.png" alt="image" /> */}
        <DotLottieReact
          src="/PortfolioWebsite/Animation2.lottie"
          autoplay
          loop
          className="w-[22rem] h-full object-contain scale-150"
        />
      </div>
      <div className="flex flex-col pl-20">
        <h1 className="text-[2rem] font-semibold text-[#2f2f2f] leading-none text-center">
          About Me
        </h1>
        <p className="text-[1.3rem] font-medium text-[#6D6969] py-4 text-justify">
          An engineering student, developer, and designer passionate about
          turning ideas into simple, creative digital experiences. I enjoy
          exploring the intersection of design and technology to build things
          that are both functional and intuitive.
        </p>
      </div>
    </div>
  );
};

export default About;
