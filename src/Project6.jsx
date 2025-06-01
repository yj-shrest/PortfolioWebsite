import React from "react";

const Project3 = () => {
  return (
    <div className="flex flex-col bg-[#fafafa] relative w-[50rem] pb-10 h-auto space-y-2">
      <div className="flex w-[40rem] items-end pb-2 space-x-2">
        <h1
          className="text-[4rem] font-bold leading-none"
          style={{
            WebkitTextStroke: "1px black",
            color: "transparent",
          }}
        >
          06
        </h1>
        <h1 className="text-[2rem] font-semibold text-[#2f2f2f] leading-none">
          Automatic Exam Grading System
        </h1>
      </div>

      <div className="w-[35rem] border-t-3 border-[#2D8BE8]"></div>
      <img
        className="w-[30rem] h-[16rem] rounded-xl"
        src="/Project6/image1.png"
        alt="image1"
      />
      <div className="translate-x-[20rem] -translate-y-[13rem] flex flex-col space-y-2">
        <div className="flex space-x-2 items-end  translate-x-[23rem]">
          <a href="https://youtu.be/ciX445QI3Es">
          <img className="w-[3rem] " src="/Youtube.png" alt="" />
          </a>
          <a href="https://github.com/yj-shrest/Automatic-Exam-Grading-System">
          <img className="w-[3rem]" src="/Githubicon.png" alt="" />
          </a>
        </div>
        <div className="w-[18rem] border-t-3 border-[#2D8BE8] translate-x-[12rem] "></div>
        <img
          className="w-[30rem] h-[16rem] rounded-xl  "
          src="/Project6/image2.png"
          alt="image2"
        />
      </div>
      <div className="flex space-x-2 w-full mt-[-17.7rem]">
        <img className="h-[4rem] object-contain" src="/opencv.png" alt="" />
        <img className="h-[4rem] object-contain" src="/mistral.png" alt="" />
      </div>
      <p className="text-[1.2rem] font-sans text-[#6D6969] font-medium text-justify">
        It is an automated tool developed to simplify the
        evaluation of student answer sheets. Using advanced OCR techniques and
        AI-based grading, it can accurately recognize handwritten answers,
        analyze handwriting quality, and grade both objective (MCQs) and
        subjective responses. The system also evaluates diagrams and figures,
        providing comprehensive and unbiased marks quickly. Designed to assist
        educators, this project demonstrates the effective integration of image
        processing and machine learning to streamline exam assessment.
      </p>
    </div>
  );
};

export default Project3;
