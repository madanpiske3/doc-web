import React, { useState, useEffect } from "react";
import Inbox from "../Inbox";
import InboxMain from "../InboxMain";
// import Home from "../Home";

const BackgroundCycler = () => {
  const [currentBackground, setCurrentBackground] = useState(0);

  // SVG backgrounds as React components
  const Backgrounds = [
    () => (
      <svg
        className="absolute inset-0 w-full h-full"
        width="1608"
        height="735"
        viewBox="0 0 1608 735"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="69.7145"
          width="1550.34"
          height="538.853"
          rx="30"
          transform="rotate(7.43352 69.7145 0)"
          fill="url(#paint0_linear_2_61)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_61"
            x1="122.427"
            y1="253.165"
            x2="1573.97"
            y2="290.121"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#87CEFA" />
            <stop offset="1" stopColor="#2A0896" />
          </linearGradient>
        </defs>
      </svg>
    ),
    () => (
      <svg
        className="absolute inset-0 w-full h-full"
        width="1608"
        height="735"
        viewBox="0 0 1608 735"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="69.7144"
          width="1550.34"
          height="538.853"
          rx="30"
          transform="rotate(7.43352 69.7144 0)"
          fill="url(#paint0_linear_2_63)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_63"
            x1="122.427"
            y1="253.165"
            x2="1573.97"
            y2="290.121"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2A0896" />
            <stop offset="1" stopColor="#87CEFA" />
          </linearGradient>
        </defs>
      </svg>
    ),
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % Backgrounds.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  // Get the current background component
  const CurrentBackground = Backgrounds[currentBackground];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background SVG */}
      <CurrentBackground />

      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {/* <Inbox /> */}
        <InboxMain />
      </div>
    </div>
  );
};

export default BackgroundCycler;
