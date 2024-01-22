import React, { useState } from "react";

export default function ProfileForm() {
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberConfirmation, setPhoneNumberConfirmation] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleInputChange = (e, setter, confirmationSetter) => {
    const value = e.target.value;
    const name = e.target.name;

    setter(value);

    if (confirmationSetter) {
      confirmationSetter(!!value);
    }

    if (name === "email") {
      if (!isValidEmail(value)) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("Email address confirmed");
      }
    }

    if (name === "phoneNumber") {
      if (!isValidPhoneNumber(value)) {
        setPhoneNumberError("Invalid phone number");
      } else {
        setPhoneNumberError("Phone number confirmed");
      }
    }
  };

  const isValidEmail = (email) => {
    const emailPattern =
      /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailPattern.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    return phoneNumber.trim() !== "" && /^\d+$/.test(phoneNumber);
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setEmailError("Email confirmation pending");
    } else {
      setEmailError("Email address confirmed");
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      setPhoneNumberError("Invalid phone number");
    } else {
      setPhoneNumberError("Phone number confirmed");
    }
  };

  return (
    <div className="profileForm">
      <form>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="mb-3">
              <label htmlFor="" className="form-label formLabel">
                First Name
              </label>
              <input
                type="text"
                className="form-control formInput"
                id=""
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="mb-3">
              <label htmlFor="" className="form-label formLabel">
                Last Name
              </label>
              <input
                type="text"
                className="form-control formInput"
                id=""
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="mb-3">
              <div className="labelDiv">
                <label className="form-label formLabel">Email Address</label>
                {emailError && (
                  <label
                    className="form-label formLabel"
                    style={{
                      color: emailError.includes("confirmed")
                        ? "#49c96d"
                        : "#e4605f",
                    }}
                  >
                    {emailError}
                  </label>
                )}
              </div>
              <input
                type="email"
                className="form-control formInput"
                id="emailInput"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) =>
                  handleInputChange(e, setEmail, setEmailConfirmation)
                }
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="mb-3">
              <div className="labelDiv">
                <label className="form-label formLabel">Phone Number</label>
                {phoneNumberError && (
                  <label
                    className="form-label formLabel"
                    style={{
                      color: phoneNumberError.includes("confirmed")
                        ? "#49c96d"
                        : "#e4605f",
                    }}
                  >
                    {phoneNumberError}
                  </label>
                )}
              </div>
              <input
                type="tel"
                className="form-control formInput"
                id="phoneNumberInput"
                name="phoneNumber"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) =>
                  handleInputChange(
                    e,
                    setPhoneNumber,
                    setPhoneNumberConfirmation
                  )
                }
              />
            </div>
          </div>
        </div>
        <div className="d-flex">
          <button className="formSaveButton" onClick={handleSaveChanges}>
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
