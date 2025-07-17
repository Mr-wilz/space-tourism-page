import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 pt-6 md:pt-8 lg:pt-10 px-6 md:px-10 lg:px-12 z-50">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto">
        {/* Logo */}
        <div className="w-10 h-10 md:w-12 md:h-12">
          <img src="/logo.svg" alt="Logo" />
        </div>

        {/* Horizontal line - hidden on mobile */}
        <div className="hidden lg:block flex-grow max-w-[50rem] h-px bg-white/35 z-10 ml-12"></div>

        {/* Navigation */}
        <nav className="relative">
          {/* Mobile menu open button (hamburger only) */}
          {!isMenuOpen && (
            <button
              className="md:hidden z-50 hover:opacity-80 transition-opacity duration-200"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="21"
                viewBox="0 0 24 21"
              >
                <g fill="#D0D6F9" fillRule="evenodd">
                  <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                </g>
              </svg>
            </button>
          )}

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center h-24 bg-white/5 backdrop-blur-lg px-12 lg:px-32 gap-x-8 z-0">
            {[
              { to: "/", label: "Home", index: "00" },
              { to: "/destination", label: "Destination", index: "01" },
              { to: "/crew", label: "Crew", index: "02" },
              { to: "/technology", label: "Technology", index: "03" },
            ].map(({ to, label, index }) => (
              <li key={label}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center h-full font-barlow-condensed text-sm tracking-[2.7px] uppercase border-b-2 ${
                      isActive
                        ? "border-white text-white"
                        : "border-transparent hover:border-white/50 text-primary-light"
                    }`
                  }
                >
                  <span className="font-bold mr-2 md:hidden lg:inline">
                    {index}
                  </span>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile overlay menu */}
          {isMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-primary/70 backdrop-blur-2xl z-40 pt-32 pl-8 animate-fade-in">
              {/* Close button inside overlay */}
              <button
                className="absolute top-10 right-6 p-2 hover:scale-110 transition-transform duration-200"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                >
                  <g fill="#D0D6F9" fillRule="evenodd">
                    <path d="M2.575.954l16.97 16.97-1.414 1.414L1.161 2.368z" />
                    <path d="M1.161 17.924L18.131.954l1.414 1.414-16.97 16.97z" />
                  </g>
                </svg>
              </button>

              <ul className="flex flex-col gap-y-8">
                {[
                  { to: "/", label: "Home", index: "00" },
                  { to: "/destination", label: "Destination", index: "01" },
                  { to: "/crew", label: "Crew", index: "02" },
                  { to: "/technology", label: "Technology", index: "03" },
                ].map(({ to, label, index }) => (
                  <li key={label}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        `flex items-center font-barlow-condensed text-base tracking-[2.7px] uppercase py-2 px-4 rounded-lg transition-all duration-300 ${
                          isActive
                            ? "text-white bg-white/10"
                            : "text-primary-light hover:bg-white/5 hover:text-white"
                        }`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="font-bold mr-3">{index}</span>
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
