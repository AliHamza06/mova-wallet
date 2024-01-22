import React, { useState } from "react";

const SelectComponent = ({ label, options, zIndex, width, className, defaultSelected }) => {
  const [selectedOption, setSelectedOption] = useState(defaultSelected || options[0]);
  const [optionContainerActive, setOptionContainerActive] = useState(false);

  const toggleOptionContainer = () => {
    setOptionContainerActive(!optionContainerActive);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setOptionContainerActive(false);
  };

  return (
    <div className={`select_box ${className}`} style={{ zIndex: zIndex, width: width }}>
      <div className="selected_option" onClick={toggleOptionContainer}>
        <span>{selectedOption}</span>
        <i className={`bx ${optionContainerActive ? 'bx-chevron-up' : 'bx-chevron-down'} select_box_icon`}></i>
      </div>
      <div className={`option_container ${optionContainerActive ? 'active' : ''}`}>
        {options.map((option, index) => (
          <div
            key={index}
            className={`option_li ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const options1 = ["23 Nov 2021 - 21 Feb 2022", "23 Nov 2022 - 21 Feb 2023", "23 Nov 2023- 21 Feb 2024"];
  const options2 = ["Balance", "Option A", "Option B"];
  const options3 = ["All Filters", "Option A", "Option B"];

  return (
    <div className="selectorDiv01">
      <SelectComponent label="Date Range" options={options1} zIndex={20} className="custom-select-1" defaultSelected={options1["23 Nov 2021 - 21 Feb 2022"]} />
      <SelectComponent label="Options" options={options2} zIndex={18} className="custom-select-2" defaultSelected={options2["Balance"]} />
      <SelectComponent label="Categories" options={options3} zIndex={16} className="custom-select-3" defaultSelected={options3["All Filters"]} />
      <a href="#">
        <button className="clearFilterBtn">Clear Filters</button>
      </a>
    </div>
  );
};

export default App;
