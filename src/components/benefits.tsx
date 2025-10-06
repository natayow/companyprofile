import React from "react";
import {
  HiOutlineAcademicCap,
  HiOutlineStar,
  HiOutlineUser,
} from "react-icons/hi";

export default function Benefits() {
  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-1 items-center px-4 md:px-8">
        <div className="py-8 lg:py-16 lg:pl-44 lg:pr-9 flex flex-col gap-5 text-center lg:text-left">
          <p className="text-[#545BE8] font-light">WHAT WE GIVE</p>
          <h1 className="text-[#141E32] text-3xl font-bold">
            What do You Get From Us
          </h1>
          <p className="text-[#969696] font-extralight">
            We provide structured learning paths, expert instructors, and
            hands-on projects—ensuring you gain real skills, not just theory,
            and progress step by step.
          </p>
        </div>
        <div className="w-full lg:w-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:pr-9">
            <div className="bg-[#545BE8] px-6 py-11 flex flex-col gap-3 rounded-lg">
              <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
                <HiOutlineUser className="text-[#F0C932] text-xl" />
              </div>

              <p className="text-white font-bold">Professional Teacher</p>
              <p className="text-[#DDDDDD] font-extralight text-sm">
                Learn directly from skilled instructors who bring real-world
                knowledge, practical insights, and clear guidance into every
                lesson.
              </p>
            </div>
            <div className="bg-[#545BE8] px-6 py-11 flex flex-col gap-3  rounded-lg">
              <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
                <HiOutlineAcademicCap className="text-[#F0C932] text-2xl" />
              </div>

              <p className="text-white font-bold">Course Certificate</p>
              <p className="text-[#DDDDDD] font-extralight text-sm">
                Receive official certificates upon completion, showcasing your
                skills and achievements to boost career, study, or personal
                growth.
              </p>
            </div>
            <div className="bg-[#545BE8] px-6 py-11 flex flex-col gap-3 rounded-lg md:col-span-2 lg:col-span-1 ">
              <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center">
                <HiOutlineStar className="text-[#F0C932] text-xl" />
              </div>

              <p className="text-white font-bold">interesting learning</p>
              <p className="text-[#DDDDDD] font-extralight text-sm w-full">
                Experience interactive lessons, projects, and quizzes that keep
                learning engaging, motivating, and enjoyable at every step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
