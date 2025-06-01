import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="flex flex-col w-[60rem] h-auto pt-10">
        <h1 className="text-[2rem] font-sans font-semibold text-[#2f2f2f] pb-8">
          Contact Me
        </h1>

        <div className="flex flex-col justify-center w-[60rem] h-auto bg-white shadow-md rounded-lg p-6">
          <p className="font-sans font-medium text-[1.5rem]">
            Send me a message
          </p>
          <form className="flex flex-col mt-4">
            <div className="flex flex-col w-full md:flex-row justify-between mb-4 ">
              <div className="w-full md:w-1/2 mr-2 flex flex-col">
                <label className="text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg p-2 mb-4"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 mr-2 flex flex-col">
                <label className="text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="border border-gray-300 rounded-lg p-2 mb-4"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <label className="text-gray-700 mb-2">Message</label>
            <textarea
              className="border border-gray-300 rounded-lg p-2 mb-4"
              rows="4"
              placeholder="Your message here...."
              required
            ></textarea>

            <button
              type="submit"
              className="bg-[#2D8BE8] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#1a5f9c] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex my-8 justify-center items-center space-x-8">
          <a href="https://www.facebook.com/yujal.shrestha">
            <img className="h-[3rem] object-contain" src="/PortfolioWebsite/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/yujal40/">
            <img className="h-[3rem] object-contain" src="/PortfolioWebsite/insta.png" alt="" />
          </a>
            <a href="https://t.me/+9779808779843">
            <img className="h-[3rem] object-contain" src="/PortfolioWebsite/telegram.png" alt="" />
            </a>
            <a href="https://wa.me/9779808779843">
            <img className="h-[3rem] object-contain" src="/PortfolioWebsite/whatsapp.png" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/yujal-shrestha-88ba43261/">
            <img className="h-[3rem] object-contain" src="/PortfolioWebsite/linkedin.png" alt="" />
            </a>

        </div>
      </div>
    </div>
  );
};

export default Contact;
