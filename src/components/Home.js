import React from "react";
import start from "../assets/start.png";

function Home() {
  return (
    // <main className="w-full h-screen flex justify-center items-center">
    <main className="w-full pt-20 pb-16 flex justify-center items-center lg:bg-pink-400">
      <div className="">
        {/* <p className="text-5xl tracking-wider font-poppins"> */}
        <p className="font-poppins text-6xl font-medium leading-tight text-gray-700">
          Medical Software To Attract
        </p>
        {/* </div>
      <div> */}
        <p className="pt-4 font-poppins text-6xl font-medium leading-tight text-gray-700">
          And{" "}
          <span className="font-extrabold tracking-wide">Retain Patients</span>
        </p>
        <p className="pt-6 font-normal font-poppins text-gray-500 text-lg">
          Lorem ipsum dolor sit amet csicing elit. Inventore ab voluptatem eum
          architecto rem
          <br /> error, a doloremque. Nobis, aliquam beatae?
        </p>
        {/* <p className="pt-8 font-semibold inline-block">
          Start For Free
          <img src={start} alt="start" />
        </p> */}

        <span class="inline-flex items-center pt-8 font-semibold">
          Start For Free
          <img src={start} alt="start" class="ml-2" />
        </span>
      </div>
    </main>
  );
}

export default Home;
