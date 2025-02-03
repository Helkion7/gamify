import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-black text-white">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          MyLogo
        </Link>
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-400">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-gray-400">
              Register
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
        </ul>
      </div>
      {/* Mobile Menu - Right-aligned with text-right */}
      <ul
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out text-right
          ${isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"}
        `}
      >
        <li>
          <Link
            to="/"
            className="block py-2 pr-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="block py-2 pr-2"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className="block py-2 pr-2"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="block py-2 pr-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
