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
          03
        </h1>
        <h1 className="text-[2rem] font-semibold text-[#2f2f2f] leading-none">
          Sitara-Exosky
        </h1>
      </div>

      <div className="w-[30rem] border-t-3 border-[#2D8BE8]"></div>
      <img
        className="w-[30rem] h-auto rounded-xl"
        src="/PortfolioWebsite/Project3/image1.png"
        alt="image1"
      />
      <div className="translate-x-[20rem] -translate-y-[13rem] flex flex-col space-y-2">
        <div className="flex space-x-2 items-end  translate-x-[23rem]">
          <a href="https://www.youtube.com/watch?v=Rskrtq_vCUY">
        <img
          className="w-[3rem] "
          src="/PortfolioWebsite/Youtube.png"
          alt=""
          />
        </a>
          <a href="https://github.com/yj-shrest/sitara-exosky">
        <img
          className="w-[3rem]"
          src="/PortfolioWebsite/Githubicon.png"
          alt=""
          />
        </a>
        </div>
        <div className="w-[18rem] border-t-3 border-[#2D8BE8] translate-x-[12rem] "></div>
        <img
          className="w-[30rem] h-auto rounded-xl  "
          src="/PortfolioWebsite/Project3/image2.png"
          alt="image2"
        />
      </div>
      <div className="flex space-x-2 w-full mt-[-17.7rem]">
        <img className="h-[4.5rem] object-contain" src="/PortfolioWebsite/React.png" alt="" />
        <img className="h-[4.5rem] object-contain" src="/PortfolioWebsite/Node.png" alt="" />
      </div>
      <p className="text-[1.2rem] font-sans text-[#6D6969] font-medium text-justify">
        Sitara is an innovative educational tool that allows users to explore
        and experience the night sky as seen from a variety of exoplanets
        discovered by astronomers and space missions. By seamlessly integrating
        data from NASA's Exoplanet Archive with the detailed star positions from
        the Gaia DR3 Catalogue, Sitara visualises the unique star patterns
        visible from these distant worlds, providing a distinct perspective on
        the galaxy.
      </p>
    </div>
  );
};

export default Project3;
