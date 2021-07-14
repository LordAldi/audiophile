import React from "react";
import IconCart from "../../assets/shared/desktop/icon-cart.svg";
import Logo from "../../assets/shared/desktop/logo.svg";
import IconHamburger from "../../assets/shared/tablet/icon-hamburger.svg";
const Navbar = () => {
  const navItem = ["Home", "Headphones", "Speakers", "Earphones"];
  return (
    <div className="contain fixed top-0 w-full h-22.5  bg-black flex items-center justify-between z-100">
      <IconHamburger className="flex-none xl:hidden" />
      <Logo className="md:flex-grow md:ml-10 xl:ml-0 xl:flex-none cursor-pointer" />

      <ul className="hidden xl:flex text-white">
        {navItem.map((item, i) => (
          <li key={i} className="mr-8 cursor-pointer hover:text-primary">
            {item}
          </li>
        ))}
      </ul>

      <IconCart className="flex-none" />
    </div>
  );
};

export default Navbar;
