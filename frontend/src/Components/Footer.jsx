import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import {
  FaAddressCard,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-900 text-slate-200 flex items-end py-4 w-full">
        <div className="mx-auto w-[90%] md:w-3/4 lg:w-2/3 flex flex-col justify-center items-center mb-4 space-y-4 md:space-y-10">
          <div className="flex flex-col w-[100%] space-y-4">
            <span className="font-semibold text-white text-xl md:text-2xl">
              What we known for ?
            </span>
            <div className="font-medium text-sm">
              Utsav is a platform where you can book restaurant, hotel for your
              special occasion or can book vendors for organizing function at 🏘️
              home with different categories available at &nbsp;
              <Link
                className="text-red-600 underline underline-offset-4"
                to="/vendors"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                vendors
              </Link>{" "}
              .
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row h-full items-center md:items-start space-y-6 md:space-y-0 md:space-x-4 ">
            <div className="flex flex-col w-[100%] space-y-2 md:h-32">
              <span className="text-xl font-semibold">Contact details</span>
              <div className="space-y-1">
                <div className="flex items-center space-x-4">
                  <FaAddressCard />
                  <span
                    className="font-medium text-lg"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    123, City Park , NewYork, 12003
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhoneAlt />
                  <span
                    className="font-medium text-lg"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    +55 555555
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <IoIosMail size={20} />
                  <span
                    className="cursor-pointer text-sky-600 underline font-medium text-lg"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    utsav@gmail.com
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start space-y-2 w-full md:h-32">
              <span className="text-xl font-semibold ">Follow us on</span>
              <div className="flex space-x-3">
                <FaFacebook className="hover:scale-150 hover:text-red-600 duration-200 cursor-pointer" />
                <FaInstagram className="hover:scale-150 hover:text-red-600 duration-200 cursor-pointer" />
                <FaXTwitter className="hover:scale-150 hover:text-red-600 duration-200 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex">UTSAV &#169; 2023 - All rights reserved</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
