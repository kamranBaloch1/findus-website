"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = ["Home", "Team", "How We Work", "Contact-Us"];

  return (
    <nav className="w-full font-inter py-4 sm:py-6 absolute top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center flex-1">
          <img
            src="/logo_green.svg"
            alt="Logo"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-10 text-base lg:text-lg font-semibold text-black">
          {menuItems.map((item, i) => (
            <li key={i} className="relative group">
              <Link
                href={`/${
                  item === "Home" ? "" : item.toLowerCase().replace(/ /g, "-")
                }`}
                className="transition hover:text-[#77B900]"
              >
                {item}
              </Link>

              {/* Green Underline */}
              <span
                className="
                absolute left-0 -bottom-1 h-[3px] w-0 bg-[#77B900] 
                transition-all duration-300 group-hover:w-full
              "
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center w-10 h-10 text-gray-900 hover:text-[#77B900] transition-colors z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>

        <div className="hidden md:flex flex-1 justify-end"></div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white shadow-2xl
          transform transition-transform duration-300 ease-in-out md:hidden z-40
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          <ul className="flex flex-col gap-6">
            {menuItems.map((item, i) => (
              <li key={i} className="border-b border-gray-100 pb-4">
                <Link
                  href={`/${
                    item === "Home" ? "" : item.toLowerCase().replace(/ /g, "-")
                  }`}
                  className="text-lg font-semibold text-gray-900 hover:text-[#77B900] transition-colors flex items-center justify-between group"
                  onClick={closeMenu}
                >
                  <span>{item}</span>
                  <span className="text-[#77B900] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Footer */}
          <div className="mt-auto pb-8">
            <div className="bg-gradient-to-r from-[#77B900]/10 to-emerald-100 rounded-xl p-4">
              <p className="text-sm text-gray-700 font-medium">
                FindUs - Connecting people with verified professionals
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}