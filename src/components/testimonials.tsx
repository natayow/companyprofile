import React from "react";
import { HiStar } from "react-icons/hi";

export default function Testimonials() {
  return (
    <section className="bg-white py-8 md:py-13 px-4 md:px-8 items-center justify-center">
      <h1 className="text-[#141E32] text-2xl md:text-3xl font-bold text-center mb-4">
        Testimonials
      </h1>
      <div className="flex flex-col md:flex-row gap-6 justify-center mx-auto max-w-screen-xl lg:mx-44">
        <div className="relative bg-white p-6 md:p-10 my-4 md:my-10 w-full rounded-lg shadow-lg flex flex-col gap-5">
          <div
            className="absolute top-0 right-0 w-0 h-0 
                       border-l-[80px] border-l-transparent 
                       border-t-[80px] border-b-gray-200"
          />
          <div className="flex gap-3 items-center">
            <img
              className="w-12 md:w-14 h-12 md:h-14"
              src="/static/unsplash_B4TjXnI0Y2c.png"
              alt="Testimonial avatar"
              loading="lazy"
            />
            <div>
              <p className="text-black font-bold">Friskidia</p>
              <p className="text-[#969696] font-extralight text-sm">Client</p>
            </div>
          </div>
          <div className="flex gap-1">
            <HiStar className="text-yellow-400" />
            <HiStar className="text-yellow-400" />
            <HiStar className="text-yellow-400" />
            <HiStar className="text-yellow-400" />
            <HiStar className="text-yellow-400" />
          </div>
          <p className="text-[#646464] font-light">
            “The courses are clear, practical, and fun to follow. I can already
            apply the skills in my projects“
          </p>
        </div>
        <div className="relative bg-white p-6 md:p-10 my-4 md:my-10 w-full rounded-lg shadow-lg flex flex-col gap-5">
          <div
            className="absolute top-0 right-0 w-0 h-0 
                       border-l-[80px] border-l-transparent 
                       border-t-[80px] border-b-gray-200"
          />
          <div className="flex gap-3 items-center">
            <img
              className="w-12 md:w-14 h-12 md:h-14"
              src="/static/unsplash_rDEOVtE7vOs.png"
              alt="Testimonial avatar"
              loading="lazy"
            />
            <div>
              <p className="text-black font-bold">Finkidia</p>
              <p className="text-[#969696] font-extralight text-sm">Client</p>
            </div>
          </div>
          <div className="flex gap-1">
            <HiStar className="text-yellow-400" />
            <HiStar className="text-yellow-400" />
            <HiStar className="text-yellow-400" />
            <HiStar className="text-yellow-400" />
            <HiStar className="text-yellow-400" />
          </div>
          <p className="text-[#646464] font-light">
            “I love how interactive the lessons are! The quizzes and projects
            kept me motivated“
          </p>
        </div>
      </div>
    </section>
  );
}
