import React from "react";
import IconCart from "../../assets/shared/desktop/icon-cart.svg";
import Logo from "../../assets/shared/desktop/logo.svg";
import IconHamburger from "../../assets/shared/tablet/icon-hamburger.svg";
const Navbar = () => {
  const navItem = ["Home", "Headphones", "Speakers", "Earphones"];
  return (
    <div className="w-full h-22.5 px-6 md:px-10 bg-black flex items-center justify-between ">
      <IconHamburger className="flex-none xl:hidden" />
      <Logo className="md:flex-grow md:ml-10 xl:ml-0 xl:flex-none cursor-pointer" />

      <ul className="hidden xl:flex text-white">
        {navItem.map((item) => (
          <li className="mr-8 cursor-pointer hover:text-primary">{item}</li>
        ))}
      </ul>

      <IconCart className="flex-none" />
    </div>
  );
};

export default Navbar;
