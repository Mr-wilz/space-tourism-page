// src/pages/Destination.tsx
import { useState, useEffect } from "react";
import data from "../data/data.json";

type Destination = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
};

export default function Destination() {
  const destinations: Destination[] = data.destinations;
  const [selectedDestination, setSelectedDestination] = useState<Destination>(
    destinations[0]
  );
  const [rotation, setRotation] = useState(0);

  // Rotation animation effect
  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setRotation((prev) => (prev + 0.1) % 360);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [rotation]);

  return (
    <div className="min-h-screen bg-[url('/Images/destination/background-destination-mobile.jpg')] md:bg-[url('/Images/destination/background-destination-tablet.jpg')] lg:bg-[url('/Images/destination/background-destination-desktop.jpg')] bg-cover bg-no-repeat text-white pt-28 md:pt-40">
      <main className="container mx-auto px-6 lg:px-20">
        <h1 className="font-barlow-condensed text-lg md:text-xl lg:text-2xl tracking-widest text-center lg:text-left mb-8 md:mb-16 lg:mb-24">
          <span className="text-white/25 mr-4">01</span> PICK YOUR DESTINATION
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <picture>
              <source
                srcSet={selectedDestination.images.webp}
                type="image/webp"
              />
              <img
                src={selectedDestination.images.png}
                alt={selectedDestination.name}
                className="w-44 h-44 md:w-60 md:h-60 lg:w-80 lg:h-80"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: "transform 0.1s ease-in-out",
                }}
              />
            </picture>
          </div>

          <div className="w-full lg:w-1/2 lg:max-w-md text-center lg:text-left">
            <div className="flex justify-center lg:justify-start space-x-6 mb-6 md:mb-8">
              {destinations.map((destination) => (
                <button
                  key={destination.name}
                  className={`font-barlow-condensed text-sm md:text-base uppercase tracking-widest pb-2 ${
                    selectedDestination.name === destination.name
                      ? "text-white border-b-2 border-white"
                      : "text-primary-light hover:border-b-2 hover:border-white/50"
                  }`}
                  onClick={() => setSelectedDestination(destination)}
                >
                  {destination.name}
                </button>
              ))}
            </div>

            <h2 className="font-bellefair text-6xl md:text-7xl lg:text-8xl uppercase mb-4">
              {selectedDestination.name}
            </h2>

            <p className="font-barlow text-sm md:text-base lg:text-lg text-primary-light leading-6 md:leading-7 lg:leading-8 mb-8 md:mb-12">
              {selectedDestination.description}
            </p>

            <div className="border-t border-white/20 pt-6 md:pt-8 flex flex-col md:flex-row justify-around">
              <div className="mb-6 md:mb-0">
                <h3 className="font-barlow-condensed text-sm text-primary-light mb-2">
                  AVG. DISTANCE
                </h3>
                <p className="font-bellefair text-2xl md:text-3xl">
                  {selectedDestination.distance}
                </p>
              </div>
              <div>
                <h3 className="font-barlow-condensed text-sm text-primary-light mb-2">
                  EST. TRAVEL TIME
                </h3>
                <p className="font-bellefair text-2xl md:text-3xl">
                  {selectedDestination.travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
