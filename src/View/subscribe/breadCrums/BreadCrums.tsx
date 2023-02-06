import React from "react";
import { IoIosArrowForward } from "react-icons/io";
function breadCrums() {
  return (
    <div className="d-flex align-items-center gap-2 pt-4 bread-crums">
      <span>All Channels</span>
      <IoIosArrowForward className="min-w-20" />
      <span>Channel Name here</span>
      <IoIosArrowForward className="min-w-20" />
      <span>Channel Details</span>
    </div>
  );
}

export default breadCrums;
