import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-black w-full h-screen ">
      {/* container */}
      <div className="max-w-[1000px] h-full flex flex-col justify-center mx-auto px-8">
        <p className="text-green-400">Hi, My name is,</p>
        <h2 className="text-gray-200 text-3xl sm:text-7xl font-bold">Nimmy</h2>
        <h3 className="text-3xl sm:text-7xl font-bold text-gray-400">
          MERN stack developer.
        </h3>
        <p className="text-gray-400 py-4 max-w-[700px]">
          Welcome to my portfolio! I'm a MERN stack developer specializing in
          building dynamic web applications with MongoDB, Express.js, React.js,
          and Node.js. Let's collaborate and bring your ideas to life!
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:border-green-400 hover:bg-green-400">
              My Works
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
