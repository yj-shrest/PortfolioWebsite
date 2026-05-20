import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const About = () => {
  return (
    <div id="about" className="flex w-full max-w-[60rem] flex-col items-center justify-center px-4 pb-20 md:flex-row md:pb-25">
      <div className="flex w-full justify-center md:w-1/2">
        <DotLottieReact
          src="/PortfolioWebsite/Animation2.lottie"
          autoplay
          loop
          className="h-full w-full max-w-[18rem] object-contain sm:max-w-[22rem] md:scale-125 lg:scale-150"
        />
      </div>
      <div className="flex pt-10 md:pt-3 flex-col md:w-1/2 md:pl-14 lg:pl-20">
        <h1 className="text-[2rem] font-semibold text-[#2f2f2f] leading-none text-center">
          About Me
        </h1>
        <p className="text-[1.05rem] sm:text-[1.2rem] md:text-[1.3rem] max-w-screen font-medium text-[#6D6969] py-4 px-1 sm:px-6 text-left sm:text-justify">
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
