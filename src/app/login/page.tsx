"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import { loginSchema } from "./schemas/loginSchema";
import axios from "axios";
import { toast } from "react-toastify";
import useAuthStore from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

export default function Login() {
  const { setAuthStore, clearAuthStore, objectId } = useAuthStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLoginCount = async (email: string, password: string) => {
    try {
      setIsLoading(true);

      // Clear any previous form errors
      formik.setErrors({});

      const response = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });

      if (response.data?.success && response.data?.data) {
        setAuthStore({
          _email: response.data.data.email,
          _name: response.data.data.name || email.split("@")[0],
          _objectId: response.data.data.objectId,
        });
        toast.success("Login successful!", {
          position: "top-center",
          autoClose: 2000,
        });
        router.push("/");
      } else {
        throw new Error("Invalid response format from server");
      }
    } catch (error: unknown) {
      // Type guard for axios error
      if (axios.isAxiosError(error)) {
        const errorResponse = error.response?.data;

        // Log for debugging (include more context)
        console.error("Login error details:", {
          status: error.response?.status,
          data: errorResponse,
          message: error.message,
        });

        // Handle specific error cases
        if (errorResponse?.code === 3003) {
          // Invalid credentials
          const errorMessage = "Invalid email or password. Please try again.";
          formik.setErrors({
            email: errorMessage,
            password: errorMessage,
          });
          formik.setTouched({
            email: true,
            password: true,
          });
          toast.error(errorMessage, {
            position: "top-center",
            autoClose: 3000,
          });
        } else if (error.response?.status === 429) {
          // Rate limiting
          toast.error("Too many login attempts. Please try again later.", {
            position: "top-center",
            autoClose: 4000,
          });
        } else if (error.code === "ECONNABORTED" || !error.response) {
          // Network or timeout error
          toast.error(
            "Network error. Please check your connection and try again.",
            {
              position: "top-center",
              autoClose: 4000,
            }
          );
        } else {
          // Other API errors
          const errorMessage =
            errorResponse?.message ||
            error.response?.statusText ||
            "An unexpected error occurred. Please try again.";

          toast.error(errorMessage, {
            position: "top-center",
            autoClose: 3000,
          });
        }
      } else {
        // Non-axios errors (unlikely, but handle gracefully)
        console.error("Unexpected error during login:", error);
        toast.error("An unexpected error occurred. Please try again later.", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onSessionLoginAccount = async () => {
    try {
      const response = await axios.get("/api/auth/session-login");

      if (response.data?.user) {
        setAuthStore({
          _email: response.data.user.email,
          _name:
            response.data.user.name || response.data.user.email.split("@")[0],
          _objectId: response.data.user.objectId,
        });
        // Redirect to home if already logged in
        router.replace("/");
      }
    } catch (error) {
      console.error("Session check failed:", error);
      // Clear any stale auth data if session check fails
      clearAuthStore();
    }
  };

  // componentDidUpdate
  useEffect(() => {
    // Check for existing session when the page loads
    onSessionLoginAccount();
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await handleLoginCount(values.email, values.password);
        // No need to resetForm here as successful login redirects
      } catch (error) {
        // Error is already handled in handleLoginCount
        setSubmitting(false);
      }
    },

    validationSchema: loginSchema,
  });
  return (
    <main className="bg-white pt-[72px]">
      <div className="bg-linear-180 from-[#545BE8] to-[#272DB0] text-white py-8 md:py-16 px-4 md:px-12 lg:px-24 xl:px-44 flex flex-col gap-2 items-center justify-center">
        <h1 className="text-white text-2xl md:text-3xl font-bold">Login</h1>
        <p className="text-[#F0C932]">Home / Login</p>
      </div>
      <div className="flex justify-center py-8 md:py-12 px-4 sm:px-6 md:px-10 bg-white">
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-xl">
          <h1 className="text-black text-lg md:text-xl font-bold mb-6">
            Login Account
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
                <p id="feedback" className="text-red-500 text-sm mt-1">
                  {formik?.errors?.password}
                </p>
              )}
            </fieldset>
            <button
              type="submit"
              disabled={isLoading || !formik.isValid || !formik.dirty}
              className="w-full sm:w-auto px-6 py-3 mt-6 bg-[#545BE8] text-white font-medium rounded-lg hover:bg-[#444bd4] transition-all focus:ring-2 focus:ring-[#545BE8] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Logging in..." : "Login Account"}
            </button>
            {!formik.isValid &&
              formik.touched.email &&
              formik.touched.password && (
                <p className="text-red-500 text-sm mt-2">
                  Please fix the errors above before submitting
                </p>
              )}
          </form>
        </div>
      </div>
    </main>
  );
}
