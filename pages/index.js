import Head from "next/head";
import Image from "next/image";
import HeroSection from "../components/HeroSection/HeroSection";
import CategoryCardsSection from "../components/CategoryCardsSection/CategoryCardsSection";
import Typography from "../components/Typography/Typography";
import Button from "../components/Button/Button";
import zx9 from "../assets/home/mobile/image-speaker-zx9.png";
import zx9d from "../assets/home/desktop/image-speaker-zx9.png";
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
    </main>
  );
}
