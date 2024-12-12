import React from "react";
import MainLogo from "./sub/MainLogo";
import inbox from "../assets/inbox.png";

function InboxAmanda() {
  return (
    <div className="ml-10 w-72 h-full justify-center align-center">
      <div className="h-14 ml-8 mt-8">
        <MainLogo />
      </div>
      <div className="mb-4 mt-2">Amanda Charles</div>
      {/* <div className="">HEllo wrodAmanda Charles</div> */}
      {/* <div className="w-60 h-3 bg-[#D9D9D9]">hi</div> */}
      <div class="ml-6 mr-2 h-4 w-60 bg-[#D9D9D9] flex items-center justify-end rounded-3xl">
        {" "}
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
      <div>
        <div>
          <span class="inline-flex pt-8 font-semibold pb-4 mb-4">
            <img src={inbox} alt="Inbox" class="mr-6" />
            Inbox
          </span>
          <div>
            <div class="ml-10 mr-2 h-4 w-48 bg-[#D9D9D9] flex items-center justify-end rounded-3xl mb-8"></div>
            <div class="ml-10 mr-2 h-4 w-48 bg-[#D9D9D9] flex items-center justify-end rounded-3xl mb-8"></div>
            <div class="ml-10 mr-2 h-4 w-48 bg-[#D9D9D9] flex items-center justify-end rounded-3xl mb-8"></div>
            <div class="ml-10 mr-2 h-4 w-48 bg-[#D9D9D9] flex items-center justify-end rounded-3xl mb-8"></div>
          </div>
          <div className="mb-28"></div>
        </div>
      </div>
    </div>
  );
}

export default InboxAmanda;
