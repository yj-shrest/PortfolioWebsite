import React from "react";
import { useState, useEffect } from "react";
const IntroSM = () => {
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
    <div id="home" className="flex w-full flex-col items-center justify-center px-4 pt-24 pb-12">
      <div className="flex w-full max-w-[34rem] flex-col items-center gap-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-3 text-[clamp(2rem,11vw,3rem)] font-bold text-gray-900">
            <h1 className="text-[#2D8BE8]">{"<Hello />"}</h1>
            <p>I'm</p>
          </div>
          <h1 className="text-[clamp(2.35rem,12vw,3.25rem)] font-bold text-gray-900 leading-none">
            {"Yujal Shrestha"}
          </h1>
        </div>
        <div className="flex w-full max-w-[18rem] flex-col items-center justify-center">
          <img src="/PortfolioWebsite/pic.png" alt="Profile" className="w-full rounded-full" />
        </div>
        <div className="min-h-[2.5rem] text-[1.75rem] text-center leading-none font-bold font-sans text-[#2d8be8]">
          {text.toLocaleUpperCase()}
        </div>
      </div>
      <div className="flex w-full max-w-[34rem] flex-wrap items-center justify-center gap-3 text-[1.15rem] sm:text-[1.35rem] font-semibold font-sans text-[#2f2f2f] pt-4">
        <span>Developer</span>
        <div className="h-1 w-1 rounded-full bg-[#2D8BE8]"></div>
        <span>Designer</span>
        <div className="h-1 w-1 rounded-full bg-[#2D8BE8]"></div>
        <span>Engineer</span>
      </div>
    </div>
  );
};

export default IntroSM;
