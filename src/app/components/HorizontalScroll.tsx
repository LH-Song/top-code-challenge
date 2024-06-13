"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll: React.FC = () => {
  const racesRef = useRef<HTMLDivElement | null>(null);
  const racesWrapperRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const races = racesRef.current!;
    const racesWrapper = racesWrapperRef.current!;

    const getScrollAmount = () => {
      const racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    };

    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: racesWrapper,
      start: "top 25%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: true,
    });
  }, []);

  return (
    <div className="bg-lime-100">
      <div className="bg-slate-300">
        <h2>HERO</h2>
      </div>
      <div ref={racesWrapperRef}>
        <div className="flex w-fit flex-nowrap races" ref={racesRef}>
          <h2 className="w-screen bg-black">FEATURE ONE</h2>
          <h2 className="w-screen bg-slate-300">FEATURE ONE</h2>
          <h2 className="w-screen bg-black">FEATURE ONE</h2>
          <h2 className="w-screen bg-slate-300">FEATURE ONE</h2>
          <h2 className="w-screen bg-black">FEATURE ONE</h2>
          <h2 className="w-screen bg-slate-300">FEATURE ONE</h2>
        </div>
      </div>
      <div className="h-screen bg-red-300 text-end">end</div>
    </div>
  );
};

export default HorizontalScroll;
