import React from "react";
import MouseSection from "./mouse-section";
import HeroContentSection from "./hero-content-section";
import HeroBackgroundSection from "./hero-background-section";

const HeroSection = () => {
  return (
    <section className="min-h-screen w-screen relative overflow-hidden">
      <MouseSection />
      <HeroContentSection />
      <HeroBackgroundSection />
    </section>
  );
};

export default HeroSection;
