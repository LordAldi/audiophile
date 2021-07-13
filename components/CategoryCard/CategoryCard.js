import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";
const ProductCard = ({ name, image }) => {
  return (
    <div className="h-56 relative ">
      <div className="absolute right-0 left-0 -top-12 flex justify-center">
        <Image src={image} className="max-w-0" />
      </div>

      <div className=" bottom-0 -z-10 w-full h-40 bg-gray flex flex-col justify-end items-center">
        <Typography variant="h6" className="z-10">
          {name}
        </Typography>
        <Button variant="shop" icon classname="z-10">
          SHOP
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
