import React from "react";
import "./Footer.scss";

const data = [
  {
    title: "Quick Lines",
    data: ["About", "Contact Us", "Faq", "Help"],
  },
  {
    title: "Services",
    data: ["Computer Repair", "Interior", "Car Wash", "Cleaning"],
  },
  {
    title: "Popular Channels",
    data: [
      "Channel Link 1",
      "Channel Link 2",
      "Channel Link 3",
      "Channel Link 4",
    ],
  },
];
function Footer() {
  return (
    <div className="container-fluid footer-main">
      <div className="container">
        <div className="row py-4">
          {data.map((d) => (
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="d-flex flex-column gap-2 pt-3">
                <h5>{d.title}</h5>
                {d.data.map((e) => (
                  <span>{e}</span>
                ))}
              </div>
            </div>
          ))}
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="d-flex flex-column gap-2 pt-3">
              <h5>Contact Us</h5>
              <div className="fw-bold fw-white">
                Adderss:{" "}
                <span>
                  367367 Hillcrest Lane, Irvine, California, United States
                </span>
              </div>
              <div className="fw-bold fw-white">
                Phone: <span>321 546 8764</span>
              </div>
              <div className="fw-bold fw-white">
                Email: <span>info@enterprise.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-4">
          <div className="col-12">
            <div className="d-flex align-items-center gap-2">
              <span className="-mt-1">&#169;</span>
              <span>2021 GrandWire. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
