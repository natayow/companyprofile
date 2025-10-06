"use client";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { blogSchema } from "./schemas/blogschema";
import useAuthStore from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

export default function CreateBlog() {
  const router = useRouter();
  const { checkSession, isLoggedIn, name } = useAuthStore();

  useEffect(() => {
    const validateSession = async () => {
      try {
        if (!isLoggedIn) {
          const isValid = await checkSession();
          if (!isValid) {
            router.replace("/login");
            return;
          }
        }
      } catch (error) {
        console.error("Session validation error:", error);
        router.replace("/login");
      }
    };

    validateSession();
  }, [isLoggedIn, checkSession, router]);

  const formik = useFormik({
    initialValues: {
      title: "",
      imgurl: "",
      author: "",
      blogdate: "",
      summary: "",
      body: "",
    },
    onSubmit: async (values, { resetForm }) => {
      if (!isLoggedIn) {
        router.push("/login");
        return;
      }

      try {
        await axios.post(
          "https://kindlytime-us.backendless.app/api/data/Blogs",
          {
            title: values?.title,
            imgurl: values?.imgurl,
            author: name || values?.author,
            blogdate: values?.blogdate,
            summary: values?.summary,
            body: values?.body,
          }
        );
        alert("Blog created successfully!");
        resetForm();
        router.push("/blogs");
      } catch (error) {
        alert("Failed to create blog. Please try again.");
        console.error("Blog creation error:", error);
      }
    },
    validationSchema: blogSchema,
  });
  return (
    <main className="bg-white pt-[72px]">
      <div className="bg-linear-180 from-[#545BE8] to-[#272DB0] text-white py-8 md:py-16 px-4 md:px-12 lg:px-24 xl:px-44 flex flex-col gap-2 items-center justify-center">
        <h1 className="text-white text-2xl md:text-3xl font-bold">
          Create Blog
        </h1>
        <p className="text-[#F0C932]">Home / Create Blog</p>
      </div>
      <div className="flex justify-center py-8 md:py-12 px-4 sm:px-6 md:px-10 bg-white">
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-3xl">
          <form
            onSubmit={formik?.handleSubmit}
            className="w-full space-y-6"
            action=""
          >
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend text-black text-sm font-medium mb-2">
                Blog title
              </legend>
              <input
                type="text"
                className="input w-full p-3 bg-white border border-gray-300 rounded-lg text-gray-500 focus:border-[#545BE8] focus:ring-1 focus:ring-[#545BE8] transition-all"
                placeholder="Type here"
                name="title"
                onChange={formik?.handleChange}
                value={formik?.values?.title}
              />
              {formik?.errors?.title && formik?.touched?.title && (
                <p id="feedback" className="text-red-500 text-sm mt-1">
                  {formik?.errors?.title}
                </p>
              )}
            </fieldset>
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend text-black text-sm font-medium mb-2">
                Image URL
              </legend>
              <input
                type="text"
                className="input w-full p-3 bg-white border border-gray-300 rounded-lg text-gray-500 focus:border-[#545BE8] focus:ring-1 focus:ring-[#545BE8] transition-all"
                placeholder="Type here"
                name="imgurl"
                onChange={formik?.handleChange}
                value={formik?.values?.imgurl}
              />
              {formik?.errors?.imgurl && formik?.touched?.imgurl && (
                <p id="feedback" className="text-red-500 text-sm mt-1">
                  {formik?.errors?.imgurl}
                </p>
              )}
            </fieldset>

            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend text-black text-sm font-medium mb-2">
                Blog Date Created
              </legend>
              <input
                type="date"
                className="input w-full p-3 bg-white border border-gray-300 rounded-lg text-gray-500 focus:border-[#545BE8] focus:ring-1 focus:ring-[#545BE8] transition-all"
                placeholder="Type here"
                name="blogdate"
                onChange={formik?.handleChange}
                value={formik?.values?.blogdate}
              />
              {formik?.errors?.blogdate && formik?.touched?.blogdate && (
                <p id="feedback" className="text-red-500 text-sm mt-1">
                  {formik?.errors?.blogdate}
                </p>
              )}
            </fieldset>
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend text-black text-sm font-medium mb-2">
                Summary
              </legend>
              <input
                type="text"
                className="input w-full p-3 bg-white border border-gray-300 rounded-lg text-gray-500 focus:border-[#545BE8] focus:ring-1 focus:ring-[#545BE8] transition-all"
                placeholder="Type here"
                name="summary"
                onChange={formik?.handleChange}
                value={formik?.values?.summary}
              />
              {formik?.errors?.summary && formik?.touched?.summary && (
                <p id="feedback" className="text-red-500 text-sm mt-1">
                  {formik?.errors?.summary}
                </p>
              )}
            </fieldset>
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend text-black text-sm font-medium mb-2">
                Content Body
              </legend>
              <textarea
                className="input w-full p-3 h-32 md:h-48 bg-white border border-gray-300 rounded-lg text-gray-500 focus:border-[#545BE8] focus:ring-1 focus:ring-[#545BE8] transition-all resize-y"
                placeholder="Type here"
                name="body"
                onChange={formik?.handleChange}
                value={formik?.values?.body}
              ></textarea>
              {formik?.errors?.body && formik?.touched?.body && (
                <p id="feedback" className="text-red-500 text-sm mt-1">
                  {formik?.errors?.body}
                </p>
              )}
            </fieldset>
            <button className="w-full sm:w-auto px-6 py-3 bg-[#545BE8] text-white font-medium rounded-lg hover:bg-[#444bd4] transition-all focus:ring-2 focus:ring-[#545BE8] focus:ring-offset-2">
              Create Blog
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
