import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button/Button";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import Typography from "../components/Typography/Typography";
import Hero from "../Utils/HeroImg";
import earphones from "../assets/shared/desktop/image-earphones.png";
import headphones from "../assets/shared/desktop/image-headphones.png";
import speakers from "../assets/shared/desktop/image-speakers.png";
export default function Home() {
  return (
    <main>
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
      <section className="mt-20">
        <div className="contain grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-12">
          <CategoryCard name="HEADPHONES" image={headphones} />
          <CategoryCard name="SPEAKERS" image={speakers} />
          <CategoryCard name="EARPHONES" image={earphones} />
        </div>
      </section>
    </main>
  );
}
