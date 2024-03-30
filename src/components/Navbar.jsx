import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
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
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
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
                <li className="py-6 text-4xl">
                    <Link to="home" onClick={handleClick} smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link to="about" onClick={handleClick} smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link to="skills" onClick={handleClick} smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link to="work" onClick={handleClick} smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link to="contact" onClick={handleClick} smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            {/* icons */}
            <div className="hidden lg:flex  flex-col fixed top-[35%] left-0">
                <ul>
                    <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-100 bg-blue-600">
                        <a
                            href="https://www.linkedin.com/in/nimmy-mohan-5862211a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            className="flex justify-between items-center text-gray-300 w-full"
                        >
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-100 bg-gray-600">
                        <a
                            href="https://github.com/nimmybinu"
                            className="flex justify-between items-center text-gray-300 w-full"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-100 bg-blue-600">
                        <a
                            href="mailto:nimmimm2014@gmail.com"
                            className="flex justify-between items-center text-gray-300 w-full"
                        >
                            Mail <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-100 bg-gray-600">
                        <a
                            href="https://drive.google.com/file/d/12e4C-w86GzOgq-Wdbp-J0lN06FZQYf6t/view?usp=drivesdk"
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
