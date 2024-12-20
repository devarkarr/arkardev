import React from "react";
import NavbarSection from "./navbar-section";
import MouseSection from "./mouse-section";
import HeroContentSection from "./hero-content-section";

const HeroSection = () => {
  return (
    <section className="min-h-screen w-screen">
      <MouseSection />
      <NavbarSection />
      <HeroContentSection />
    </section>
  );
};

export default HeroSection;
