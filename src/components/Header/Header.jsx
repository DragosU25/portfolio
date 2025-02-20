import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import logo from "../../assets/logo.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleScroll(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Închide meniul după click
  }

  return (
    <header className="p-4 bg-[#1A0B2E] text-white fixed top-0 w-full z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <img src={logo} alt="logo" className="w-[40px]" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10">
          <button
            onClick={() => handleScroll("about")}
            className="hover:text-purple-400"
          >
            About
          </button>
          <button
            onClick={() => handleScroll("projects")}
            className="hover:text-purple-400"
          >
            Projects
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="hover:text-purple-400"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[60%] bg-[#1A0B2E] text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden flex flex-col items-center gap-6 pt-16`}
      >
        <button
          onClick={() => handleScroll("about")}
          className="text-lg hover:text-purple-400"
        >
          About
        </button>
        <button
          onClick={() => handleScroll("projects")}
          className="text-lg hover:text-purple-400"
        >
          Projects
        </button>
        <button
          onClick={() => handleScroll("contact")}
          className="text-lg hover:text-purple-400"
        >
          Contact
        </button>
      </div>
    </header>
  );
}

export default Header;
