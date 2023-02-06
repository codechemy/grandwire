import React from "react";
import ImgPlaceholder from "../../../assets/img/image_placeholder.png";
import AddImg from "../../../assets/img/add.png";

function ServiceCard(pros:any) {

  return (
    <>
      {pros.data?.map((d : any) => (
        <div className="service-card mb-3">
          <div className="d-flex gap-3 align-items-center">
            <img src={ImgPlaceholder} alt="img" className="img-fluid" />
            <div className="service-text">
              <span className="title text-nowrap">{d.title}</span>
              <span className="des">{d.des}</span>
            </div>
          </div>
        </div>
      ))}
      <div className="service-card mb-3">
        <div className="d-flex gap-3 align-items-center">
          <img src={AddImg} alt="img" className="img-fluid" />
          <div className="service-text">
            <span className="title text-nowrap">Add More Service</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
