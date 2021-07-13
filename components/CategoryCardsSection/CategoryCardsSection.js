import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import earphones from "../../assets/shared/desktop/image-earphones.png";
import headphones from "../../assets/shared/desktop/image-headphones.png";
import speakers from "../../assets/shared/desktop/image-speakers.png";
const CategoryCardsSection = () => {
  return (
    <section className="mt-20">
      <div className="contain grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-12">
        <CategoryCard name="HEADPHONES" image={headphones} />
        <CategoryCard name="SPEAKERS" image={speakers} />
        <CategoryCard name="EARPHONES" image={earphones} />
      </div>
    </section>
  );
};

export default CategoryCardsSection;
