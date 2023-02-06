import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Success from "../../assets/img/Success.png";
import "./Modal.scss";
import { useNavigate } from "react-router-dom";
function CustomModal(props: any) {
  const navigate = useNavigate();
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="w-70"
      >
        <Modal.Body className=" text-center">
          <img src={Success} className="img-wd" />
          <h4>Your Profile is Approved!</h4>
          <p className="txt-grey1 mt-3">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam.
          </p>
          <Button onClick={() => navigate("/user-profile")} className="btn-clr">
            CONTINUE
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default CustomModal;
