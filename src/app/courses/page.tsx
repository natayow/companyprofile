import React from "react";

export default function Courses() {
  return (
    <main className="bg-white pt-[72px]">
      <div className="bg-linear-180 from-[#545BE8] to-[#272DB0] text-white py-8 md:py-16 px-4 md:px-8 lg:px-44 flex flex-col gap-2 items-center justify-center mb-6 md:mb-9">
        <h1 className="text-white text-2xl md:text-3xl font-bold">Courses</h1>
        <p className="text-[#F0C932]">Home / Courses</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full items-start pb-8 md:pb-16 pt-6 gap-4 md:gap-6 px-4 md:px-12 lg:px-24 xl:px-44">
        <div className="card bg-white w-full shadow-sm hover:shadow-md transition-shadow">
          <figure>
            <img
              className="w-full h-40 sm:h-48 object-cover"
              src="https://images.unsplash.com/photo-1583339793403-3d9b001b6008?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="HTML & CSS course thumbnail"
              loading="lazy"
            />
          </figure>
          <div className="card-body p-4 md:p-6">
            <div className="flex justify-between items-center">
              <h2 className="card-title text-base md:text-lg text-black">
                HTML & CSS
              </h2>
              <p className="text-right text-[#545BE8] text-base md:text-lg font-extrabold">
                $15
              </p>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-[#969696] font-extralight text-sm md:text-base">
                Build responsive websites with solid HTML and CSS foundations.
              </p>
            </div>
            <button className="btn btn-primary w-full mt-3">Buy Now</button>
          </div>
        </div>
        <div className="card bg-white w-full shadow-sm hover:shadow-md transition-shadow">
          <figure>
            <img
              className="w-full h-40 sm:h-48 object-cover"
              src="https://images.unsplash.com/photo-1513031300226-c8fb12de9ade?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Photography course thumbnail"
              loading="lazy"
            />
          </figure>
          <div className="card-body p-4 md:p-6">
            <div className="flex justify-between items-center">
              <h2 className="card-title text-base md:text-lg text-black">
                Photography
              </h2>
              <p className="text-right text-[#545BE8] text-base md:text-lg font-extrabold">
                $19
              </p>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-[#969696] font-extralight text-sm md:text-base">
                Capture and edit stunning photos to tell powerful visual
                stories.
              </p>
            </div>
            <button className="btn btn-primary w-full mt-3">Buy Now</button>
          </div>
        </div>
        <div className="card bg-white w-full shadow-sm hover:shadow-md transition-shadow">
          <figure>
            <img
              className="w-full h-40 sm:h-48 object-cover"
              src="https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="JavaScript course thumbnail"
              loading="lazy"
            />
          </figure>
          <div className="card-body p-4 md:p-6">
            <div className="flex justify-between items-center">
              <h2 className="card-title text-base md:text-lg text-black">
                JavaScript
              </h2>
              <p className="text-right text-[#545BE8] text-base md:text-lg font-extrabold">
                $12
              </p>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-[#969696] font-extralight text-sm md:text-base">
                Create interactive websites with essential JavaScript skills.
              </p>
            </div>
            <button className="btn btn-primary w-full mt-3">Buy Now</button>
          </div>
        </div>
        <div className="card bg-white w-full shadow-sm hover:shadow-md transition-shadow">
          <figure>
            <img
              className="w-full h-40 sm:h-48 object-cover"
              src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Design course thumbnail"
              loading="lazy"
            />
          </figure>
          <div className="card-body p-4 md:p-6">
            <div className="flex justify-between items-center">
              <h2 className="card-title text-base md:text-lg text-black">
                Design
              </h2>
              <p className="text-right text-[#545BE8] text-base md:text-lg font-extrabold">
                $20
              </p>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-[#969696] font-extralight text-sm md:text-base">
                Design eye-catching visuals with core design principles and
                tools.
              </p>
            </div>
            <button className="btn btn-primary w-full mt-3">Buy Now</button>
          </div>
        </div>
      </div>
    </main>
  );
}
