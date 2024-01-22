// OTPInput.js
import React, { useState, useRef, useEffect } from "react";

const OTPInput = ({ length }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const [currentInput, setCurrentInput] = useState(0);
  const otpInputs = useRef([]);

  useEffect(() => {
    otpInputs.current[0].focus();
  }, []);

  const handleInputChange = (index, value) => {
    if (!isNaN(value) && value !== "") {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        return newOtp;
      });

      if (index < length - 1 && value !== "") {
        setCurrentInput(index + 1);
        otpInputs.current[index + 1].focus();
      }
    }
  };

  const handleInputKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = "";
        return newOtp;
      });

      setCurrentInput(Math.max(index - 1, 0));
      otpInputs.current[Math.max(index - 1, 0)].focus();
    }
  };

  const handleInputPaste = (e) => {
    const pastedData = e.clipboardData.getData("text/plain");
    if (/^\d+$/.test(pastedData)) {
      const newOtp = Array(length).fill("");
      pastedData.split("").forEach((digit, index) => {
        if (index < length) {
          newOtp[index] = digit;
        }
      });
      setOtp(newOtp);
      setCurrentInput(Math.min(pastedData.length, length - 1));
    }
  };

  return (
    <div className="otpInputDiv01">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          className="otpInput01"
          maxLength="1"
          value={digit}
          onChange={(e) => handleInputChange(index, e.target.value)}
          onKeyDown={(e) => handleInputKeyDown(index, e)}
          onPaste={(e) => handleInputPaste(e)}
          ref={(input) => (otpInputs.current[index] = input)}
          style={{
            borderBottom:
              currentInput === index ? "1px solid #2C415A" : "1px solid #b9b9b9",
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput;
