"use client";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { registerSchema } from "./schemas/registerschema";
import { toast } from "react-toastify";
import useAuthStore from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

export default function Register() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setAuthStore } = useAuthStore();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setIsLoading(true);
        // Register the user
        const registerResponse = await axios.post(
          "https://kindlytime-us.backendless.app/api/data/Users",
          {
            email: values.email,
            name: values.name,
            password: values.password,
          }
        );

        // If registration is successful, attempt to log in
        const loginResponse = await axios.post("/api/auth/login", {
          email: values.email,
          password: values.password,
        });

        if (loginResponse.data?.success && loginResponse.data?.data) {
          // Set auth store with user data
          setAuthStore({
            _email: loginResponse.data.data.email,
            _name: loginResponse.data.data.name || values.name,
            _objectId: loginResponse.data.data.objectId,
          });

          toast.success("Registration successful! You are now logged in.", {
            position: "top-center",
            autoClose: 2000,
          });

          // Redirect to home page
          router.push("/");
        }
      } catch (error) {
        console.error("Registration/Login error:", error);

        if (axios.isAxiosError(error)) {
          const errorMessage =
            error.response?.data?.message ||
            "Registration failed. Please try again.";
          toast.error(errorMessage, {
            position: "top-center",
            autoClose: 3000,
          });
        } else {
          toast.error("An unexpected error occurred. Please try again.", {
            position: "top-center",
            autoClose: 3000,
          });
        }
        setSubmitting(false);
      } finally {
        setIsLoading(false);
      }
    },
    validationSchema: registerSchema,
  });
  return (
    <main className="bg-white pt-[72px]">
      <div className="bg-linear-180 from-[#545BE8] to-[#272DB0] text-white py-8 md:py-16 px-4 md:px-12 lg:px-24 xl:px-44 flex flex-col gap-2 items-center justify-center">
        <h1 className="text-white text-2xl md:text-3xl font-bold">Register</h1>
        <p className="text-[#F0C932]">Home / Register</p>
      </div>
      <div className="flex justify-center py-8 md:py-12 px-4 sm:px-6 md:px-10 bg-white">
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-xl">
          <h1 className="text-black text-lg md:text-xl font-bold mb-6">
            Register Account
          </h1>
          <form
            onSubmit={formik?.handleSubmit}
            className="w-full space-y-6"
            action=""
          >
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend text-black text-sm font-medium mb-2">
                Input your email
              </legend>
              <input
                type="email"
                className="input w-full p-3 bg-white border border-gray-300 rounded-lg text-gray-500 focus:border-[#545BE8] focus:ring-1 focus:ring-[#545BE8] transition-all"
                placeholder="Type here"
                name="email"
                onChange={formik?.handleChange}
                value={formik?.values?.email}
              />
              {formik?.errors?.email && formik?.touched?.email && (
                <p id="feedback" className="text-red-500 text-sm mt-1">
                  {formik?.errors?.email}
                </p>
              )}
            </fieldset>
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend text-black text-sm font-medium mb-2">
                Input your name
              </legend>
              <input
                type="text"
                className="input w-full p-3 bg-white border border-gray-300 rounded-lg text-gray-500 focus:border-[#545BE8] focus:ring-1 focus:ring-[#545BE8] transition-all"
                placeholder="Type here"
                name="name"
                onChange={formik?.handleChange}
                value={formik?.values?.name}
              />
              {formik?.errors?.name && formik?.touched?.name && (
                <p id="feedback" className="text-red-500 text-sm mt-1">
                  {formik?.errors?.name}
                </p>
              )}
            </fieldset>
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend text-black text-sm font-medium mb-2">
                Password
              </legend>
              <input
                type="password"
                className="input w-full p-3 bg-white border border-gray-300 rounded-lg text-gray-500 focus:border-[#545BE8] focus:ring-1 focus:ring-[#545BE8] transition-all"
                placeholder="Type here"
                name="password"
                onChange={formik?.handleChange}
                value={formik?.values?.password}
              />
              {formik?.errors?.password && formik?.touched?.password && (
                <p id="feedback" className="text-red-500">
                  {formik?.errors?.password}
                </p>
              )}
            </fieldset>
            <button
              type="submit"
              disabled={isLoading || !formik.isValid || !formik.dirty}
              className="w-full sm:w-auto px-6 py-3 mt-6 bg-[#545BE8] text-white font-medium rounded-lg hover:bg-[#444bd4] transition-all focus:ring-2 focus:ring-[#545BE8] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Creating account..." : "Create Account"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
