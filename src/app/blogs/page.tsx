"use client";
import axios from "axios";
import Link from "next/link";
import { BlogData, BlogsResponse } from "@/types/blog";
import React, { useEffect, useMemo, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

export default function Blogs() {
  const [blogsData, setProductsData] = useState<BlogData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const getProductsData = async () => {
    const response = await axios.get<BlogsResponse>("/api/blogs");
    setProductsData(response.data.data);
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const filteredBlogs = useMemo(() => {
    const filtered = blogsData.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filtered.sort((a, b) => {
      const dateA = new Date(a.blogdate).getTime();
      const dateB = new Date(b.blogdate).getTime();
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });
  }, [blogsData, searchQuery, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <main className="bg-[#F7F7F7] pt-[72px]">
      {/* Hero */}
      <div className="bg-linear-180 from-[#545BE8] to-[#272DB0] text-white py-8 md:py-16 px-4 md:px-12 lg:px-24 xl:px-44 flex flex-col gap-2 items-center justify-center">
        <h1 className="text-white text-2xl md:text-3xl font-bold">Blogs</h1>
        <p className="text-[#F0C932]">Home / Blogs</p>
      </div>

      {/* Heading */}
      <h1 className="text-[#141E32] pt-8 md:pt-12 text-2xl md:text-3xl font-bold text-center">
        Latest Post
      </h1>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 mt-6 items-stretch sm:items-center px-4 md:px-12 lg:px-24 xl:px-44">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-gray-500 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#545BE8] pl-10"
          />
          <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#545BE8] text-xl" />
        </div>
        <button
          onClick={toggleSortOrder}
          className=" text-center lg:w-55 md:w-45 w-full justify-center px-4 py-2 bg-[#545BE8] text-white rounded-lg hover:bg-[#303af6] transition-all  flex items-center gap-2"
        >
          sort by date {sortOrder === "asc" ? "↑" : "↓"}
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8 px-4 md:px-12 lg:px-24 xl:px-44 pb-8 md:pb-12">
        {filteredBlogs.map((blog, index) => {
          return (
            <Link href={`/blogs/${blog.objectId}`} key={blog.objectId || index}>
              <article className="card bg-white w-full shadow-xl hover:shadow-2xl transition-shadow duration-200 cursor-pointer flex flex-col h-full min-h-[420px]">
                <figure className="px-3 pt-3">
                  <img
                    src={blog.imgurl}
                    className="rounded-xl object-cover h-48 sm:h-56 w-full"
                  />
                </figure>
                <div className="card-body p-4 flex flex-col flex-1">
                  <h2 className="text-base sm:text-lg font-bold text-[#545BE8] mt-1">
                    {blog.title}
                  </h2>
                  <p className="text-black/60 font-light mb-4 flex-1">
                    {blog.summary}
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <p className="text-[#969696] font-extralight">
                      {blog.author}
                    </p>
                    <p className="text-[#969696] font-extralight text-sm text-right">
                      {new Date(blog.blogdate).toLocaleDateString("id-ID", {
                        day: "2-digit",
                        month: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
      <Link
        className="cursor-pointer fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-[#545BE8] text-white font-medium text-center px-4 sm:px-5 py-2 sm:py-3 rounded-full shadow-lg hover:bg-[#303af6] transition-all"
        href={"/createblog"}
      >
        + Create Blog
      </Link>
    </main>
  );
}
