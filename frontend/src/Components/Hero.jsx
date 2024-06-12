import React from "react";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="bg-gradient-to-bl from-blue-100 to-red-100 h-[50vh] border-0 flex justify-center items-center border-black">
        <div className="space-y-10 border-0 border-black flex flex-col w-3/4 lg:w-2/3 items-center">
          <div className="flex flex-col h-[20vh] justify-center items-center space-y-4 w-full">
            <span
              className="font-semibold text-2xl md:text-3xl text-center lg:text-start"
              style={{ fontFamily: "sans-serif" }}
            >
              Let's help you to make your events memorable than ever.
            </span>
            <span
              className="font-medium md:text-xl text-center lg:text-start"
              style={{ fontFamily: "sans-serif" }}
            >
              Your Occasion, Our Inspiration - Together We Create Magic.
            </span>
          </div>
        </div>
      </div>
      {/* why we content */}
      <div className="flex flex-col items-center bg-gradient-to-tl from-blue-100 to-red-100 h-full justify-center">
        <div className="flex flex-col items-center space-y-10">
          <span
            className="text-2xl md:text-5xl font-semibold decoration-red-600 underline underline-offset-[4.5px]"
            style={{ fontFamily: "sans-serif" }}
          >
            What makes us stand out?
          </span>

          <div className="w-[80%] grid grid-rows-3 md:grid-cols-3 gap-6 p-3">
            <div className="text-start flex flex-col items-start space-y-3  p-3 justify-start border-[1px] border-black rounded-md shadow-xl shadow-red-100">
              <span
                className="decoration-red-600 underline-offset-[4.5px] underline text-xl"
                style={{ fontFamily: "sans-serif" }}
              >
                Reliablity
              </span>
              <p
                className="text-medium text-base"
                style={{ fontFamily: "sans-serif" }}
              >
                Count on us to deliver flawlessly executed events, backed by our
                unwavering commitment and years of trusted expertise.
              </p>
            </div>

            <div className="text-start flex flex-col items-start space-y-3  p-3 justify-start border-[1px] border-black rounded-md shadow-xl shadow-red-100">
              <span
                className="decoration-red-600 underline-offset-[4.5px] underline text-xl"
                style={{ fontFamily: "sans-serif" }}
              >
                Flexibility
              </span>
              <p
                className="text-medium text-base"
                style={{ fontFamily: "sans-serif" }}
              >
                We tailor every detail to your unique vision, ensuring your
                event is a true reflection of your style and preferences.
              </p>
            </div>

            <div className="text-start flex flex-col items-start space-y-3  p-3 justify-start border-[1px] border-black rounded-md shadow-xl shadow-red-100">
              <span
                className="decoration-red-600 underline-offset-[4.5px] underline text-xl"
                style={{ fontFamily: "sans-serif" }}
              >
                Compatibility
              </span>
              <p
                className="text-medium text-base"
                style={{ fontFamily: "sans-serif" }}
              >
                Our team is dedicated to understanding your needs, ensuring
                seamless collaboration and a harmonious planning process.
              </p>
            </div>

            <div className="text-start flex flex-col items-start space-y-3  p-3 justify-start border-[1px] border-black rounded-md shadow-xl shadow-red-100">
              <span
                className="decoration-red-600 underline-offset-[4.5px] underline text-xl"
                style={{ fontFamily: "sans-serif" }}
              >
                Availability
              </span>
              <p
                className="text-medium text-base"
                style={{ fontFamily: "sans-serif" }}
              >
                We're here for you around the clock, ready to assist and answer
                questions whenever you need us, 24/7.
              </p>
            </div>

            <div className="text-start flex flex-col items-start space-y-3  p-3 justify-start border-[1px] border-black rounded-md shadow-xl shadow-red-100">
              <span
                className="decoration-red-600 underline-offset-[4.5px] underline text-xl"
                style={{ fontFamily: "sans-serif" }}
              >
                Resourcefulness
              </span>
              <p
                className="text-medium text-base"
                style={{ fontFamily: "sans-serif" }}
              >
                We're equipped with a vast network of industry professionals and
                innovative ideas to make your event truly exceptional.
              </p>
            </div>

            <div className="text-start flex flex-col items-start space-y-3  p-3 justify-start border-[1px] border-black rounded-md shadow-xl shadow-red-100">
              <span
                className="decoration-red-600 underline-offset-[4.5px] underline text-xl"
                style={{ fontFamily: "sans-serif" }}
              >
                Creativity
              </span>
              <p
                className="text-medium text-base"
                style={{ fontFamily: "sans-serif" }}
              >
                Our imaginative approach transforms ordinary events into
                extraordinary experiences, leaving lasting memories.
              </p>
            </div>

            <div className="text-start flex flex-col items-start space-y-3  p-3 justify-start border-[1px] border-black rounded-md shadow-xl shadow-red-100">
              <span
                className="decoration-red-600 underline-offset-[4.5px] underline text-xl"
                style={{ fontFamily: "sans-serif" }}
              >
                Transparent Communication
              </span>
              <p
                className="text-medium text-base"
                style={{ fontFamily: "sans-serif" }}
              >
                We believe in open and clear communication, keeping you informed
                every step of the way for peace of mind.
              </p>
            </div>

            <div className="text-start flex flex-col items-start space-y-3  p-3 justify-start border-[1px] border-black rounded-md shadow-xl shadow-red-100">
              <span
                className="decoration-red-600 underline-offset-[4.5px] underline text-xl"
                style={{ fontFamily: "sans-serif" }}
              >
                Attention to Detail
              </span>
              <p
                className="text-medium text-base"
                style={{ fontFamily: "sans-serif" }}
              >
                Every element is meticulously planned and executed to ensure a
                flawless and unforgettable event.
              </p>
            </div>

            <div className="text-start flex flex-col items-start space-y-3  p-3 justify-start border-[1px] border-black rounded-md shadow-xl shadow-red-100">
              <span
                className="decoration-red-600 underline-offset-[4.5px] underline text-xl"
                style={{ fontFamily: "sans-serif" }}
              >
                Client-Centric Approach
              </span>
              <p
                className="text-medium text-base"
                style={{ fontFamily: "sans-serif" }}
              >
                Your satisfaction is our priority; we listen, adapt, and go
                above and beyond to exceed your expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
