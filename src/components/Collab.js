// import React from "react";
// // import Inbox from "./Inbox";
// // import Collab2 from "./Collab2";
// import collab from "../assets/collab.png";

// const Collab = () => {
//   return (
//     // justify-center w-[45vw]
//     <div className="mx-auto rounded-3xl flex align-center justify-between bg-[#DDE9FF] w-[80vw] h-[70vh] gap-4">
//       <div className="flex-1 flex-col my-auto bg-pink-200">
//         <p className="font-medium text-[40px] leading-[48px] items-start">
//           Seamless collaboration
//           <br />
//           <span className="-ml-8">for healthcare teams</span>
//         </p>
//         <p className="mt-4 font-poppins text-lg font-normal leading-6 text-gray-700">
//           With shared inboxes, any team member can resolve the team’s pending
//           tasks. Individual staff member don’t get overwhelmed and patients are
//           always take care of.
//         </p>
//       </div>
//       <div className="flex-1 items-center justify-center ml-4 my-auto">
//         <img src={collab} alt="collab" />
//       </div>
//     </div>
//   );
// };

// export default Collab;

import collab from "../assets/collab.png";

const Collab = () => {
  return (
    <div className="mx-auto rounded-3xl flex lg:flex-col lg:h-auto justify-between bg-[#DDE9FF] w-[80vw] h-[70vh] gap-4">
      <div className="flex-1 flex flex-col  justify-center items-start p-8">
        <p className="font-poppins font-medium text-[40px] lg:text-lg leading-[48px] text-left">
          Seamless collaboration for healthcare teams
        </p>
        <p className="mt-4 font-poppins text-lg lg:text-sm font-normal leading-6 text-left text-gray-700">
          With shared inboxes, any team member can <br />
          resolve the team’s pending tasks. Individual <br /> staff member don’t
          get overwhelmed and
          <br />
          patients are always taken care of.
        </p>
      </div>
      <div className="flex-1 flex items-center justify-center mx-auto lg:-mt-8 mb-2">
        <img src={collab} alt="collab" />
      </div>
    </div>
  );
};

export default Collab;
