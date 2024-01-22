import React, { useState } from "react";

export default function ChangePassword() {
  // State variables to store current password, new password, confirm password, and error messages
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  // Function to handle form submission
  const handleSaveChanges = (e) => {
    e.preventDefault();
    let errors = {
      currentPassword: currentPassword.trim() ? "" : "Current Password is required",
      newPassword: newPassword.trim() ? "" : "New Password is required",
      confirmNewPassword:
        confirmNewPassword.trim()
          ? newPassword === confirmNewPassword
            ? ""
            : "Passwords do not match"
          : "Confirm New Password is required",
    };

    setErrorMessages(errors);

    if (Object.values(errors).every((error) => error === "")) {
      console.log("Changes saved successfully!");
    }
  };

  return (
    <>
      <div className="settingHeadingDiv">
        <h5>Change Password</h5>
        <p>
          You can always change your password for security reasons or reset your
          password in case you forgot it.
        </p>
      </div>
      <form onSubmit={handleSaveChanges}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="mb-3">
              <div className="labelDiv">
                <label className="form-label formLabel">Current Password</label>
                <label className="form-label formLabel inputError">
                  {errorMessages.currentPassword}
                </label>
              </div>
              <input
                type="password"
                className="form-control formInput"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="mb-3">
              <div className="labelDiv">
                <label className="form-label formLabel">New Password</label>
                <label className="form-label formLabel inputError"> </label>
              </div>
              <input type="password" className="form-control formInput" placeholder="New Password"/>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="mb-3">
              <div className="labelDiv">
                <label className="form-label formLabel">Confirm New Password</label>
                <label className="form-label formLabel inputError"> </label>
              </div>
              <input type="password" className="form-control formInput" placeholder="Confirm New Password"/>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <button type="submit" className="formSaveButton">
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
}
