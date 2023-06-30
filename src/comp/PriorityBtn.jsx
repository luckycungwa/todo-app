import React from "react";
import { useState } from "react";

function PriorityBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`round-option-button${isOpen ? ' open' : ''}`}>
      <button className="button-outline" onClick={handleClick}></button>
      {isOpen && (
        <div className="children-container">
          <div className="child low"></div>
          <div className="child medium"></div>
          <div className="child high"></div>
        </div>
      )}
    </div>
  );
};

export default PriorityBtn;
