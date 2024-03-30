import React from "react";
import WorkImg from "../assets/projects/astra.jpeg";
import WorkImg2 from "../assets/projects/react.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-black">
      <div className="max-w-[1000px] w-full mx-auto p-4 flex flex-col  h-full justify-center">
        <div className="pb-8">
          <p className="text-4xl border-b-4 font-bold inline border-green-400 ">
            Work
          </p>
          <p className="py-6">Checkout my works</p>
        </div>
        {/* image container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/* grid items */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container flex items-center justify-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Ecommerce Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://www.linkedin.com/posts/nimmy-mohan-5862211a9_astra-e-commerce-website-exciting-news-activity-7138830121058148353-Emtx?utm_source=share&utm_medium=member_android">
                  <a href="https://github.com/nimmybinu/astra"></a>
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="https://github.com/nimmybinu/astra">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* ---------------- */}
          <div
            style={{ backgroundImage: `url(${WorkImg2})` }}
            className="shadow-lg shadow-[#040c16] group container flex items-center justify-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                FoodApp using swiggy's API
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/nimmybinu/FoodOrderApp">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* ---------------- */}
        </div>
      </div>
    </div>
  );
};

export default Work;
