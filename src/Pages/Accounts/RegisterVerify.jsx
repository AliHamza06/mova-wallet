import React from "react";
import otpImg from "/src/assets/images/OTP 1.png";
import OTPInput from "../../Components/Accounts/OTPInput";
import { Link } from 'react-router-dom'
export default function RegisterVerify() {
  return (
    <div className="accountsMainSection">
      <div className="accountsSection01">
        <div className="formContentDiv01">
          <h2>Register Yourself</h2>
          <p>Please enter your email and password to register your account.</p>
          <form action="" className="accountForm01">
            <input
              type="text"
              name=""
              className="form-control accountsInput"
              placeholder="Type email / Phone Number"
            />

            <input
              type="password"
              name=""
              className="form-control accountsInput"
              placeholder="Type password"
            />

            <input
              type="password"
              name=""
              className="form-control accountsInput"
              placeholder="Confirm Password"
            />

            <Link to="/forgot-password">
              <button className="accountButton01">Register</button>
            </Link>
          </form>
        </div>
      </div>
      <div className="accountsSection02">
        <div className="formContentDiv02">
          <div className="otpImgDiv">
            <img src={otpImg} alt="" />
          </div>
          <h3>OTP Verification</h3>
          <p>
            Enter the OTP sent to <span>+91 987987333</span>
          </p>
          <div>
            <OTPInput length={4} />
          </div>
          <h6>
            Didn’t you receive the OTP? <a href="#">Resend OTP</a>
          </h6>
          <a href="#">
            <button className="accountButton02">Verify</button>
          </a>
        </div>
      </div>
    </div>
  );
}
