import Link from "next/link";
import React from "react";

export default function BestCourses() {
  return (
    <section className="bg-white py-8 md:py-16 px-4 md:px-8 lg:px-30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
        {/* Course cards grid */}
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-3 items-start">
            <div className="card bg-white w-full shadow-sm">
              <figure>
                <img
                  className="w-full h-37 object-cover"
                  src="https://images.unsplash.com/photo-1583339793403-3d9b001b6008?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Shoes"
                  loading="lazy"
                />
              </figure>
              <div className="card-body h-full">
                <div className="flex justify-between items-center space-between">
                  {" "}
                  <h2 className="card-title text-lg text-black">HTML & CSS</h2>
                  <p className="text-right text-[#545BE8] text-lg font-extrabold">
                    $15
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-[#969696] font-extralight">
                    Build responsive websites with solid HTML and CSS
                    foundations.
                  </p>
                </div>
              </div>
            </div>
            <div className="card bg-white w-full  shadow-sm">
              <figure>
                <img
                  className="w-full h-37 object-cover"
                  src="https://images.unsplash.com/photo-1513031300226-c8fb12de9ade?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Shoes"
                  loading="lazy"
                />
              </figure>
              <div className="card-body h-full">
                <div className="flex justify-between items-center space-between">
                  {" "}
                  <h2 className="card-title text-black">Photography</h2>
                  <p className="text-right text-[#545BE8] text-lg font-extrabold">
                    $19
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-[#969696] font-extralight">
                    Capture and edit stunning photos to tell powerful visual
                    stories.
                  </p>
                </div>
              </div>
            </div>
            <div className="card bg-white w-full shadow-sm">
              <figure>
                <img
                  className="w-full h-37 object-cover"
                  src="https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Shoes"
                  loading="lazy"
                />
              </figure>
              <div className="card-body h-full">
                <div className="flex justify-between items-center space-between">
                  {" "}
                  <h2 className="card-title text-black">JavaScript</h2>
                  <p className="text-right text-[#545BE8] text-lg font-extrabold">
                    $12
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-[#969696] font-extralight">
                    Create dynamic websites with essential JavaScript skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="card bg-white w-full shadow-sm">
              <figure>
                <img
                  className="w-full h-37 object-cover"
                  src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Shoes"
                  loading="lazy"
                />
              </figure>
              <div className="card-body h-full">
                <div className="flex justify-between items-center space-between">
                  {" "}
                  <h2 className="card-title text-black">Graphic Design</h2>
                  <p className="text-right text-[#545BE8] text-lg font-extrabold">
                    $20
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-[#969696] font-extralight">
                    Design eye-catching visuals with core design principles and
                    tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-5 order-1 lg:order-2 text-center lg:text-left">
          <p className="text-[#545BE8] font-light">AVAILABLE FOR YOU</p>
          <h1 className="text-[#141E32] text-3xl font-bold">
            Available Courses
          </h1>
          <p className="text-[#969696] font-extralight">
            Browse a variety of courses designed to match your goals, skills,
            and learning pace.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link className="btn btn-primary w-full sm:w-30" href="/courses">
              See all
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
