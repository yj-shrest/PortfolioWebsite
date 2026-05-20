import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const formData = new FormData(form);
    const templateParams = {
      name: formData.get("name").trim(),
      email: formData.get("email").trim(),
      message: formData.get("message").trim(),
    };

    if (!serviceId || !templateId || !publicKey) {
      setStatus("missing-config");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
      });
      setStatus("sent");
      form.reset();
    } catch (error) {
      console.error("Failed to send contact email:", error);
      setStatus("error");
    }
  };

  return (
    <div id="contact">
      <div className="flex w-full max-w-[60rem] flex-col px-4 h-auto pt-10">
        <h1 className="text-[2rem] font-sans font-semibold text-[#2f2f2f] pb-8">
          Contact Me
        </h1>

        <div className="flex flex-col justify-center w-full h-auto bg-white shadow-md rounded-lg p-4 sm:p-6">
          <p className="font-sans font-medium text-[1.25rem] sm:text-[1.5rem]">
            Send me a message
          </p>
          <form className="flex flex-col mt-4" onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col w-full md:flex-row justify-between mb-4 ">
              <div className="w-full md:w-1/2 md:mr-2 flex flex-col">
                <label className="text-gray-700 mb-2">Name</label>
                <input
                  name="name"
                  type="text"
                  className="border border-gray-300 rounded-lg p-2 mb-4"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 md:mr-2 flex flex-col">
                <label className="text-gray-700 mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  className="border border-gray-300 rounded-lg p-2 mb-4"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            <label className="text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              className="border border-gray-300 rounded-lg p-2 mb-4"
              rows="4"
              placeholder="Your message here...."
              required
            ></textarea>

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-[#2D8BE8] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#1a5f9c] transition duration-300 disabled:cursor-not-allowed disabled:bg-[#8bbfed]"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "sent" && (
              <p className="mt-3 text-sm font-medium text-green-600">
                Message sent successfully.
              </p>
            )}
            {status === "error" && (
              <p className="mt-3 text-sm font-medium text-red-600">
                Message could not be sent. Please try again.
              </p>
            )}
            {status === "missing-config" && (
              <p className="mt-3 text-sm font-medium text-red-600">
                EmailJS is not configured yet.
              </p>
            )}
          </form>
        </div>
        <div className="flex my-8 flex-wrap justify-center items-center gap-5 sm:gap-8">
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
