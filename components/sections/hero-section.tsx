import React from "react";
import NavbarSection from "./navbar-section";
import MouseSection from "./mouse-section";

const HeroSection = () => {
  return (
    <section className="min-h-screen w-screen">
      <MouseSection />
      <NavbarSection />
    </section>
  );
};

export default HeroSection;
