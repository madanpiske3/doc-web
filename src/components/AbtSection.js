import React from "react";
import img1 from "../assets/about-1.png";
import img2 from "../assets/about-2.png";
import img3 from "../assets/about-3.png";

import "./main.css";

const AbtSection = () => {
  return (
    <div className="text-blocks w-full h-full">
      <div className="text-block md:mt-20 ">
        <div className="image">
          <img src={img1} alt="First" />
        </div>
        <div className="content  flex flex-col items-center justify-center text-center">
          <p className="text-2xl md:text-3xl font-bold mb-4">
            Save time with collaborative tools and automations.
          </p>
          <p className="text-lg md:text-xl text-gray-700 sm:pb-16">
            15+ Staff hours saved per week.
          </p>
        </div>
      </div>

      <div className="text-block even md:mt-20 ">
        <div className="image">
          <img src={img2} alt="First" />
        </div>
        <div className="content flex flex-col items-center justify-center text-center">
          <p className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Improve patient experience engaging the way they want.
          </p>
          <p className="text-lg md:text-xl text-gray-700 sm:pb-16">
            90% People prefer texts to phone calls.
          </p>
        </div>
      </div>

      <div className="text-block md:mt-20 ">
        <div className="image">
          <img src={img3} alt="First" />
        </div>
        <div className="content  flex flex-col items-center justify-center text-center">
          <p className="text-2xl md:text-3xl font-bold mb-4 ">
            Seamless collaboration for healthcare teams
          </p>
          <p className="text-lg md:text-xl text-gray-700 sm:pb-16">
            90% People prefer texts to phone calls.
          </p>
        </div>
      </div>

      <div className="w-16"></div>
    </div>
  );
};

export default AbtSection;
