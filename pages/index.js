import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button/Button";
import Typography from "../components/Typography/Typography";
import headerMobile from "../assets/home/mobile/image-header.jpg";
export default function Home() {
  return (
    <main>
      <div className="relative">
        <div className="image-bg">
          <Image src={headerMobile} layout="responsive" />
        </div>
        <div className="absolute top-0 bottom-0 text-center w-full  text-white px-6 z-50 flex items-center justify-center">
          <div className="mt-20">
            <Typography variant="overline" className="">
              New Product
            </Typography>
            <Typography variant="h1" className="mt-4 mb-6">
              XX99 Mark II HeadphoneS
            </Typography>
            <Typography variant="body" className="text-gray mb-6">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </Typography>
            <Button classname="w-auto">SEE PRODUCT</Button>
          </div>
        </div>
      </div>
      <div>neuafuf</div>
    </main>
  );
}
