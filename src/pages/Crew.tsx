// src/pages/Crew.tsx
import { useState, useEffect } from "react";
import data from "../data/data.json";

type CrewMember = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
};

export default function Crew() {
  const crewMembers: CrewMember[] = data.crew;
  const [selectedCrewIndex, setSelectedCrewIndex] = useState(0);
  const selectedCrew = crewMembers[selectedCrewIndex];
  const [transitionDirection, setTransitionDirection] = useState<
    "left" | "right"
  >("right");

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTransitionDirection("right");
      setSelectedCrewIndex((prevIndex) =>
        prevIndex === crewMembers.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [crewMembers.length]);

  // Manual selection handler
  const handleCrewSelect = (index: number) => {
    setTransitionDirection(index > selectedCrewIndex ? "right" : "left");
    setSelectedCrewIndex(index);
  };

  return (
    <div className="h-full bg-[url('/Images/crew/background-crew-mobile.jpg')] md:bg-[url('/Images/crew/background-crew-tablet.jpg')] lg:bg-[url('/Images/crew/background-crew-desktop.jpg')] bg-cover bg-no-repeat text-white pt-20 md:pt-40 md:pb-4 pb-4">
      <main className="container mx-auto px-6 lg:px-20">
        <h1 className="font-barlow-condensed text-lg md:text-xl lg:text-2xl mt-0 text-center lg:text-left mb-8 md:mb-11 lg:mb-1">
          <span className="text-white/25 mr-4">02</span> MEET YOUR CREW
        </h1>

        <div className="flex flex-col lg:flex-row-reverse items-center justify-between">
          {/* Crew Image with Animation */}
          <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0 border-b border-white/20 lg:border-none overflow-hidden">
            <div
              className={`transition-transform duration-500 ease-in-out ${
                transitionDirection === "right"
                  ? "animate-slide-in-right"
                  : "animate-slide-in-left"
              }`}
              key={selectedCrewIndex}
            >
              <picture>
                <source srcSet={selectedCrew.images.webp} type="image/webp" />
                <img
                  src={selectedCrew.images.png}
                  alt={selectedCrew.name}
                  className="w-42 h-42 md:w-30 md:h-30 lg:w-[44rem] lg:h-[44rem] object-contain"
                />
              </picture>
            </div>
          </div>

          {/* Crew Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Crew Navigation Dots */}
            <div className="flex space-x-4 mb-8 md:mb-16 lg:order-2 lg:mt-16">
              {crewMembers.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    selectedCrewIndex === index
                      ? "bg-white"
                      : "bg-white/20 hover:bg-white/50"
                  }`}
                  onClick={() => handleCrewSelect(index)}
                  aria-label={`View ${crewMembers[index].name}`}
                />
              ))}
            </div>

            <div
              className={`lg:order-1 transition-opacity duration-500 ${
                transitionDirection === "right"
                  ? "animate-fade-in-right"
                  : "animate-fade-in-left"
              }`}
            >
              <h2 className="font-bellefair text-2xl md:text-3xl lg:text-4xl text-white/50 uppercase mb-2">
                {selectedCrew.role}
              </h2>
              <h3 className="font-bellefair text-3xl md:text-4xl lg:text-6xl uppercase mb-4">
                {selectedCrew.name}
              </h3>
              <p className="font-barlow text-base md:text-lg lg:text-xl text-primary-light leading-6 md:leading-7 lg:leading-8 max-w-md">
                {selectedCrew.bio}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
