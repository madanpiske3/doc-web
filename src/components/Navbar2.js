// import React, { useState } from "react";
// import MainLogo from "./sub/MainLogo";

// function Navbar2() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="relative">
//       {/* Desktop Navbar */}
//       {!isMenuOpen && (
//         <div className="w-full h-20 bg-[#D9D9D9] flex justify-around items-center px-10 max-md:hidden">
//           <div className="text-3xl font-bold">
//             <MainLogo />
//           </div>

//           <div className="flex gap-10">
//             <div className="text-lg font-medium font-poppins text-[#282828]">
//               Products
//             </div>
//             <div className="text-lg font-poppins font-medium text-[#282828]">
//               Plans
//             </div>

//             <div className="text-lg font-medium text-[#282828] font-poppins flex items-center gap-1">
//               <div>More</div>
//               <div className="w-4 h-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M12 16L6 10H18L12 16Z"></path>
//                 </svg>
//               </div>
//             </div>
//           </div>

//           <div className="flex gap-10 items-center">
//             <div className="text-xl font-semibold font-poppins">Login</div>
//             <div className="font-poppins bg-[#2A0896] text-xl font-light px-6 py-2 rounded-full text-white">
//               Request a demo
//             </div>
//           </div>
//         </div>
//       )}
//       {/* Mobile Navbar */}
//       <div className="w-full h-20 bg-[#D9D9D9] md:hidden flex justify-between items-center px-4">
//         <MainLogo />

//         {/* Hamburger Menu Button */}
//         <button
//           onClick={toggleMenu}
//           className="z-50 relative w-10 h-8 flex flex-col justify-between"
//         >
//           <span
//             className={`h-1 w-full bg-black transition-all duration-300 ${
//               isMenuOpen ? "rotate-45 translate-y-3" : ""
//             }`}
//           ></span>
//           <span
//             className={`h-1 w-full bg-black transition-all duration-300 ${
//               isMenuOpen ? "opacity-0" : ""
//             }`}
//           ></span>
//           <span
//             className={`h-1 w-full bg-black transition-all duration-300 ${
//               isMenuOpen ? "-rotate-45 -translate-y-3" : ""
//             }`}
//           ></span>
//         </button>

//         {/* Mobile Menu Overlay */}
//         {isMenuOpen && (
//           <div className="fixed inset-0 bg-[#D9D9D9] z-40 flex flex-col items-center justify-center">
//             <div className="flex flex-col items-center space-y-6">
//               <div className="text-lg font-medium font-poppins text-[#282828]">
//                 Products
//               </div>
//               <div className="text-lg font-poppins font-medium text-[#282828]">
//                 Plans
//               </div>
//               <div className="text-lg font-medium text-[#282828] font-poppins flex items-center gap-1">
//                 <div>More</div>
//                 <div className="w-4 h-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                   >
//                     <path d="M12 16L6 10H18L12 16Z"></path>
//                   </svg>
//                 </div>
//               </div>
//               <div className="text-xl font-semibold font-poppins">Login</div>
//               <div className="font-poppins bg-[#2A0896] text-xl font-light px-6 py-2 rounded-full text-white">
//                 Request a demo
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar2;

// import React, { useState } from "react";
// import MainLogo from "./sub/MainLogo";

// function Navbar2() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       {/* Desktop Navbar */}
//       <div className="hidden md:flex w-full h-20 bg-[#D9D9D9] justify-around items-center px-10">
//         <div className="text-3xl font-bold">
//           <MainLogo />
//         </div>

//         <div className="flex gap-10">
//           <div className="text-lg font-medium font-poppins text-[#282828]">
//             Products
//           </div>
//           <div className="text-lg font-poppins font-medium text-[#282828]">
//             Plans
//           </div>

//           <div className="text-lg font-medium text-[#282828] font-poppins flex items-center gap-1">
//             <div>More</div>
//             <div className="w-4 h-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path d="M12 16L6 10H18L12 16Z"></path>
//               </svg>
//             </div>
//           </div>
//         </div>

//         <div className="flex gap-10 items-center">
//           <div className="text-xl font-semibold font-poppins">Login</div>
//           <div className="font-poppins bg-[#2A0896] text-xl font-light px-6 py-2 rounded-full text-white">
//             Request a demo
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navbar */}
//       <div className="md:hidden w-full h-20 bg-[#D9D9D9] flex justify-between items-center px-4">
//         <MainLogo />

//         {/* Hamburger Menu Button */}
//         <button
//           onClick={toggleMenu}
//           className="z-50 relative w-10 h-8 flex flex-col justify-between"
//         >
//           <span
//             className={`h-1 w-full bg-black transition-all duration-300 ${
//               isMenuOpen ? "rotate-45 translate-y-3" : ""
//             }`}
//           ></span>
//           <span
//             className={`h-1 w-full bg-black transition-all duration-300 ${
//               isMenuOpen ? "opacity-0" : ""
//             }`}
//           ></span>
//           <span
//             className={`h-1 w-full bg-black transition-all duration-300 ${
//               isMenuOpen ? "-rotate-45 -translate-y-3" : ""
//             }`}
//           ></span>
//         </button>

