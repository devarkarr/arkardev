import React from "react";
import NavbarSection from "./navbar-section";
import MouseSection from "./mouse-section";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="min-h-screen w-screen">
      <MouseSection />
      <NavbarSection />
    </section>
  );
};

export default HeroSection;
