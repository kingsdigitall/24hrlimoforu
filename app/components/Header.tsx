"use client";
import Link from "next/link";
import { useState } from "react";
import site from "@/app/config/site.json";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-surface/90 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center h-18 overflow-hidden">
            <img
              src="https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/24%20Hour%20Limo%20For%20You.png?updatedAt=1755847281608"
              alt="LimoLux Logo"
              className="h-auto w-48  mr-2 object-contain"
            />
          </Link>
          <div className="hidden lg:flex items-center justify-center gap-6">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className=" hover:text-white transition-colors duration-200 font-medium text-sm lg:text-base relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link
                href="/services"
                className=" hover:text-white transition-colors duration-200 font-medium text-sm lg:text-base relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link
                href="/fleet"
                className=" hover:text-white transition-colors duration-200 font-medium text-sm lg:text-base relative group"
              >
                Fleet
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link
                href="/about"
                className=" hover:text-white transition-colors duration-200 font-medium text-sm lg:text-base relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link
                href="/contact"
                className=" hover:text-white transition-colors duration-200 font-medium text-sm lg:text-base relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Desktop Book Now Button */}
            <div className="hidden lg:block">
              <a
                href={`tel:${site.tel}`}
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-200 text-sm lg:text-base"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Book Now
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md  hover:text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-4 space-y-2 border-t border-white/20 pt-4">
            {/* Mobile Book Now Button */}
            <div className="px-2 pb-3 border-b border-white/20">
              <a
                href={`tel:${site.tel}`}
                className="flex items-center justify-center w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={closeMenu}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Book Now
              </a>
            </div>

            {/* Mobile Navigation Links */}
            <Link
              href="/"
              className="block px-4 py-3  hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 font-medium"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-4 py-3  hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 font-medium"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              href="/fleet"
              className="block px-4 py-3  hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 font-medium"
              onClick={closeMenu}
            >
              Fleet
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3  hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 font-medium"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-3  hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200 font-medium"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
