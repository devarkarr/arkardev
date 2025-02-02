import React from "react";

const NavbarSection = () => {
  return (
    <nav className=" fixed top-0 w-full backdrop-blur-sm z-40 bg-background">
      <div className="h-16 max-w-5xl mx-auto flex items-center max-sm:px-4 ">
        <h1 className="text-xl font-medium tracking-wide text-white">
          Arkar<span className=" text-primary">.dev</span>
        </h1>
      </div>
    </nav>
  );
};

export default NavbarSection;
