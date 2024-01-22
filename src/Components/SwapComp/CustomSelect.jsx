import React, { useState } from 'react';

const CustomSelect = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Etherem');
  const languages = ['Etherem', 'USD', 'EUR', 'AED', 'AUD', 'CAD', 'JPY', 'MDL', 'GBP'];

  const toggleOptions = () => {
    setIsActive(!isActive);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsActive(false);
  };

  return (
    <div className={`swap_select_box ${isActive ? 'active' : ''}`}>
      <div className="swap_selected_option" onClick={toggleOptions}>
        <span>{selectedOption}</span>
        <i className={`bx ${isActive ? 'bx-chevron-up' : 'bx-chevron-down'} swap_select_box_icon`}></i>
      </div>
      <div className={`swap_option_container ${isActive ? 'containerActive' : ''}`}>
        {languages.map((language, index) => (
          <div key={index} className={`swap_option_li ${selectedOption === language ? 'selected' : ''}`} onClick={() => handleOptionClick(language)}>
            {language}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
