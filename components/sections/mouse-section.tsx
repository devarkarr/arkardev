"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const MouseSection = () => {
  const cursor = useRef(null);
  useGSAP(() => {
    window.addEventListener("mousemove", (e) => {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        duration: 0.3,
      });
    });

    const hideCursor = () => {
      gsap.to(cursor.current, { opacity: 0 });
    };

    const showCursor = () => {
      gsap.to(cursor.current, { opacity: 1 });
    };

    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mousedown", hideCursor);
    document.addEventListener("mouseup", showCursor);
  });

  return (
    <div
      ref={cursor}
      className="hidden lg:block absolute top-0 left-0  w-5 h-5 border-2 rounded-full border-primary -mt-3 -ml-3"
    ></div>
  );
};

export default MouseSection;
