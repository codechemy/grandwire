import React, { useState } from "react";
import "./ChannelTitle.scss";
import { IoMdStar } from "react-icons/io";
import { SlPencil } from "react-icons/sl";

import Placeholder1 from "../../assets/img/Placeholder1.png";
import Image from "../../assets/img/profile_small.png";
import { useNavigate } from "react-router-dom";
import profileicon from "../../assets/img/profile_small.png";

function ChannelTitle() {
  let navigate = useNavigate();
  const [select, setSelect] = useState<any>([]);
  const [page, setPage] = useState(false);
  const tittle: any = [
    {
      tittle: "Home Care",
      num: "3.4",
    },
    { tittle: "Medical Supplies", num: "4.4" },
    { tittle: "Photography", num: "3.8" },
    { tittle: "Granding", num: "4.8" },
    { tittle: "Electric services", num: "4.2" },
    { tittle: "Laundry", num: "4.0" },
  ];
  const handleSelect = (check: boolean | any, index: number | any) => {
    setPage(true);
    if (check) {
      setSelect([...select, index]);
    } else {
      setSelect([...select.filter((value: any) => value != index)]);
    }
  };
  console.log("select", select);
  return (
    <>
      <div className="d-lg-flex  px-5 justify-content-between mt-2">
        <div className="d-lg-flex align-items-center">
          <div className="titlle h2">Home Services..</div>
          <div className="ms-3 free-btn h7 d-inline d-lg-block mb-5 mt-5">
            free
          </div>
          <div className="ms-3 h7">$9.99 / Month</div>
        </div>
        <div className="d-flex align_center">
          <div className="">
            <img src={profileicon} className="profile-icon" />
            <span className="mt-4">220 +</span>
          </div>
          <div className=" ms-2 security-batch_private">Private</div>
        </div>
      </div>
      <div className="d-lg-flex card-height p-5">
        <div className="col-lg-8 col-12 pr-30 pb-5 pb-md-0">
          {" "}
          <img src={Placeholder1} className="img" />
        </div>
        <div className="col-lg-4 col-12 description-card shadow-lg">
          <div className="p-3 h3">Channel discription</div>
          <div className="ms-3 txt-grey1 h8">
            You must provide a detailed feedback of the indiuals questions
            lifeback parameters and detilas mentioned below.in case your score
            less than 80 pecent,bu give detailed feed back you may be paid a
            amount as per your score
          </div>
          <div className="ms-3 mt-2  h7">
            - Must have good physical fitness and hygenic
          </div>
          <div className="ms-3 mt-2  h7">- Atleast ten years of experience</div>
          <div className="ms-3 mt-2  h7">
            - Qualified and triend healthcare experts
          </div>
          <div className="ms-3 mt-2  h7">
            - Check for fitness and tick daily warm weather
          </div>
          <div className="ms-3 mt-2  h7">
            - Must have good physical fitness and hygenic
          </div>
          <div className="ms-3 mt-2  h7">
            - Qualified and triend healthcare experts
          </div>
        </div>
      </div>
      <div className="p-5 ">
        <div className="titlle h4">
          Select All The Services That you provide!
        </div>
        <div className="d-lg-flex flex-wrap justify-content-evenly">
          {tittle.map(
            (
              item: {
                tittle:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
                num:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined;
              },
              index: any
            ) => (
              <div
                className={`rounded d-lg-flex  col-lg-5  col-12 p-2 align-items-center mt-4 card-radius ${
                  select.includes(index) ? "bg-box" : "bg-white"
                }`}
              >
                <div className="d-lg-flex align-items-center">
                  <div className="card-img">
                    <img src={Placeholder1} className="card-images" />
                  </div>
                  <div>
                    <div className="d-flex ">
                      <div className="mt-1 ms-2 font  h5 txt-head">
                        {item.tittle}
                      </div>
                      <div className="ms-2 ">
                        <IoMdStar />
                      </div>
                      <span className="ms-1 mt-1 h6">{item.num}</span>
                      <div className="ms-3">
                        <SlPencil />
                      </div>
                    </div>
                    <div className=" ms-2 txt-grey1 h7">
                      You must provide detailed feedback for the indiuals
                      questions,parameters and details
                    </div>
                  </div>
                </div>
                <div>
                  <div className="form-check ms-3 pe-2 ">
                    <input
                      className="form-check-input chk-box"
                      type="checkbox"
                      checked={select.includes(index)}
                      onChange={(e) => {
                        // setSelect(index);
                        {
                          console.log("eeee", e.target.checked);
                        }
                        handleSelect(e.target.checked, index);
                      }}
                      id="flexCheckDefault"
                    />
                    <label
                      className="font h6 txt-head"
                      htmlFor="flexCheckDefault"
                    >
                      {select.includes(index) ? "SELECTED" : "SELECT"}
                    </label>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="mt-4 m-auto text-center">
          <button
            className="btn btn-secondary  mx-auto btn-colr"
            type="submit"
            onClick={() => (page ? navigate("/channelsubscription") : "")}
          >
            {select.length} Services Selected - Next
          </button>
        </div>
      </div>
    </>
  );
}

export default ChannelTitle;
