import React from "react";

type Props = {};

const NavbarSection = (props: Props) => {
  return (
    <nav className="backdrop-blur-sm">
      <div className="h-12 max-w-5xl mx-auto flex items-center ">
        <h1 className="text-xl font-medium tracking-wide">
          Arkar<span className=" text-primary">.dev</span>
        </h1>
      </div>
    </nav>
  );
};

export default NavbarSection;
