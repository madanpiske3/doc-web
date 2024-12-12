// import React from "react";
// import footerLogo from "../assets/footer-logo.png"; // Adjust the import path accordingly.
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faTwitter,
//   faInstagram,
//   faWhatsapp,
// } from "@fortawesome/free-brands-svg-icons";
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

// const Footer = () => {
//   return (
//     <footer className="bg-[#2A0896] text-white grid grid-cols-1 gap-2">
//       {/* Footer Row */}
//       <div className="w-[90%] lg:w-[80%] mx-auto py-8 flex items-start lg:items-center flex-wrap lg:flex-nowrap gap-10 lg:gap-6">
//         {/* Column 1 */}
//         <div className="w-full px-4 flex flex-col gap-4 items-start">
//           <img src={footerLogo} alt="footer-logo" className="w-[268px]" />
//           <p className="para-light">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
//             ipsam nesciunt quo.
//           </p>
//           <div className="flex items-center gap-4">
//             <FontAwesomeIcon
//               icon={faFacebookF}
//               className="w-10 h-10 bg-white text-[#2A0896] p-2 rounded-full cursor-pointer"
//             />
//             <FontAwesomeIcon
//               icon={faTwitter}
//               className="w-10 h-10  bg-white text-[#2A0896] p-2 rounded-full cursor-pointer"
//             />
//             <FontAwesomeIcon
//               icon={faInstagram}
//               className="w-10 h-10 bg-white text-[#2A0896] p-2 rounded-full cursor-pointer"
//             />
//           </div>
//         </div>

//         {/* Column 2 */}
//         <div className="w-full px-4 flex flex-col gap-4">
//           <div className="flex items-center gap-2">
//             {/* <i className="fa-solid fa-phone"></i> */}
//             <FontAwesomeIcon icon={faPhone} />
//             <span>+91-8329422904</span>
//           </div>
//           <div className="flex items-center gap-2">
//             {/* <i className="fa-brands fa-whatsapp"></i> */}
//             <FontAwesomeIcon icon={faWhatsapp} />
//             <span>+91-8329422904</span>
//           </div>
//           <div className="flex items-center gap-2">
//             {/* <i className="fa-solid fa-envelope"></i> */}
//             <FontAwesomeIcon icon={faEnvelope} />
//             <span>madanpiske14@gmail.com</span>
//           </div>
//         </div>

//         {/* Column 3 */}
//         <div className="w-full px-4 flex flex-col gap-4">
//           <p>Subscribe Newsletter</p>
//           <form>
//             <div className="flex w-9/12 lg:w-full bg-white rounded-full">
//               <input
//                 type="email"
//                 placeholder="Your Email..."
//                 className="w-full rounded-full focus:outline-none text-[#282828] px-4 py-2 lg:px-4"
//               />
//               <button className="h-12 w-12 lg:h-10 lg:w-10 bg-blue-300 flex items-center justify-center rounded-full text-white">
//                 {/* <i className="fa-solid fa-chevron-right"></i> */}
//                 <FontAwesomeIcon icon={faChevronRight} />
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="py-4 border-t border-b border-gray-200">
//         <ul className="flex items-center justify-center gap-10">
//           <li>
//             <a href="#" className="hover:underline">
//               Products
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:underline">
//               Plans
//             </a>
//           </li>
//           <li>
//             <a href="#" className="hover:underline">
//               More
//             </a>
//           </li>
//         </ul>
//       </nav>

//       {/* Copyright */}
//       <p className="py-4 text-center">
//         &copy; Copyright 2024, All Rights Reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import PhoneIcon from "./sub/PhoneIcon";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-[#2A0896] py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Company Info */}
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-4">PatientGrid</h3>
          <p className="text-gray-200">
            Transforming healthcare management with innovative solutions for
            better patient care.
          </p>
          <div className="mt-4 space-y-2">
            <p>123 Healthcare Avenue</p>
            <p>Medical District, MD 12345</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-white">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <PhoneIcon />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp Support</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-xl" />
              <span>support@patientgrid.com</span>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="text-white">
          <h3 className="text-xl font-semibold mb-4">Subscribe Newsletter</h3>
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
            <button
              type="submit"
              className="bg-violet-600 hover:bg-violet-700 px-6 py-2 rounded-lg transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-300 border-t border-violet-800 pt-8">
        <p>© {new Date().getFullYear()} PatientGrid. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
