import React, { useState } from "react";
import "./UserProfile.scss";
import userProfile from "../../assets/img/profile_small.png";
import edit from "../../assets/img/edit.png";
import HomeIcon from "../../assets/img/home.png";
import setting from "../../assets/img/set.png";
import security from "../../assets/img/security.png";

function UserProfile() {
  const [tabSwitch, setTabSwitch] = useState(false);
  const [password, setPassword] = useState(false);
  return (
    <>
      <div className="app_background">
        <div className="profile_container">
          <div className="profile_icon_container mt-4">
            <img src={userProfile} />
            <img src={edit} className="edit_icon" />
          </div>
          <div className="heading_container">
            <h6>
              Zean Ronen (Provider) <img src={HomeIcon} width={23} />
            </h6>
            <div className="txt">
              Update your username and manage your account
            </div>
          </div>
          <div className="bar_container">
            <div
              className="tab_border"
              onClick={() => setTabSwitch(!tabSwitch)}
              style={!tabSwitch ? { borderBottom: "1px solid #023878" } : {}}
            >
              <div className="tab_container" onClick={() => setPassword(false)}>
                <img src={setting} width={20} /> Account
              </div>
            </div>
            <div
              className="tab_border"
              onClick={() => setTabSwitch(!tabSwitch)}
              style={tabSwitch ? { borderBottom: "1px solid #023878" } : {}}
            >
              <div className="tab_container" onClick={() => setPassword(true)}>
                <img src={security} width={19} />
                Password & Security
              </div>
            </div>
          </div>

          {!tabSwitch ? (
            <div className="tab1">
              <div className="row mb-4">
                <div className="col-md-6 col-sm-12">
                  <div className="form-field">
                    <div className="form-label">First Name</div>
                    <div className="input-fontainer">
                      <input type="text" className="gray-input" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-field">
                    <div className="form-label">Last Name</div>
                    <input type="text" className="gray-input" />
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-6 col-sm-12">
                  <div className="form-field">
                    <div className="form-label">Your Email</div>
                    <div className="input-fontainer">
                      <input type="text" className="gray-input" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-field">
                    <div className="form-label">House of Operation</div>
                    <input type="text" className="gray-input" />
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-6 col-sm-12">
                  <div className="form-field">
                    <div className="form-label">Country Code</div>
                    <div className="input-fontainer">
                      <input type="text" className="gray-input" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-field">
                    <div className="form-label">Phone Number</div>
                    <input type="text" className="gray-input" />
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-6 col-sm-12">
                  <div className="form-field">
                    <div className="form-label">Time Zone</div>
                    <div className="input-fontainer">
                      <input type="text" className="gray-input" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-field">
                    <div className="form-label">Web Address</div>
                    <input type="text" className="gray-input" />
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-12 col-sm-12">
                  <div className="form-field">
                    <div className="form-label">Address</div>
                    <input type="text" className="gray-input" />
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-12 col-sm-12">
                  <div className="form-field">
                    <div className="form-label">Description</div>
                    <textarea className="gray-input text-area" />
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-12 col-sm-12">
                  <div className="form-field">
                    <div className="form-label">Availability Message</div>
                    <textarea className="gray-input text-area" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="tab1">
              <div className="row mb-4">
                <div className="col-md-6 col-sm-12">
                  <div className="form-field">
                    <div className="form-label">Old Password</div>
                    <div className="input-fontainer">
                      <input type="text" className="gray-input" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-field">
                    <div className="form-label">New Passoword</div>
                    <input type="text" className="gray-input" />
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-6 col-sm-12">
                  <div className="form-field">
                    <div className="form-label">Confirm New Password</div>
                    <div className="input-fontainer">
                      <input type="text" className="gray-input" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="col-sm-6">
                    <div className="word">
                      {
                        "(must have one upper case character,must include a number(etc))"
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="row margin-top-form">
            <div className="col-12">
              <button
                type="button"
                className="btn btn-secondary px-4 text-nowrap  mt-md-0 "
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
