import React from "react";
// import { Background1 } from "./sub/Background";
// import BgSvg from "../assets/svg/bg1.svg";
import inbox from "../assets/inbox.png";
import PhoneIcon from "./sub/PhoneIcon";
// import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import men1 from "../assets/Men1.png";
import men2 from "../assets/Men2.png";
import men3 from "../assets/Men3.png";
import men4 from "../assets/Men4.png";

function Inbox() {
  return (
    // <div className="min-w-full bg-white ">
    // border-2 bg-white rounded-3xl
    <div className="max-w-full h-auto border-l-2">
      <div>
        <span class="inline-flex pt-8 font-semibold pb-4 mb-4">
          <img src={inbox} alt="Inbox" class="mr-6" />
          Inbox
        </span>
        <hr />
        <div className="flex justify-center p-3 m-3">
          {/* <div className="flex p-3 m-3"> */}
          <p className="m-3 py-1 px-3">Order :</p>
          <p className="m-3 bg-[#C5C2C2] py-1 px-3 rounded-md">Newest</p>
          <p className="bg-[#2397F3] m-3 py-1 px-3 rounded-md text-white">
            Oldest
          </p>

          <p className="m-3 py-1 px-3">Filter :</p>
          <p className="m-3 bg-[#C5C2C2] py-1 px-3 rounded-md">All</p>
          <p className="bg-[#2397F3] m-3 py-1 px-3 rounded-md text-white">
            Calls
          </p>
          <p className="bg-[#2397F3] m-3 py-1 px-3 rounded-md text-white">
            SMS
          </p>
          <p className="bg-[#2397F3] m-3 py-1 px-3 rounded-md text-white">
            Voicemails
          </p>
        </div>
      </div>
      <div className="w-full bg-white grid grid-cols-2 gap-4">
        <div className="font-semibold">Name</div>
        <div className="font-semibold">Last Contact</div>
      </div>

      <div className="w-full bg-white flex items-center justify-around my-3 hover:scale-110 rounded-2xl">
        <p className="flex">
          <img src={men1} alt="m1" className="w-10 h-10 " />
          <span className=" m-3 px-3 py-0 text-[#8E8787]">+321 92 3234 3</span>
        </p>
        <p className="flex m-3 px-3 py-1 text-white  bg-[#2397F3] rounded-2xl">
          <PhoneIcon /> <span className="px-2">1</span>
        </p>
        <p className="text-[#8E8787]">20 Hours before</p>
      </div>
      {/* <hr /> */}

      <div className="w-full bg-white flex items-center justify-around my-3 hover:scale-110 rounded-2xl">
        <p className="flex">
          <img src={men2} alt="m1" className="w-10 h-10 " />
          <span className="text-[#8E8787] m-3 px-3 py-0">+321 92 3234 3</span>
        </p>
        <p className="flex m-3 px-3 py-1 text-white  bg-[#2397F3] rounded-2xl">
          <PhoneIcon /> <span className="px-2">7</span>
        </p>
        <p className="text-[#8E8787]">10 Hours before</p>
      </div>

      <div className="w-full bg-white flex items-center justify-around my-3 hover:scale-110 rounded-2xl">
        <p className="flex">
          <img src={men3} alt="m1" className="w-10 h-10 " />
          <span className="text-[#8E8787] m-3 px-3 py-0">+321 92 3234 3</span>
        </p>
        <p className="flex m-3 px-3 py-1 text-white  bg-[#2397F3] rounded-2xl">
          <PhoneIcon /> <span className="px-2">2</span>
        </p>
        <p className="text-[#8E8787]">01 Hours before</p>
      </div>

      <div className="w-full bg-white flex items-center justify-around my-3 hover:scale-105 rounded-2xl">
        <p className="flex">
          <img src={men4} alt="m1" className="w-10 h-10 " />
          <span className="text-[#8E8787] m-3 px-3 py-0">+321 92 3234 3</span>
        </p>
        <p className="flex m-3 px-3 py-1 text-white bg-[#2397F3] rounded-2xl">
          <PhoneIcon /> <span className="px-2">3</span>
        </p>
        <p className="text-[#8E8787]">10 Hours before</p>
      </div>

      <div className="h-7"></div>
    </div>
  );
}

export default Inbox;
