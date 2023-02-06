import React from "react";

function AddLocation() {
  return (
    <div className="banner-wrapper">
      <div className="d-flex justify-content-between gap-4 align-items-center pb-2">
        <h4 className="mb-0 pb-0">Add Services Locations</h4>
        <button type="button" className="btn btn-secondary px-3">
          ADD MORE LOCATION
        </button>
      </div>
      <p>
        if you have the same service in others location so please add the
        locations...
      </p>
      <input type="text" placeholder="Location" className="gray-input" />
    </div>
  );
}

export default AddLocation;
