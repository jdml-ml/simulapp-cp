import React, { useState } from 'react';
import './dropdown.css';

const Dropdown = ({ label, options, onSelectedOption }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    onSelectedOption(event.target.value)
  };

  return (
    <div className="dropdown-container">
      <span className="dropdown-label">{label}</span>
      <select
        className="dropdown-select"
        value={selectedOption}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
