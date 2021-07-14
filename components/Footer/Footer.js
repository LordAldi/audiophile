import React from "react";
import Typography from "../Typography/Typography";
import Logo from "../../assets/shared/desktop/logo.svg";
import FbLogo from "../../assets/shared/desktop/icon-facebook.svg";
import TwLogo from "../../assets/shared/desktop/icon-twitter.svg";
import IgLogo from "../../assets/shared/desktop/icon-instagram.svg";
const Footer = () => {
  const navItem = ["Home", "Headphones", "Speakers", "Earphones"];
  return (
    <footer className="w-full bg-blackish contain text-white flex flex-col pt-20 mt-14 pb-9">
      <div className="flex flex-col items-center md:items-start">
        <Logo />
        <ul className="flex flex-col md:flex-row items-center text-white my-12">
          {navItem.map((item, i) => (
            <li
              key={i}
              className="mb-4 md:mb-0 md:mr-9 font-bold text-sm tracking-widest uppercase cursor-pointer hover:text-primary"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center md:text-left">
        <Typography variant="body" className="opacity-50">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </Typography>
      </div>
      <div className="text-center md:text-left flex flex-col md:flex-row items-center md:w-full md:justify-between">
        <Typography variant="body" className="opacity-50 my-12">
          Copyright 2021. All Rights Reserved
        </Typography>
        <div className="flex justify-center ">
          <FbLogo className="cursor-pointer" />
          <TwLogo className="mx-4 fill-current text-red-700 cursor-pointer" />
          <IgLogo className="cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
