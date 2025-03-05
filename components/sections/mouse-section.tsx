"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MouseSection = () => {
  useGSAP(() => {
    gsap.set("#cursor", { opacity: 0 });

    window.addEventListener("mousemove", (e) => {
      gsap.to("#cursor", {
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        duration: 0.3,
        stagger: 0.05,
      });
    });

    const hideCursor = () => {
      gsap.to("#cursor", { opacity: 0 });
    };

    const showCursor = () => {
      gsap.to("#cursor", { opacity: 1 });
    };

    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mousedown", hideCursor);
    document.addEventListener("mouseup", showCursor);
  });

  return (
    <>
      <div
        id="cursor"
        className="hidden lg:block absolute z-50   w-3 h-3 bg-primary rounded-full -mt-1 -ml-1 "
      ></div>
      <div
        id="cursor"
        className="hidden lg:block absolute z-50   w-7 h-7 border rounded-full border-primary -mt-3 -ml-3"
      ></div>
    </>
  );
};

export default MouseSection;
