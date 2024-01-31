import React, { useState } from 'react';

const PaymentSelect = ({ selectedOption, onSelect }) => {
  const [isActive, setIsActive] = useState(false);
  const currencies = [
    'ETH',
    'USDT',
    'BNB',
    'BTC',
  ];
  

  const toggleOptions = () => {
    setIsActive(!isActive);
  };

  const handleOptionClick = (option) => {
    setIsActive(false);
    onSelect && onSelect(option);
  };


  return (
    <div className={`swap_select_box ${isActive ? 'active' : ''}`}>
      <div className="swap_selected_option formInput formInputSelect" onClick={toggleOptions}>
        <span>{selectedOption}</span>
        <i
          className={`bx ${isActive ? 'bx-chevron-up' : 'bx-chevron-down'} swap_select_box_icon`}
        ></i>
      </div>
      <div className={`swap_option_container ${isActive ? 'containerActive' : ''}`}>
        {currencies.map((currency, index) => (
          <div
            key={index}
            className={`swap_option_li ${selectedOption === currency ? 'selected' : ''}`}
            onClick={() => handleOptionClick(currency)}
          >
            {currency}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentSelect;
