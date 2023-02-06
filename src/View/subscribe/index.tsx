import React, { useState } from "react";
import Banner from "./banner/Banner";
import BreadCrums from "./breadCrums/BreadCrums";
import Table from "./table/Table";
import AddLocation from "./addLocation/AddLocation";
import RightPanel from "./rightPanel/RightPanel"
import "./index.scss";
import CustomModal from "../../components/Modal/Modal";

function Subscribe() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="app-bg">
        <div className="container">
          <BreadCrums />
          <div className="row">
            <div className="col-sm-12 col-md-7 col-lg-8">
              <Banner />
              <Table />
              <AddLocation />
            </div>
            <div className="col-sm-12 col-md-5 col-lg-4">
              <div>
                <RightPanel />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button
                type="button"
                className="btn btn-secondary px-4 text-nowrap mt-5 mt-md-0"
                onClick={() => setModalShow(true)}
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <CustomModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </>
  );
}

export default Subscribe;
