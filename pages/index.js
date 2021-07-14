import Head from "next/head";
import Image from "next/image";
import HeroSection from "../components/HeroSection/HeroSection";
import CategoryCardsSection from "../components/CategoryCardsSection/CategoryCardsSection";
import Typography from "../components/Typography/Typography";
import Button from "../components/Button/Button";
import zx9 from "../assets/home/mobile/image-speaker-zx9.png";
import zx7 from "../assets/home/mobile/image-speaker-zx7.jpg";
import zx7t from "../assets/home/tablet/image-speaker-zx7.jpg";
import zx7d from "../assets/home/desktop/image-speaker-zx7.jpg";
import yx1 from "../assets/home/mobile/image-earphones-yx1.jpg";
import yx1t from "../assets/home/tablet/image-earphones-yx1.jpg";
import yx1d from "../assets/home/desktop/image-earphones-yx1.jpg";
import Circle from "../assets/home/desktop/Group4.png";
export default function Home() {
  return (
    <main>
      <Head>
        <title>Audiophile | Home</title>
      </Head>
      <HeroSection />
      <CategoryCardsSection />
      <section className="contain relative">
        <div className="bg-primary rounded-lg grid grid-cols-1 xl:grid-cols-2	items-center px-6 py-14 xl:px-24">
          <div className="w-full h-full">
            <div className="relative w-full flex justify-center">
              <div className="w-40 z-10 xl:w-full xl:absolute top-7">
                <Image src={zx9} alt="ZX9" />
              </div>
              <div className="absolute w-full z-0 -top-12 left-0 right-0 flex justify-center opacity-25">
                <Image src={Circle} alt="" />
              </div>
            </div>
          </div>

          <div className="text-white text-center xl:text-left xl:max-w-xs mt-16">
            <Typography variant="h1">
              ZX9 <br />
              speaker
            </Typography>
            <Typography variant="body" className="opacity-75 my-6">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </Typography>
            <Button variant="secondary">SEE PRODUCT</Button>
          </div>
        </div>
      </section>
      <section className="contain relative rounded-lg mt-6 md:mt-8 ">
        <div className="w-full h-full overflow-hidden md:hidden">
          <Image src={zx7} alt="ZX7" className="overflow-hidden rounded-lg" />
        </div>
        <div className="w-full h-full overflow-hidden hidden md:block xl:hidden object-cover">
          <Image
            src={zx7t}
            alt="ZX7"
            layout="responsive"
            objectFit="cover"
            className="overflow-hidden rounded-lg hidden w-44"
          />
        </div>
        <div className="w-full h-full overflow-hidden hidden xl:block object-cover">
          <Image
            src={zx7d}
            alt="ZX7"
            layout="responsive"
            objectFit="cover"
            className="overflow-hidden rounded-lg hidden w-44"
          />
        </div>
        <div className="absolute top-0 bottom-0 flex pl-6 md:pl-16 xl:pl-24 items-center">
          <div className="">
            <Typography variant="h4" className="mb-8">
              ZX7 SPEAKER
            </Typography>
            <Button variant="outline">SEE PRODUCT</Button>
          </div>
        </div>
      </section>
      <section className="contain gap-6 md:gap-3 grid grid-cols-1 md:grid-cols-2 mt-6 md:mt-8">
        <div className="md:hidden">
          <Image
            src={yx1}
            alt="yx1"
            className="rounded-lg"
            layout="responsive"
          />
        </div>
        <div className="hidden md:block xl:hidden">
          <Image
            src={yx1t}
            alt="yx1"
            className="rounded-lg"
            layout="responsive"
          />
        </div>
        <div className="hidden xl:block ">
          <Image
            src={yx1d}
            alt="yx1"
            className="rounded-lg"
            layout="responsive"
          />
        </div>
        <div className=" bg-gray rounded-lg py-14 pl-6 md:pl-11 xl:pl-24 md:flex md:flex-col md:justify-center md:py-0 w-full">
          <Typography variant="h4" className="mb-8">
            YX1 EARPHONES
          </Typography>
          <div>
            <Button variant="outline">SEE PRODUCT</Button>
          </div>
        </div>
      </section>
      <section>anfeufha</section>
    </main>
  );
}
