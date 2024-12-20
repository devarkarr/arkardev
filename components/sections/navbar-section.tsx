import React from "react";


const NavbarSection = () => {
  return (
    <nav className=" w-full backdrop-blur-sm">
      <div className="h-12 max-w-5xl mx-auto flex items-center max-sm:px-4 ">
        <h1 className="text-xl font-medium tracking-wide text-background dark:text-white">
          Arkar<span className=" text-primary">.dev</span>
        </h1>
      </div>
    </nav>
  );
};

export default NavbarSection;
