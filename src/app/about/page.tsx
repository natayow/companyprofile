import React from "react";
import Image from "next/image";
import {
  HiCheckCircle,
  HiChip,
  HiCloud,
  HiEmojiHappy,
  HiEye,
  HiHeart,
} from "react-icons/hi";
import TeamSection from "@/components/teamsection";

export default function About() {
  return (
    <main className="bg-white pt-[72px]">
      <div className="bg-linear-180 from-[#545BE8] to-[#272DB0] text-white py-8 md:py-16 px-4 md:px-8 lg:px-44 flex flex-col gap-2 items-center justify-center mb-6 md:mb-0">
        <h1 className="text-white text-2xl md:text-3xl font-bold">About Us</h1>
        <p className="text-[#F0C932]">Home / About Us</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-8 md:py-16 px-4 md:px-8 lg:px-44 gap-6 md:gap-10">
        <div className="relative w-full max-w-[450px] h-[300px] md:h-[450px] mx-auto">
          <Image
            src={"/static/Group 6.svg"}
            alt="Image"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-6 justify-center">
          <p className="text-[#545BE8] font-light">ABOUT US</p>
          <h1 className="text-2xl md:text-3xl text-[#141E32] font-bold text-center md:text-left">
            Building Skills, Shaping Futures
          </h1>
          <p className="text-[#969696] font-extralight">
            At Coding Store, we believe that learning should be accessible,
            practical, and inspiring. Our mission is to provide high-quality
            courses that empower individuals to master skills, create real-world
            projects, and unlock new career opportunities.
          </p>
        </div>
      </div>

      {/* Company Background, Founding Story, and Milestones */}

      {/* Our Team – now dynamic */}
      <div>
        <h1 className="text-[#141E32] pt-8 md:pt-12 text-2xl md:text-3xl font-bold text-center">
          Our Team
        </h1>
        <TeamSection count={6} />
      </div>

      {/* Culture */}
      <div className="py-8 md:py-16 px-4 md:px-8 lg:px-44">
        <h2 className="text-2xl md:text-3xl font-bold text-[#141E32] text-center mb-8 md:mb-12">
          Our Culture
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white rounded-lg p-6 md:p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 md:w-16 md:h-16">
              <HiChip className="w-full text-4xl md:text-5xl text-[#545BE8]" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-[#141E32] mb-3 md:mb-4">
              Innovation at the Core
            </h3>
            <p className="text-[#969696] font-light text-sm md:text-base">
              Always improving and experimenting.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 ">
              <HiEmojiHappy className="w-full text-5xl text-[#545BE8]" />
            </div>
            <h3 className="text-xl font-semibold text-[#141E32] mb-4">
              Learner-First
            </h3>
            <p className="text-[#969696] font-light">
              Every choice helps our students succeed.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16">
              <HiCloud className="w-full text-5xl text-[#545BE8]" />
            </div>
            <h3 className="text-xl font-semibold text-[#141E32] mb-4">
              Inclusivity
            </h3>
            <p className="text-[#969696] font-light">
              Learning for everyone, everywhere.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16">
              <HiHeart className="w-full text-5xl text-[#545BE8]" />
            </div>
            <h3 className="text-xl font-semibold text-[#141E32] mb-4">
              Growth-Oriented
            </h3>
            <p className="text-[#969696] font-light">
              We push each other to keep learning, developing, and reaching new
              goals.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 ">
              <HiCheckCircle className="w-full text-5xl text-[#545BE8]" />
            </div>
            <h3 className="text-xl font-semibold text-[#141E32] mb-4">
              Supportive
            </h3>
            <p className="text-[#969696] font-light">
              Everyone&apos;s voice matters, and collaboration is at the heart
              of what we do.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 ">
              <HiEye className="w-full text-5xl text-[#545BE8]" />
            </div>
            <h3 className="text-xl font-semibold text-[#141E32] mb-4">
              Integrity
            </h3>
            <p className="text-[#969696] font-light">
              Honest, transparent, and accountable
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
