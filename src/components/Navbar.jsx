import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full flex justify-between items-center px-4 bg-black h-20 text-gray-300">
      <div>
        <img className="h-16" src={logo} alt="logo" />
      </div>
      {/* menu */}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* hamburger */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {nav?<FaBars />:<FaTimes/>}
      </div>
      {/* mobile menu */}
      <ul
        className={
          nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-black"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>
      {/* icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
