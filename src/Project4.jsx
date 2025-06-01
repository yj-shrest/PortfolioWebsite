import React from "react";

const Project4 = () => {
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
          04
        </h1>
        <h1 className="text-[2rem] font-semibold text-[#2f2f2f] leading-none">
          BCT Royale
        </h1>
      </div>

      <div className="w-[30rem] border-t-3 border-[#2D8BE8]"></div>
      <img
        className="w-[30rem] h-[16rem] rounded-xl"
        src="/Project4/image1.png"
        alt="image1"
      />
      <div className="translate-x-[20rem] -translate-y-[13rem] flex flex-col space-y-2">
        <div className="flex space-x-2 items-end  translate-x-[27rem]">
          {/* <img className="w-[3rem] " src="/Youtube.png" alt="" /> */}
          <a href="https://github.com/yj-shrest/BCTroyale">
          <img className="w-[3rem]" src="/Githubicon.png" alt="" />
          </a>
        </div>
        <div className="w-[18rem] border-t-3 border-[#2D8BE8] translate-x-[12rem] "></div>
        <img
          className="w-[30rem] h-[16rem] rounded-xl  "
          src="/Project4/image2.png"
          alt="image2"
        />
      </div>
      <div className="flex space-x-2 w-full mt-[-17.7rem]">
        <img className="h-[4.5rem] object-contain" src="/c++.png" alt="" />
        <img className="h-[4.5rem] object-contain" src="/sdl.png" alt="" />
      </div>
      <p className="text-[1.2rem] font-sans text-[#6D6969] font-medium text-justify">
        BCT Royale is a 2D battle arena game built in C++ using the SDL2
        library. It features player movement, shooting mechanics, enemy AI, and
        a scrolling camera system that creates an engaging gameplay experience.
        The project focuses on core game development principles like entity
        management, collision detection, and real-time rendering. Designed as a
        learning project, BCT Royale highlights how C++ and SDL2 can be used to
        create fast, responsive games with modular architecture.
      </p>
    </div>
  );
};

export default Project4;
