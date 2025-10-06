import Benefits from "@/components/benefits";
import BestCourses from "@/components/bestCourses";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import People from "@/components/people";
import Testimonials from "@/components/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <People />
      <BestCourses />
      <Testimonials />
    </>
  );
}
