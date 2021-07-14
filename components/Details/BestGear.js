import React from "react";
import Image from "next/image";
import Typography from "../Typography/Typography";
import bestGear from "../../assets/shared/mobile/image-best-gear.jpg";
import bestGearT from "../../assets/shared/tablet/image-best-gear.jpg";
import bestGearD from "../../assets/shared/desktop/image-best-gear.jpg";
const BestGear = () => {
  return (
    <section className="contain mt-32 flex flex-col gap-y-10 xl:flex-row-reverse">
      <div className="md:hidden w-full">
        <Image
          src={bestGear}
          alt="BestGear"
          layout="responsive"
          className="rounded-lg"
        />
      </div>
      <div className="hidden md:block xl:hidden">
        <Image
          src={bestGearT}
          alt="BestGear"
          layout="responsive"
          className="rounded-lg"
        />
      </div>
      <div className="hidden xl:block w-full">
        <Image
          src={bestGearD}
          alt="BestGear"
          layout="responsive"
          className="rounded-lg"
        />
      </div>
      <div className="text-center  w-full flex flex-col items-center xl:items-start xl:text-left xl:justify-center">
        <div className="max-w-xl xl:max-w-md">
          <Typography variant="h2">
            Bringing you the <span className="text-primary">best</span> audio
            gear
          </Typography>
          <Typography variant="body" className="opacity-50 mt-8">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default BestGear;
