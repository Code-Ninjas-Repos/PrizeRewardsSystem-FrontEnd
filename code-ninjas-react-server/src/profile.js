import React, { useState } from "react";
import "./styles.css";
import "./profile.css";

const Profile = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showScanMessage, setShowScanMessage] = useState(false); 
  const [buttonActive, setButtonActive] = useState(false); 

  const handleRemoveTagClick = () => {
    if (!buttonActive) {
      setShowConfirm(true);
      setButtonActive(true);
    }
  };

  const handleAddTagClick = () => {
    if (!buttonActive) {
      setShowScanMessage(true);
      setButtonActive(true);
    }
  };

  const handleCancelScan = () => {
    setShowScanMessage(false);
    setButtonActive(false);
  };

  const handleConfirmYes = () => {
    setShowConfirm(false);
    setButtonActive(false);
  };

  const handleConfirmNo = () => {
    setShowConfirm(false);
    setButtonActive(false);
  };

  return (
    <div className="home-container">
      <h1 className="custom-font-admin center-text">Profile Page</h1>
      <div className="admin-container">
        <div className="heading-container">
          <h2>Add or Remove Wristbands</h2>
        </div>
        <div className="form-container">
          <div className="name-input-container">
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter student's first name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter student's last name"
                required
              />
            </div>
          </div>
          <div
            className={`button-group ${showConfirm ? "show-confirmation" : ""}`}
          >
            <div className="tag-buttons">
              <button
                className={`add-tag-button ${buttonActive ? "disabled" : ""}`}
                onClick={handleAddTagClick}
                disabled={buttonActive}
              >
                Add Tag
              </button>
              <button
                className={`remove-tag-button ${buttonActive ? "disabled" : ""}`}
                onClick={handleRemoveTagClick}
                disabled={buttonActive}
              >
                Remove Tag
              </button>
            </div>
            {showConfirm && (
              <div className="confirmation-container">
                <p>Are you sure you want to remove tag?</p>
                <div className="confirmation-buttons">
                  <button
                    className="confirm-yes-button"
                    onClick={handleConfirmYes}
                  >
                    Yes
                  </button>
                  <button
                    className="confirm-no-button"
                    onClick={handleConfirmNo}
                  >
                    No
                  </button>
                </div>
              </div>
            )}
            {showScanMessage && (
              <div className="scan-message-container">
                <p>Ready to scan wristband</p>
                <div className="scan-cancel">
                  <button className="cancel-scan-button" onClick={handleCancelScan}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;