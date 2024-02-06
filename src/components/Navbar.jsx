import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
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
        {nav ? <FaBars /> : <FaTimes />}
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
      <div className="hidden lg:flex flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-100 bg-blue-600">
            <a
              href="/"
              className="flex justify-between items-center text-gray-300 w-full"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-100 bg-gray-600">
            <a
              href="/"
              className="flex justify-between items-center text-gray-300 w-full"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-100 bg-blue-600">
            <a
              href="/"
              className="flex justify-between items-center text-gray-300 w-full"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-100 bg-gray-600">
            <a
              href="/"
              className="flex justify-between items-center text-gray-300 w-full"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
