"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Loader = () => {
  useGSAP(() => {
    const tl = gsap.timeline({});
    tl.to(".title", {
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      stagger: {
        amount: 0.7,
      },
    });
    tl.to(".title", {
      opacity: 0,
      stagger: {
        amount: 0.6,
      },
    });
    tl.to(
      ".loader",
      {
        height: 0,
        stagger: {
          amount: 0.5,
        },
        ease: "power4.inOut",
      },
      "-=0.5"
    );
  });

  return (
    <>
      <div className="  fixed h-screen z-[10000] w-screen flex">
        {[...new Array(11)].map((_, index) => (
          <div key={index} className="loader w-full h-full  bg-[#081427]" />
        ))}
        <div className=" absolute w-full h-full top-0 z-[9999] flex items-center justify-center">
          <h1 className=" text-4xl md:text-5xl lg:text-6xl  font-semibold ">
            {"Arkar".split("").map((letter, index) => (
              <span key={index} className="title opacity-0">
                {letter}
              </span>
            ))}
            {".dev".split("").map((letter, index) => (
              <span key={index} className="title text-primary opacity-0">
                {letter}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </>
  );
};

export default Loader;
