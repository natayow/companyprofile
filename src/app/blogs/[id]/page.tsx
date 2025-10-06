"use client";
import axios from "axios";
import { BlogData, BlogResponse } from "@/types/blog";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogDetail() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const [blog, setBlog] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) {
        console.error("No blog ID provided");
        setLoading(false);
        return;
      }

      console.log("Fetching blog with ID:", id);

      try {
        const response = await axios.get(
          `http://localhost:3000/api/blogs/${id}`
        );

        console.log("API Response:", response.data);

        if (!response.data.data) {
          throw new Error("Blog not found in response");
        }

        setBlog(response.data.data);
      } catch (error) {
        const err = error as {
          message: string;
          response?: { data?: any; status?: number };
        };
        console.error("Error fetching blog:", {
          message: err.message,
          response: err.response?.data,
          details: err.response?.data?.details,
          status: err.response?.status,
          error: err,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F7F7F7] pt-[72px] flex items-center justify-center">
        <div className="text-xl text-[#545BE8]">Loading...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#F7F7F7] pt-[72px] flex items-center justify-center">
        <div className="text-xl text-red-500">Blog not found</div>
      </div>
    );
  }

  return (
    <main className="bg-[#F7F7F7] pt-[72px] min-h-screen">
      <div className="container mx-auto px-4 md:px-12 lg:px-24 xl:px-44 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <img
            src={blog.imgurl}
            alt={blog.title}
            className="w-full h-[300px] md:h-[400px] object-cover rounded-xl mb-6"
          />
          <div className="flex justify-between items-center mb-4">
            <p className="text-[#969696]">{blog.author}</p>
            <p className="text-[#969696]">
              {new Date(blog.blogdate).toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#545BE8] mb-4">
            {blog.title}
          </h1>
          <p className="text-gray-700 mb-4">{blog.summary}</p>
          <div className="prose max-w-none">
            <div
              dangerouslySetInnerHTML={{ __html: blog.body }}
              className="text-gray-700 leading-relaxed"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
