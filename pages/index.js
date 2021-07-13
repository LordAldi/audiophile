import Head from "next/head";
import HeroSection from "../components/HeroSection/HeroSection";
import CategoryCardsSection from "../components/CategoryCardsSection/CategoryCardsSection";
export default function Home() {
  return (
    <main>
      <Head>
        <title>Audiophile | Home</title>
      </Head>
      <HeroSection />
      <CategoryCardsSection />
    </main>
  );
}
