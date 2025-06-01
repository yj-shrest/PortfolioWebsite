import React from "react";
import { useState, useEffect } from "react";
const Intro = () => {
  const words = ["Developer ", "Designer ", "Engineer "];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let interval;

    if (!isPaused) {
      if (!isDeleting) {
        // Typing
        if (letterIndex <= currentWord.length) {
          interval = setTimeout(() => {
            setText(currentWord.slice(0, letterIndex + 1));
            setLetterIndex(letterIndex + 1);
          }, 150);
        }

        if (letterIndex === currentWord.length) {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, 1000); // Pause before deleting
        }
      } else {
        // Deleting
        if (letterIndex > 0) {
          interval = setTimeout(() => {
            setText(currentWord.slice(0, letterIndex - 1));
            setLetterIndex(letterIndex - 1);
          }, 50);
        }

        if (letterIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }

    return () => clearTimeout(interval);
  }, [letterIndex, isDeleting, isPaused]);

  return (
    <div id="home" className="flex flex-col w-full h-auto items-center justify-center pt-25">
      <div className="flex flex-col items-start justify-center w-[60rem]">
        <div className="w-105 border-b-3 border-[#2D8BE8] translate-y-38"></div>
      </div>
      <div className="flex flex-row justify-between w-[60rem]">
        <div className="flex flex-col items-start justify-end relative">
          {/* <div className="w-50 border-b border-3 border-[#2D8BE8]"></div> */}
          <div className="h-101 border-l-3 border-[#2D8BE8] translate-y-11"></div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center space-x-4 justify-left text-[3rem] font-bold text-gray-900">
            <h1 className="text-[#2D8BE8]"> {"<Hello />"}</h1>
            <p> I'm</p>
          </div>
          <h1 className="text-[3rem] font-bold text-gray-900 leading-none">
            {"Yujal Shrestha"}
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center w-[30rem]">
          <img src="/PortfolioWebsite/pic.png" alt="Profile" className="rounded-full" />
        </div>
        <div className="flex flex-col items-end justify-end relative">
          <div className="text-[2rem] text-center leading-none min-w-[2ch] space-y-2 font-bold font-sans text-[#2d8be8] pb-4 translate-x-4 translate-y-9">
            {text.split("").map((char, index) => (
              <div key={index}>{char.toLocaleUpperCase()}</div>
            ))}
          </div>
          {/* <div className="w-50 border-b border-3 border-[#2D8BE8]"></div> */}
          <div className="h-9 border-r-3 border-[#2D8BE8] translate-x-[0.03rem] translate-y-11"></div>
        </div>
      </div>
      <div className="flex w-[60rem] items-center gap-4 text-[2rem] font-semibold font-sans text-[#2f2f2f] pt-5 pb-16">
        <div className="w-10 border-t border-3 border-[#2D8BE8]"></div>
        <span className="whitespace-nowrap ">Developer</span>
        <div className="flex-grow border-t border-3 border-[#2D8BE8]"></div>
        <span className="whitespace-nowrap ">Designer</span>
        <div className="flex-grow border-t border-3 border-[#2D8BE8]"></div>
        <span className="whitespace-nowrap ">Engineer</span>
        <div className="w-10 border-t border-3 border-[#2D8BE8]"></div>
      </div>
    </div>
  );
};

export default Intro;
