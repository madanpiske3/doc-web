import React from "react";
import InboxAmanda from "./InboxAmanda";
import Inbox from "./Inbox";

function InboxMain() {
  return (
    <div className="flex bg-white rounded-3xl border-2">
      <div className="w-3/10">
        <InboxAmanda />
      </div>
      <div className="w-7/10">
        <Inbox />
      </div>
    </div>
  );
}

export default InboxMain;
