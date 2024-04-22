import React, { useState } from "react";
import Website_banner from "./images/Website_banner.webp";
import { Link } from "react-router-dom";
import MenCarousel from "../../components/Carousels/men_carousel";
import WomenCarousel from "../../components/Carousels/women_carousel";
import ExclusiveLine from "../../components/home_components/exclusive_line";
import Collection from "../../components/home_components/collection";
import BestSellerWeek from "../../components/home_components/best_seller_week";

export default function Home() {
  const [activeButton, setActiveButton] = useState("section1");

  const showSection = (section) => {
    setActiveButton(section);
  };
  
  return (
    <div className="flex flex-col  items-center">
      <div>
        <Link to="/">
          <div className="relative">
            <button className="bg-blue-400 rounded-full w-10 sm:w-20 md:w-28 lg:w-36 h-3 sm:h-5 md:h-6 lg:h-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 hover:opacity-85"></button>
            <img
              src={Website_banner}
              alt="Website_banner"
              className="w-full h-auto"
            />
          </div>
        </Link>
      </div>

      <div className="mt-12 ">
        <h1 className="font-semibold text-center text-base sm:text-xl md:text-2xl lg:text-3xl">Our Products</h1>
        <p className="font-mono text-center text-neutral-600 text-xs sm:text-sm md:text-base italic">
          Top Sellers of the Week
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-2 mt-5">
        <button
          className={`rounded-full text-gray-500 border-zinc-950 py-2 px-4 hover:border-[1px] ${
            activeButton === "section1" ? "border-[1px] text-zinc-950" : ""
          }`}
          onClick={() => showSection("section1")}
        >
          Men
        </button>
        <button
          className={`rounded-full border-zinc-950 py-2 px-5 text-gray-500 hover:border-[1px] ${
            activeButton === "section2" ? "border-[1px] text-zinc-950" : ""
          }`}
          onClick={() => showSection("section2")}
        >
          Women
        </button>
      </div>

      <div>
        {activeButton === "section1" && <MenCarousel />}
        {activeButton === "section2" && <WomenCarousel />}
      </div>

      <div>
      <ExclusiveLine/>
      </div>

      <div>
        <Collection/>
      </div>

      <div>
        <BestSellerWeek/>
      </div>
    </div>
  );
}
