import React from "react";
import { brands } from "../data";

const Brands = () => {
  return (
    <section className="min-h-[146px] bg-tertiary flex items-center">
      <div className="container mx-auto flex md:justify-between items-center flex-wrap justify-evenly">
        {brands.map((brand, index) => (
          <a
            key={index}
            href={brand.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={brand.img} alt="" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Brands;
