import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full p-4 flex justify-center items-center absolute top-0 left-0 z-20 bg-transparent mb-5">
      <div className="flex items-center gap-8">
        {/* Logo */}
        <NavLink
          to="/"
          className="w-18 h-13 rounded-lg bg-white flex items-center justify-center font-bold shadow-md"
        >
          <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            NMK
          </p>
        </NavLink>

        {/* Navigation Links */}
        <nav className="flex text-xl font-medium rounded-lg overflow-hidden shadow-md bg-white/30 backdrop-blur-sm">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-7 py-3 flex items-center justify-center transition duration-300
      ${isActive ? "text-blue-600" : "text-gray-500"}
      hover:bg-white/40 hover:text-blue-600 active:scale-95`
            }
          >
            About
          </NavLink>

          {/* Divider */}
          <div className="w-px bg-white/60" />

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `px-6 py-2 flex items-center justify-center transition duration-300
      ${isActive ? "text-blue-600" : "text-gray-500"}
      hover:bg-white/40 hover:text-blue-600 active:scale-95`
            }
          >
            Projects
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
