"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface FetchError extends Error {
  name: string;
  message: string;
}

type RUUser = {
  name: { first: string; last: string };
  picture: { large: string };
  location: { city: string; country: string };
  login: { uuid: string };
};

const ROLES = [
  "CEO",
  "CTO",
  "Head of Design",
  "Lead Instructor",
  "Product Manager",
  "Community Manager",
  "Curriculum Lead",
  "Marketing Lead",
];

export default function TeamSection({ count = 6 }: { count?: number }) {
  const [users, setUsers] = useState<RUUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setErr(null);
        const res = await fetch(
          `https://randomuser.me/api/?results=${count}&inc=name,picture,location,login&nat=us,gb,au,ca`,
          { cache: "no-store", signal: controller.signal }
        );
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const data = await res.json();
        setUsers(data.results as RUUser[]);
      } catch (e: unknown) {
        const error = e as FetchError;
        if (error.name !== "AbortError")
          setErr(error.message || "Failed to load team.");
      } finally {
        setLoading(false);
      }
    })();
    return () => controller.abort();
  }, [count]);

  if (err) {
    return (
      <div className="px-4 md:px-8 lg:px-44 py-4 md:py-7">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
          Couldn’t load the team right now. Please refresh to try again.
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8 lg:px-44 py-4 md:py-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 justify-center max-w-7xl mx-auto">
        {loading
          ? Array.from({ length: count }).map((_, idx) => (
              <div
                key={idx}
                className="animate-pulse flex flex-col items-center"
              >
                <div className="w-full h-48 sm:h-60 lg:h-72 rounded-lg bg-gray-200" />
                <div className="h-4 w-1/2 mt-4 md:mt-5 rounded bg-gray-200" />
                <div className="h-3 w-1/3 mt-2 rounded bg-gray-200" />
                <div className="h-3 w-full mt-3 rounded bg-gray-100" />
              </div>
            ))
          : users.map((u, i) => {
              const name = `${u.name.first} ${u.name.last}`;
              const role = ROLES[i % ROLES.length];
              const bio = `${name} is a ${role} based in ${u.location.city}, ${u.location.country}. Passionate about project-based learning and helping students level up their career-ready skills.`;
              return (
                <div
                  key={u.login.uuid}
                  className="flex flex-col items-center group"
                >
                  <div className="relative w-full h-48 sm:h-60 lg:h-72">
                    <Image
                      src={u.picture.large}
                      alt={name}
                      fill
                      unoptimized
                      className="rounded-lg object-cover shadow-sm group-hover:shadow-md transition-shadow duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={i < 2}
                    />
                  </div>
                  <h1 className="text-[#545BE8] mt-4 md:mt-5 font-semibold text-base md:text-lg">
                    {name}
                  </h1>
                  <p className="text-black/80 font-light text-sm md:text-base">
                    {role}
                  </p>
                  <p className="text-[#4b5563] text-xs md:text-sm mt-2 text-center px-2 md:px-4">
                    {bio}
                  </p>
                </div>
              );
            })}
      </div>
    </div>
  );
}
