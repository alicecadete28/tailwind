"use client";
import { useState } from "react";

// NAVBAR
export default function Example() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  console.log(isMenuOpen);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex bg-blue-950 items-center justify-between">
          {/* div da logo */}
          <div className="flex items-center justify-start gap-2">
            <div className="pl-3">
              <img
                src="logo-tailwind.svg"
                className="w-10 md:w-10 lg:w-12 h-auto mx-auto"
                alt="Logo"
              />
            </div>

            <div className="Logo-Color">React Tailwind</div>
          </div>
          <ul className=" hidden md:flex space-x-4 gap-5 mx-6">
            <li>
              <a href="#" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Contact
              </a>
            </li>
          </ul>
          <div className="md:hidden">
            <button className="text-white" onClick={toggleMenu}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={"2"}
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen ? (
            <ul className="absolute top-full w-full flex flex-col pl-3 bg-blue-950 md:hidden">
              <li className="py-2">
                <a href="#" className="text-white">
                  Home
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-white">
                  About
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-white">
                  Services
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          ) : null}
        </nav>
      </header>
    </div>
  );
}
