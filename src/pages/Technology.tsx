// src/pages/Technology.tsx
import { useState } from "react";
import data from "../data/data.json";

type Technology = {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
};

export default function Technology() {
  const technologies: Technology[] = data.technology;
  const [selectedTechIndex, setSelectedTechIndex] = useState(0);
  const selectedTech = technologies[selectedTechIndex];

  return (
    <div className="min-h-screen bg-[url('/Images/technology/background-technology-mobile.jpg')] md:bg-[url('/Images/technology/background-technology-tablet.jpg')] lg:bg-[url('/Images/technology/background-technology-desktop.jpg')] bg-cover bg-no-repeat text-white pt-28 md:pt-40">
      <main className="container mx-auto px-6 lg:px-20">
        <h1 className="font-barlow-condensed text-lg md:text-xl lg:text-2xl tracking-widest text-center lg:text-left mb-8 md:mb-16 lg:mb-24">
          <span className="text-white/25 mr-4">03</span> SPACE LAUNCH 101
        </h1>

        <div className="flex flex-col lg:flex-row items-center">
          {/* Numbered Navigation - Desktop (vertical) */}
          <div className="hidden lg:flex flex-col space-y-8 mr-20">
            {technologies.map((_, index) => (
              <button
                key={index}
                className={`w-20 h-20 rounded-full border border-white/25 flex items-center justify-center text-3xl font-bellefair transition-all ${
                  selectedTechIndex === index
                    ? "bg-white text-primary border-white"
                    : "text-white hover:border-white"
                }`}
                onClick={() => setSelectedTechIndex(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-3 lg:order-2">
            <div className="mb-4">
              <span className="font-barlow-condensed text-sm md:text-base text-primary-light tracking-widest">
                THE TERMINOLOGY...
              </span>
            </div>
            <h2 className="font-bellefair text-3xl md:text-4xl lg:text-6xl uppercase mb-4">
              {selectedTech.name}
            </h2>
            <p className="font-barlow text-base md:text-lg lg:text-xl text-primary-light leading-6 md:leading-7 lg:leading-8 max-w-md mx-auto lg:mx-0 mb-8 md:mb-12">
              {selectedTech.description}
            </p>

            {/* Numbered Navigation - Mobile/Tablet (horizontal) */}
            <div className="flex lg:hidden justify-center space-x-4 mb-8 md:mb-12">
              {technologies.map((_, index) => (
                <button
                  key={index}
                  className={`w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/25 flex items-center justify-center text-base md:text-xl font-bellefair transition-all ${
                    selectedTechIndex === index
                      ? "bg-white text-primary border-white"
                      : "text-white hover:border-white"
                  }`}
                  onClick={() => setSelectedTechIndex(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 order-2 lg:order-3 mb-8 lg:mb-0">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={selectedTech.images.portrait}
              />
              <source srcSet={selectedTech.images.landscape} />
              <img
                src={selectedTech.images.landscape}
                alt={selectedTech.name}
                className="w-full h-auto lg:h-[32rem] lg:w-auto lg:ml-auto object-cover"
              />
            </picture>
          </div>
        </div>
      </main>
    </div>
  );
}
