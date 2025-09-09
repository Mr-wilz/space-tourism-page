// src/pages/Home.tsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-[url('/Images/home/background-home-mobile.jpg')] md:bg-[url('/Images/home/background-home-tablet.jpg')] lg:bg-[url('/Images/home/background-home-desktop.jpg')] bg-cover bg-no-repeat text-white ">
      <main className="container mx-auto px-6 pt-24 md:pt-32 lg:pt-32 lg:px-20 flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px)] ">
        <div className="text-center lg:text-left max-w-md lg:max-w-xl">
          <h1 className="font-barlow-condensed text-lg md:text-xl lg:text-[16px] tracking-widest text-primary-light mt-0 mb-4 md:mb-6 md:mt-6">
            SO, YOU WANT TO TRAVEL TO
          </h1>
          <h2 className="font-bellefair text-2xl md:text-7xl lg:text-[80px] mb-6 md:mb-8">
            SPACE
          </h2>
          <p className="font-barlow text-sm md:text-base lg:text-[16px] text-primary-light leading-6 md:leading-7 lg:leading-8">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="mt-20 lg:mt-0 relative">
          <Link
            to="/destination"
            className={`w-32 h-32 md:w-40 md:h-40 lg:w-40 lg:h-40 rounded-full mb-4 bg-white text-black font-bellefair text-l md:text-3xl lg:text-2xl flex items-center justify-center relative z-10 transition-all duration-300 ${
              isHovered ? "shadow-explore" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            EXPLORE
          </Link>
          {isHovered && (
            <div className="absolute inset-10 rounded-full bg-white opacity-10 animate-ping scale-200 z-0"></div>
          )}
        </div>
      </main>
    </div>
  );
}
