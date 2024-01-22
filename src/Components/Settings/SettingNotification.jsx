import React, { useState } from "react";

export default function SettingNotification() {
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(true);
  const [isChecked3, setIsChecked3] = useState(true);

  const handleToggle1 = () => {
    setIsChecked1(!isChecked1);
  };
  const handleToggle2 = () => {
    setIsChecked2(!isChecked2);
  };
  const handleToggle3 = () => {
    setIsChecked3(!isChecked3);
  };
  return (
    <>
      <div className="noitificationHeadDiv">
        <h1>Announcements</h1>
        <div className="d-flex">
          <input
            type="checkbox" className="checkInput"
            id="switch1"
            checked={isChecked1}
            onChange={handleToggle1}
          />
          <label htmlFor="switch1" className={` checkInputLabel ${isChecked1 ? "checked" : ""}`}>
            Toggle
          </label>
        </div>
      </div>
      <div className="noitificationHeadDiv">
        <h1>Special Offers</h1>
        <div className="d-flex">
          <input
            type="checkbox" className="checkInput"
            id="switch2"
            checked={isChecked2}
            onChange={handleToggle2}
          />
          <label htmlFor="switch2" className={` checkInputLabel ${isChecked2 ? "checked" : ""}`}>
            Toggle
          </label>
        </div>
      </div>
      <div className="noitificationHeadDiv">
        <h1>Request Payments</h1>
        <div className="d-flex">
          <input
            type="checkbox" className="checkInput"
            id="switch3"
            checked={isChecked3}
            onChange={handleToggle3}
          />
          <label htmlFor="switch3" className={` checkInputLabel ${isChecked3 ? "checked" : ""}`}>
            Toggle
          </label>
        </div>
      </div>
    </>
  );
}
