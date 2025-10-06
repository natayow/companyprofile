import React from "react";

export default function Footer() {
  return (
    <section className="bg-[#393E46] py-8 md:py-16 px-4 md:px-8 lg:px-20 text-white text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-3 items-center md:items-start">
          <img
            src="/static/Group 1970.png"
            alt="Coding Store Logo"
            className="w-32 md:w-auto"
          />
          <p className="text-sm font-extralight text-center md:text-left">
            Copyright © 2024 - All right reserved by Coding Store
          </p>
        </div>

        <div className="text-center md:text-left">
          <p>Contact us</p>
          <p className="font-bold">codingstore@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
