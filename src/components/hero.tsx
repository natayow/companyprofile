"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#F5F5F5] pt-[72px]">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center place-items-center place-self-center py-8 md:py-16 px-4 md:px-54">
        <div className="flex flex-col gap-5 text-center md:text-left px-4 md:px-0">
          <p className="text-[#545BE8] font-light">
            Let&apos;s <span className="font-medium">Begin</span>
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#141E32] text-4xl md:text-6xl leading-tight md:leading-20 font-bold"
          >
            Let&apos;s Find The Right{" "}
            <span className="text-[#545BE8]">Course</span> For you
          </motion.h1>
          <p className="text-[#969696] font-extralight">
            Discover courses that match your goals, skills, and schedule. Start
            small, grow fast, and learn confidently.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="btn btn-primary w-full md:w-auto">
              Register
            </button>
          </div>
        </div>
        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] mt-8 md:mt-0">
          <Image
            src={"/static/Group 6.svg"}
            alt="Image"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
