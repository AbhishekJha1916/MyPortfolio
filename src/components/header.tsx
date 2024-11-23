"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <Link href="/">
        <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer hover:text-pink-500">
          Vobble Studios
        </h1>
      </Link>

      {/* Hamburger Menu Button for small screens */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-2xl text-gray-600 focus:outline-none"
      >
        <span className={`material-icons ${isMenuOpen ? "opacity-0" : ""}`}>
          menu
        </span>
      </button>

      {/* Main Navbar Links */}
      <nav className="hidden md:flex space-x-6 text-gray-600">
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-indigo-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-indigo-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-indigo-600">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-indigo-600">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu Dropdown for small screens */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed inset-0 bg-black bg-opacity-90 z-10 flex flex-col items-center justify-center space-y-6 md:hidden`}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 text-3xl text-gray-400"
        >
          &times;
        </button>

        <ul className="space-y-4 text-gray-400 text-xl text-center">
          <li>
            <Link href="/" className="hover:text-indigo-600" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-indigo-600" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-indigo-600" onClick={closeMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-indigo-600" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
