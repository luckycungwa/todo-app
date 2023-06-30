import React from "react";
import { useState } from "react";

function PriorityBtn() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      {/* Option button for selecting priority and category */}
      <div className="priority-btn">
        <div
          className={`option ${selectedOption === "high" ? "high" : ""}`}
          onClick={() => handleOptionClick("high")}
        ></div>
        <div
          className={`option ${selectedOption === "low" ? "low" : ""}`}
          onClick={() => handleOptionClick("low")}
        ></div>
        <div
          className={`option ${selectedOption === "medium" ? "medium" : ""}`}
          onClick={() => handleOptionClick("medium")}
        ></div>
      </div>
    </>
  );
}

export default PriorityBtn;
