import React from "react";
import Image from "next/image";

export default function People() {
  return (
    <section className="bg-linear-180 from-[#545BE8] to-[#272DB0] text-white py-8 md:py-16 px-4 md:px-8 lg:px-44">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] mx-auto md:mx-0">
          <Image
            src={"/static/Group 1964.svg"}
            alt="Image"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        <div className="flex flex-col gap-5 justify-center text-center md:text-left">
          <p className="text-[#F0C932] font-light">SELECTED COURSE</p>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight lg:leading-15 font-bold">
            People Taking Courses
          </h1>
          <p className="text-[#ddd] font-extralight">
            Join thousands of learners worldwide who are building skills and
            achieving their goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-24 mt-8 items-center sm:items-start sm:justify-center md:justify-start">
            <div>
              <h2 className="text-xl font-bold text-[#F0C932]">6,000</h2>
              <p className="text-[#ddd] font-light">People Views</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#F0C932]">4,000</h2>
              <p className="text-[#ddd] font-light">User</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#F0C932]">100+</h2>
              <p className="text-[#ddd] font-light">Course</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
