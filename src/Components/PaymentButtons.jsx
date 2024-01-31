import React, { useState, useEffect } from "react";
import logos_visa from "/src/assets/images/logos_visa.svg";
import logos_bitcoin from "/src/assets/images/logos_bitcoin.svg";
import bank_transfer from "/src/assets/images/mdi_bank-transfer.svg";
import mobile_phone from "/src/assets/images/emojione-v1_mobile-phone.svg";
import logos_paypal from "/src/assets/images/logos_paypal.svg";

export default function PaymentButtons({ onSelect }) {
  const [selectedButton, setSelectedButton] = useState(0);

  useEffect(() => {
  }, [selectedButton]);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
    onSelect && onSelect(buttonIndex);
  };
  return (
    <div className="row">
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
        <button className={`paymentCards ${selectedButton === 0 ? "btnSelected" : ""}`}
            onClick={() => handleButtonClick(0)}>
            <img src={logos_visa} alt="" />
            <p>Visa / Master Card</p>
        </button>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
      <button className={`paymentCards ${selectedButton === 1 ? "btnSelected" : ""}`} onClick={() => handleButtonClick(1)}>
        <img src={logos_bitcoin} alt="" />
        <p>Cryptocurrency</p>
      </button>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
        <button className={`paymentCards ${selectedButton === 2 ? "btnSelected" : ""}`} onClick={() => handleButtonClick(2)}>
            <img src={bank_transfer} alt="" />
            <p>Bank Transfer</p>
        </button>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
        <button className={`paymentCards ${selectedButton === 3 ? "btnSelected" : ""}`}
            onClick={() => handleButtonClick(3)}>
            <img src={mobile_phone} alt="" />
            <p>Mobile Money</p>
        </button>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
        <button className={`paymentCards ${selectedButton === 4 ? "btnSelected" : ""}`}
            onClick={() => handleButtonClick(4)}>
            <img src={logos_paypal} alt="" />
            <p>Paypal</p>
        </button>
      </div>
    </div>
  );
}
