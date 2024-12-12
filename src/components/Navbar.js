import { useState } from "react";
// import React {useState} from "react";
import MainLogo from "./sub/MainLogo";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-20 bg-[#D9D9D9] flex justify-around items-center px-10">
      <div className="text-3xl font-bold">
        <div>
          <MainLogo />
        </div>
      </div>

      <div className="flex gap-10">
        <div className="text-lg font-medium font-poppins text-[#282828]">
          Products
        </div>
        <div className="text-lg font-poppins font-medium text-[#282828]">
          Plans
        </div>

        <div className="text-lg font-medium text-[#282828] font-poppins flex items-center gap-1">
          <div>More</div>
          <div className="w-4 h-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 16L6 10H18L12 16Z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="flex gap-10 items-center">
        <div className="text-xl font-semibold font-poppins">Login</div>
        <div className="font-poppins bg-[#2A0896] text-xl font-light px-6 py-2 rounded-full text-white">
          Request a demo
        </div>
      </div>
    </div>
  );
}

export default Navbar;
