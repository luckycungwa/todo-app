import React from "react";
import { useState } from "react";

function Items({ todo, onDelete }) {
  //Creating states for when the task is complete
  const [taskDone, setTaskDone] = useState(false);

  const handleComplete = () => {
    // use states if statement
    setTaskDone(!taskDone);
  };
  return (
    <>
      {/* THE ITEM COMPONENTS HERE */}
      {/* This is where each item (Index) from the array will be displayed */}
      <div className="">
        <div className="todo-item">
          <div className="category" />
          {/* Display the value recorded on the user input */}
          <p>{todo.value}</p>
          {/* components for functionality (DELETE | EDIT | MARK AS COMPLETE) */}
          <div className="">
            <button className="" onClick={handleComplete}>
              {/* When the user clicks the button it should alternate between "complete" vs "incomplete" */}
              {/* id statement to check current state */}
              {taskDone ? <img src=""></img> : "Pendig"}
            </button>
          </div>
          <div className=""></div>
          {/* Delete corresponding task */}
          <button
            className="delete unbutton"
            onClick={() => onDelete(todo.id)}
          ></button>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Items;
