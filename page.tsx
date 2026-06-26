"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyUs from "@/components/sections/WhyUs";
import Footer from "@/components/sections/Footer";
import MarqueeTicker from "@/components/motion/MarqueeTicker";

const Portfolio = dynamic(() => import("@/components/sections/Portfolio"), { ssr: false });
const Process   = dynamic(() => import("@/components/sections/Process"),   { ssr: false });
const CtaContact = dynamic(() => import("@/components/sections/CtaContact"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/motion/CustomCursor"), { ssr: false });
const SmoothScroll = dynamic(() => import("@/components/motion/SmoothScroll"), { ssr: false });
const ScrollOrchestrator = dynamic(() => import("@/components/motion/ScrollOrchestrator"), { ssr: false });

export default function Home() {
  return (
    <>
      <CustomCursor />
      <SmoothScroll />
      <ScrollOrchestrator />
      <Navbar />
      <main>
        <Hero />
        <MarqueeTicker />
        <Portfolio />
        <About />
        <Process />
        <WhyUs />
        <CtaContact />
      </main>
      <Footer />
    </>
  );
}
