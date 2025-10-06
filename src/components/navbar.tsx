"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsPerson, BsSearch, BsHeart, BsCart } from "react-icons/bs";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import useAuthStore from "@/store/useAuthStore";

export default function Navbar() {
  const { name, isLoggedIn, clearAuthStore } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      clearAuthStore();
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
      // Still clear the local store and redirect even if the API call fails
      clearAuthStore();
      window.location.href = "/";
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="relative bg-white py-[15px] px-4 md:px-[65px]">
        <div className="flex items-center justify-between">
          <div style={{ position: "relative", width: "140px", height: "40px" }}>
            <Image
              src={"/static/Group 1970.png"}
              alt="Image"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-md" onClick={toggleMenu}>
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center gap-14 items-center">
            <Link
              href="/"
              className="text-black text-sm font-light cursor-pointer hover:font-bold"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="text-black text-sm font-light cursor-pointer hover:font-bold"
            >
              Course
            </Link>
            <Link
              href="/about"
              className="text-black text-sm font-light cursor-pointer hover:font-bold"
            >
              About us
            </Link>
            <Link
              href="/blogs"
              className="text-black text-sm font-light cursor-pointer hover:font-bold"
            >
              Blog
            </Link>
          </div>

          <div className="hidden md:flex gap-2 items-center">
            {isLoggedIn ? (
              <>
                <Link
                  href="/createblog"
                  className="btn btn-outline btn-primary"
                >
                  Create Blog
                </Link>
                <button onClick={handleLogout} className="btn btn-primary">
                  Logout
                </button>
                <span className="text-sm font-medium text-gray-700">
                  Welcome, {name}
                </span>
              </>
            ) : (
              <>
                <Link href="/login" className="btn btn-outline btn-primary">
                  Login
                </Link>
                <Link href="/register" className="btn btn-primary">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-full left-0 w-full bg-white shadow-md`}
        >
          <div className="flex flex-col py-4 px-4 space-y-4">
            <Link
              href="/"
              className="text-black text-sm font-light cursor-pointer hover:font-bold"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="text-black text-sm font-light cursor-pointer hover:font-bold"
            >
              Course
            </Link>
            <Link
              href="/about"
              className="text-black text-sm font-light cursor-pointer hover:font-bold"
            >
              About us
            </Link>
            <Link
              href="/blogs"
              className="text-black text-sm font-light cursor-pointer hover:font-bold"
            >
              Blog
            </Link>
            <div className="flex flex-col gap-2">
              {isLoggedIn ? (
                <>
                  <Link
                    href="/createblog"
                    className="btn btn-outline btn-primary w-full"
                  >
                    Create Blog
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="btn btn-primary w-full"
                  >
                    Logout
                  </button>
                  <span className="text-sm font-medium text-gray-700 text-center">
                    Welcome, {name}
                  </span>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="btn btn-outline btn-primary w-full"
                  >
                    Login
                  </Link>
                  <Link href="/register" className="btn btn-primary w-full">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
