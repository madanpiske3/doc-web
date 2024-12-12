import React from "react";
// import doctorimg from "../../public/doctor.png";
import doctorimg from "../assets/doctorfinals.png";

function FreeTrial() {
  return (
    // overflow-hidden  h-72
    <div className="w-auto h-auto bg-[#D9DEEF]  m-36 flex flex-row justify-center overflow-hidden items-center rounded-2xl">
      <div className="w-2/3 h-full relative lg:hidden">
        <div className="w-48 h-48 bg-[#2A0896] rounded-full absolute -top-20 -left-28"></div>
        <div className="ml-10">
          <img className="w-max " src={doctorimg} alt="DoctorIng" />
        </div>
      </div>
      <div className="relative">
        <div className="w-48 h-48 bg-[#2A0896] rounded-full absolute -bottom-20 -right-28"></div>
        <div className="font-semibold text-4xl font-poppins mb-2 lg:text-base ">
          We work on a month-to-month basis, try for free with no commitments
        </div>
        <div className="mx-28 font-poppins mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          molestiae totam modi maiores sapiente fugiat.
        </div>
        <button className="bg-[#4482C2] px-4 py-2 mt-4 rounded-2xl text-white">
          14 Free Trial
        </button>
      </div>
    </div>
  );
}

export default FreeTrial;
