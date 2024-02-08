import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-black text-gray-300">
      <div className=" flex flex-col justify-center items-center h-full w-full">
        {/* row1 */}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-green-400">
              About
            </p>
          </div>
          <div></div>
        </div>
        {/* row2 */}
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="font-bold sm:text-right text-4xl">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis, nisi incidunt et ut nostrum dignissimos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
