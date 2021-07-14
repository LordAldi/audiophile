import Head from "next/head";
import HeroSection from "../components/HeroSection/HeroSection";
import CategoryCardsSection from "../components/CategoryCardsSection/CategoryCardsSection";
import ProductHome from "../components/ProductHome/ProductHome";
import BestGear from "../components/Details/BestGear";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Audiophile | Home</title>
      </Head>
      <HeroSection />
      <CategoryCardsSection />
      <ProductHome />
      <BestGear />
    </main>
  );
}
