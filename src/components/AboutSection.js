// import React from "react";
// import img1 from "../assets/about-1.png";
// import img2 from "../assets/about-2.png";
// import img3 from "../assets/about-3.png";

// function AboutSection() {
//   return (
//     <section className="pt-10 w-[100vw]">
//       <div class="flex  md:flex-row justify-center items-center">
//         <figure class="about-image">
//           <img src={img1} alt="about-1" />
//         </figure>
//         <div class="flex-start w-[30vw]">
//           <p className=" text-3xl font-bold">
//             Bring new business in by getting more online reviews.
//           </p>
//           <p className="text-xl">94% Use review to choose new doctor.</p>
//         </div>
//       </div>

//       <div className="flex  md:flex-row justify-center items-center">
//         <div className="flex-start w-[30vw]">
//           <p className="text-3xl font-bold">
//             Save time with collaborative tools and automations.
//           </p>
//           <p className="text-xl">15+ Staff hours saved per week.</p>
//         </div>
//         <figure className="about-image">
//           <img src={img2} alt="about-2" />
//         </figure>
//       </div>

//       <div className="flex  md:flex-row-reverse justify-center items-center">
//         <figure className="about-image">
//           <img src={img3} alt="about-3" />
//         </figure>
//         <div className="flex-start w-[30vw]">
//           <p className="text-3xl font-bold">
//             Improve patient experience engaging the way they want.
//           </p>
//           <p className="text-xl">90% People prefer texts to phone calls.</p>
//         </div>
//       </div>
//       {/* </div> */}
//     </section>
//   );
// }

// export default AboutSection;

// import React from "react";
// import img1 from "../assets/about-1.png";
// import img2 from "../assets/about-2.png";
// import img3 from "../assets/about-3.png";

// function AboutSection() {
//   return (
//     <section className="pt-10 w-full px-4 md:px-10">
//       {/* Section 1 */}
//       <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 mb-12">
//         <figure className="w-full md:w-1/2">
//           <img
//             src={img1}
//             alt="about-1"
//             className="w-full h-auto object-cover"
//           />
//         </figure>
//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <p className="text-2xl md:text-3xl font-bold mb-4">
//             Bring new business in by getting more online reviews.
//           </p>
//           <p className="text-lg md:text-xl text-gray-600">
//             94% use reviews to choose a new doctor.
//           </p>
//         </div>
//       </div>

//       {/* Section 2 */}
//       <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-12 mb-12">
//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <p className="text-2xl md:text-3xl font-bold mb-4">
//             Save time with collaborative tools and automations.
//           </p>
//           <p className="text-lg md:text-xl text-gray-600">
//             15+ staff hours saved per week.
//           </p>
//         </div>
//         <figure className="w-full md:w-1/2">
//           <img
//             src={img2}
//             alt="about-2"
//             className="w-full h-auto object-cover"
//           />
//         </figure>
//       </div>

//       {/* Section 3 */}
//       <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-8 md:gap-12">
//         <figure className="w-full md:w-1/2">
//           <img
//             src={img3}
//             alt="about-3"
//             className="w-full h-auto object-cover"
//           />
//         </figure>
//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <p className="text-2xl md:text-3xl font-bold mb-4">
//             Improve patient experience engaging the way they want.
//           </p>
//           <p className="text-lg md:text-xl text-gray-600">
//             90% of people prefer texts to phone calls.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutSection;

import React from "react";
import img1 from "../assets/about-1.png";
import img2 from "../assets/about-2.png";
import img3 from "../assets/about-3.png";

function AboutSection() {
  return (
    <section className="pt-10 w-full max-w-full overflow-x-hidden">
      <div className="flex flex-col md:flex-row justify-center items-center mb-10 px-4">
        <figure className="md:mr-10 mb-6 md:mb-0">
          <img
            src={img1}
            alt="about-1"
            className="max-w-full h-auto object-cover rounded-lg shadow-md"
          />
        </figure>
        <div className="text-center md:text-left w-full md:w-[30vw]">
          <p className="text-2xl md:text-3xl font-bold mb-4">
            Bring new business in by getting more online reviews.
          </p>
          <p className="text-lg md:text-xl text-gray-700">
            94% Use review to choose new doctor.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-center items-center mb-10 px-4">
        <figure className="md:ml-10 mb-6 md:mb-0">
          <img
            src={img2}
            alt="about-2"
            className="max-w-full h-auto object-cover rounded-lg shadow-md"
          />
        </figure>
        <div className="text-center md:text-left w-full md:w-[30vw]">
          <p className="text-2xl md:text-3xl font-bold mb-4">
            Save time with collaborative tools and automations.
          </p>
          <p className="text-lg md:text-xl text-gray-700">
            15+ Staff hours saved per week.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center px-4">
        <figure className="md:mr-10 mb-6 md:mb-0">
          <img
            src={img3}
            alt="about-3"
            className="max-w-full h-auto object-cover rounded-lg shadow-md"
          />
        </figure>
        <div className="text-center md:text-left w-full md:w-[30vw]">
          <p className="text-2xl md:text-3xl font-bold mb-4">
            Improve patient experience engaging the way they want.
          </p>
          <p className="text-lg md:text-xl text-gray-700">
            90% People prefer texts to phone calls.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
