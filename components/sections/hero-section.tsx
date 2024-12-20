import React from "react";
import MouseSection from "./mouse-section";
import HeroContentSection from "./hero-content-section";

const HeroSection = () => {
  return (
    <section className="min-h-screen w-screen relative">
      <MouseSection />
      <HeroContentSection />
    </section>
  );
};

export default HeroSection;