//         {/* Mobile Menu Overlay */}
//         {isMenuOpen && (
//           <div className="fixed inset-0 bg-[#D9D9D9] z-40 flex flex-col items-center justify-center">
//             <div className="flex flex-col items-center space-y-6">
//               <div className="text-lg font-medium font-poppins text-[#282828]">
//                 Products
//               </div>
//               <div className="text-lg font-poppins font-medium text-[#282828]">
//                 Plans
//               </div>
//               <div className="text-lg font-medium text-[#282828] font-poppins flex items-center gap-1">
//                 <div>More</div>
//                 <div className="w-4 h-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                   >
//                     <path d="M12 16L6 10H18L12 16Z"></path>
//                   </svg>
//                 </div>
//               </div>
//               <div className="text-xl font-semibold font-poppins">Login</div>
//               <div className="font-poppins bg-[#2A0896] text-xl font-light px-6 py-2 rounded-full text-white">
//                 Request a demo
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Navbar2;

// import React, { useState } from "react";
// import MainLogo from "./sub/MainLogo";

// function Navbar2() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       {/* Desktop Navbar */}
//       {/* {isMenuOpen && <div className='w-full h-20 bg-[#D9D9D9] md:flex hidden justify-around items-center px-10'>} */}
//       {/* {!isMenuOpen && <div className='w-full h-20 bg-[#D9D9D9] md:flex hidden justify-around items-center px-10'>} */}
//       <div
//         className={
//           isMenuOpen
//             ? "w-full h-20 bg-[#D9D9D9] md:flex hidden justify-around items-center px-10"
//             : "w-full h-20 bg-[#D9D9D9] md:flex justify-around items-center px-10"
//         }
//       >
//         <div className="text-3xl font-bold">
//           <MainLogo />
//         </div>

//         <div className="flex gap-10">
//           <div className="text-lg font-medium font-poppins text-[#282828]">
//             Products
//           </div>
//           <div className="text-lg font-poppins font-medium text-[#282828]">
//             Plans
//           </div>

//           <div className="text-lg font-medium text-[#282828] font-poppins flex items-center gap-1">
//             <div>More</div>
//             <div className="w-4 h-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//               >
//                 <path d="M12 16L6 10H18L12 16Z"></path>
//               </svg>
//             </div>
//           </div>
//         </div>

//         <div className="flex gap-10 items-center">
//           <div className="text-xl font-semibold font-poppins">Login</div>
//           <div className="font-poppins bg-[#2A0896] text-xl font-light px-6 py-2 rounded-full text-white">
//             Request a demo
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navbar */}
//       <div className="md:hidden w-full h-20 bg-[#D9D9D9] flex justify-between items-center px-4">
//         <MainLogo />

//         {/* Hamburger Menu Button */}
//         <button
//           onClick={toggleMenu}
//           className="z-50 relative w-10 h-8 flex flex-col justify-between"
//         >
//           <span
//             className={`h-1 w-full bg-black transition-all duration-300 ${
//               isMenuOpen ? "rotate-45 translate-y-3" : ""
//             }`}
//           ></span>
//           <span
//             className={`h-1 w-full bg-black transition-all duration-300 ${
//               isMenuOpen ? "opacity-0" : ""
//             }`}
//           ></span>
//           <span
//             className={`h-1 w-full bg-black transition-all duration-300 ${
//               isMenuOpen ? "-rotate-45 -translate-y-3" : ""
//             }`}
//           ></span>
//         </button>

//         {/* Mobile Menu Overlay */}
//         {isMenuOpen && (
//           <div className="fixed inset-0 bg-[#D9D9D9] z-40 flex flex-col items-center justify-center">
//             <div className="flex flex-col items-center space-y-6">
//               <div className="text-lg font-medium font-poppins text-[#282828]">
//                 Products
//               </div>
//               <div className="text-lg font-poppins font-medium text-[#282828]">
//                 Plans
//               </div>
//               <div className="text-lg font-medium text-[#282828] font-poppins flex items-center gap-1">
//                 <div>More</div>
//                 <div className="w-4 h-4">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                   >
//                     <path d="M12 16L6 10H18L12 16Z"></path>
//                   </svg>
//                 </div>
//               </div>
//               <div className="text-xl font-semibold font-poppins">Login</div>
//               <div className="font-poppins bg-[#2A0896] text-xl font-light px-6 py-2 rounded-full text-white">
//                 Request a demo
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Navbar2;

import React, { useState } from "react";
import MainLogo from "./sub/MainLogo";

function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#D9D9D9]">
      {/* Main Navbar Container */}
      <div className="flex justify-between items-center p-4 relative">
        {/* Logo */}
        <MainLogo />

        {/* Desktop Menu - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-6">
          <div>Products</div>
          <div>Plans</div>
          <div>More</div>
          <div>Login</div>
          <button className="bg-[#2A0896] text-white px-4 py-2 rounded-full">
            Request a demo
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="space-y-1"
          >
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#D9D9D9] py-4">
          <div className="flex flex-col items-center space-y-4">
            <div>Products</div>
            <div>Plans</div>
            <div>More</div>
            <div>Login</div>
            <button className="bg-[#2A0896] text-white px-4 py-2 rounded-full">
              Request a demo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar2;
