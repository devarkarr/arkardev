"use client";
import dynamic from "next/dynamic";
import coder from "../../public/images/coder.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});



const HeroContentSection = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".name", {
      opacity: 1,
      duration: 1,
      delay: 2.3,
      ease: "power1.inOut",
      stagger: {
        amount: 0.5,
      },
    });
    tl.to(
      ".coder",
      {
        y: 0,
        opacity: 1,
      },
      "-=0.5"
    );
    tl.to(
      ".position",
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        stagger: {
          from: "center",
          amount: 0.8,
        },
      },
      "-=0.5"
    );
    tl.to(
      ".about",
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
      "-=0.5"
    );
  });

  return (
    <section className="max-w-5xl h-full mx-auto flex items-center justify-center max-sm:px-4">
      <div className="coder opacity-0 md:size-[55%] lg:size-1/2 relative z-[900] translate-y-24">
        <Lottie loop animationData={coder} />
      </div>
      <div className="absolute max-sm:top-[21%] top-[32%] z-[888] w-full md:w-1/2 mx-auto  text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl  font-bold ">
          {"Arkarlin".split("").map((letter, index) => (
            <span key={index} className="name opacity-0 ">
              {letter}
            </span>
          ))}
        </h1>
      </div>
      <div className="absolute w-[85%] md:w-1/2 mx-auto max-sm:top-[41%] top-[65.5%] z-[908]  text-center">
        <h2 className="text-xl md:text-3xl  font-medium ">
          {"Full Stack Developer".split("").map((word, index) => (
            <span className="position  opacity-0 translate-y-10" key={index}>
              {word}
            </span>
          ))}
        </h2>

        <p className="text-sm mt-3 font-jost about opacity-0 translate-y-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos impedit
          quae, ipsum quisquam, neque perspiciatis in quis dolore mollitia
          doloremque eligendi sapiente. Delectus, eligendi necessitatibus libero
          doloremque maiores ratione accusantium?
        </p>
      </div>
    </section>
  );
};

export default HeroContentSection;
