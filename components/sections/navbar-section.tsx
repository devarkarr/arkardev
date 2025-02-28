const NavbarSection = () => {
  return (
    <nav className=" fixed top-0 w-full backdrop-blur-sm z-40 bg-background">
      <div className="h-16 max-w-6xl mx-auto flex justify-between items-center max-sm:px-4 ">
        <h1 className="text-xl cursor-pointer font-medium tracking-wide text-white">
          Arkar<span className=" text-primary">.dev</span>
        </h1>
      </div>
    </nav>
  );
};

export default NavbarSection;
