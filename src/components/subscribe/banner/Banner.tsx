import React from "react";
import { MdLocationOn } from "react-icons/md";

function Banner() {
  // MdLocationOn
  return (
    <div className="banner-wrapper">
      <h4>Channel Title goes here</h4>
      <hr />
      <div className="d-flex mt-4 gap-5">
        <div>
          <h6>Channel Location</h6>
          <div className="d-flex align-items-center gap-3">
            <MdLocationOn size={20} color="#606060" className="min-w-20" />
            <p className="mb-0">15, New Street, Koller's View, Chicago</p>
          </div>
        </div>
        <div>
          <h6>Channel Subscription</h6>
          <p>$9.99 / Month</p>
        </div>
      </div>
      <div className="mt-3">
        <h6>Channel Description</h6>
        <p>
          You must provide detailed feedback for the individual question.
          (feeback parameters and details mentioned below). In case you score
          less than 80 precent, but give detailed feedback, you may be paid an
          amount as per your score. this is calculated internally, and our
          judgment will be final(Not Debatable).
        </p>
      </div>
    </div>
  );
}

export default Banner;
