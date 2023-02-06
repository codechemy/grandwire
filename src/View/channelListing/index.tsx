import React, { useState } from "react";
import Profile from "../../assets/img/profile_small.png";
import BannerImg from "../../assets/img/placeh.png";
import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";

import "./index.scss";

const data = [
  {
    profile: "220+",
    sub: "Free",
    security: "Private",
    price: "",
  },
  {
    profile: "120+",
    sub: "Paid",
    security: "Public",
    price: "$1.23",
  },
  {
    profile: "210+",
    sub: "Free",
    security: "Public",
    price: "",
  },
  {
    profile: "320+",
    sub: "Paid",
    security: "Private",
    price: "$2.34",
  },
  {
    profile: "220+",
    sub: "Free",
    security: "Private",
    price: "",
  },
  {
    profile: "410+",
    sub: "Paid",
    security: "Public",
    price: "$6.43",
  },
  {
    profile: "130+",
    sub: "Free",
    security: "Private",
    price: "",
  },
  {
    profile: "220+",
    sub: "Free",
    security: "Public",
    price: "",
  },
  {
    profile: "310+",
    sub: "Free",
    security: "Private",
    price: "",
  },
];

function CustomListing() {
  let navigate = useNavigate();
  const [subscribed, setSubscribed] = useState<any>([]);

  const handleSubcribed = (i: {
    profile: string;
    sub: string;
    security: string;
    price: string;
  }) => {
    setSubscribed((prevState: any) => {
      const subscribed = [...prevState, i];
      return subscribed;
    });
  };

  const handleUnSubscribe = (d: {
    profile: string;
    sub: string;
    security: string;
    price: string;
  }) => {
    const filter = subscribed.filter(
      (res: {
        profile: string;
        sub: string;
        security: string;
        price: string;
      }) => res !== d
    );
    setSubscribed(filter);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h3>All Channels</h3>
            <p>Explore the greates our service. You won't be disappointed</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {data.map((d) => (
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="channel-card position-relative my-3">
                <div
                  className="profile-img"
                  onClick={() => navigate("/channelTitle")}
                >
                  <img src={Profile} alt="banner" className="img-fluid" />
                  <span>{d.profile}</span>
                </div>
                <div
                  className="subscribe_status"
                  onClick={
                    subscribed.includes(d)
                      ? () => handleUnSubscribe(d)
                      : () => handleSubcribed(d)
                  }
                >
                  {subscribed.includes(d) ? (
                    <TiTick className="Tickicon" />
                  ) : null}
                  {subscribed.includes(d) ? "Subscribed" : "Subscribe"}
                </div>

                <div className="security-batch">{d.security}</div>
                <div className="text-center cursor" />
                <img src={BannerImg} alt="banner" className="img-fluid" />
                <div className="card-content">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h6 className="mb-0">Home Services</h6>
                    <div className="batch">{d.sub}</div>
                  </div>
                  <p className="card-title">Services:</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="card-des mb-0">
                      Cleaning, Baby Sitter, Shop Manage, Admin
                    </p>
                    <span className="fw-bold h-17">{d.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CustomListing;
