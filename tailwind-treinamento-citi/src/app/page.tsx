"use client";

import { useState } from "react";

export default function Example() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  console.log(isMenuOpen);
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="bg-purple-300 p-4">
          <div className="flex items-center justify-between">
            <div className="text-black text-2xl font-bold">ReactTailwind</div>

            <div className="md:hidden">
              <button className="text-black" onClick={toggleMenu}>
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

            <ul className="hidden md:flex space-x-4">
              <li>
                <a href="#" className="text-purple-700">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-700">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-700">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-700">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen ? (
            <ul className="flex-col md:hidden">
              <li className="py-2">
                <a href="#" className="text-purple-700">
                  Home
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-purple-700">
                  About
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-purple-700">
                  Services
                </a>
              </li>
              <li className="py-2">
                <a href="#" className="text-purple-700">
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
