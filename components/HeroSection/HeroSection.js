import Image from "next/image";
import React from "react";
import Hero from "../../Utils/HeroImg";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="image-bg md:hidden">
        <Image src={Hero.heroMobile} layout="responsive" />
      </div>
      <div className="image-bg hidden md:block xl:hidden">
        <Image src={Hero.heroTablet} layout="responsive" />
      </div>
      <div className="image-bg hidden md:hidden xl:block">
        <Image src={Hero.heroDesktop} layout="responsive" />
      </div>
      <div className="absolute top-0 bottom-0 text-center xl:text-left w-full  text-white  z-50 flex items-center justify-center xl:justify-start contain">
        <div className=" mt-20 md:max-w-sm ">
          <Typography variant="overline" className="opacity-50">
            New Product
          </Typography>
          <Typography variant="h1" className="mt-4 mb-6">
            XX99 Mark II HeadphoneS
          </Typography>
          <Typography variant="body" className=" mb-6 md:px-2 opacity-75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Typography>
          <Button classname="w-auto">SEE PRODUCT</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
