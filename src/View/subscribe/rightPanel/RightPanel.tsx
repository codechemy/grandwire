import React from "react";
import BannerImg from "../../../assets/img/placeh.png";
import ServiceCard from "./ServiceCard";
import Profile from "../../../assets/img/profile_small.png";

const data :any = [
  {
    title: "Home Care",
    des: "Washing Service",
  },
  {
    title: "Gardening",
    des: "Washing Service",
  },
  {
    title: "Technical Service",
    des: "Washing Service",
  },
];
function RightPanel() {
  return (
    <div className="right-panel">
      <h4>Channel Details</h4>
      <div className="right-card position-relative">
        <div className="profile-img">
          <img src={Profile} alt="banner" className="img-fluid" />
          <span>220+</span>
        </div>
        <img src={BannerImg} alt="banner" className="img-fluid" />
        <div className="card-content">
          <h6>Channel Title goes here...</h6>
          <p className="card-title">Services:</p>
          <p className="card-des mb-0">
            Cleaning, Baby Sitter, Shop Manage, Admin
          </p>
        </div>
      </div>
      <div>
        <h4 className="mt-4 mb-3">Select Services</h4>
        <ServiceCard data={data} />
      </div>
    </div>
  );
}

export default RightPanel;
