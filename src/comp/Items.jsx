import React from "react";
import { useState } from "react";

function Items({ todo, onDelete }) {
  //Creating states for when the task is complete
  const [taskDone, setTaskDone] = useState(false);
  // priority states: default priority is 1, then now we check the 2 remaining priorities

  // const [priority, setPriority] = useState(false);

  const handleComplete = () => {
    // use states if statement
    setTaskDone(!taskDone);
  };
  // handle the priuority states
  // const handlePriority = () => {
  //   // use states the priority is urgent or important (alternate between these states)
  //   setPriority(!priority);
  // };

  return (
    <>
      {/* THE ITEM COMPONENTS HERE */}
      {/* This is where each item (Index) from the array will be displayed contentEditable="plaintext-only"*/}
      <div>
        <div className="todo-item">
          {/* Check box for checking if state/ task is done or pending */}
          <div className="category">
            <button className="unbutton" onClick={handleComplete}>
              {/* id statement to check current state using images */}
              {taskDone ? (
                <img className="check" src="/icon-done.png" alt="done" />
              ) : (
                <img className="check" src="/icon-pending.png" alt="pending" />
              )}
            </button>
          </div>
          {/* Use content-editable as a cheaper approach not sure how it will affect the searh function: {priority ? "priority1" : "priority2"} */}
          <div>
            <p className={taskDone ? "strike" : ""}>{todo.value}</p>

          </div>
          
          {/* priority buttons */}
          <div className="">
                  <div className="icon-s drak-blue"></div>
                  <div className="icon-s drak-blue"></div>
                  <div className="icon-s drak-blue"></div>
                  <div className="icon-s drak-blue"></div>
                </div>

          {/* Delete corresponding task */}
          <button className="delete" onClick={() => onDelete(todo.id)}>
            <img className="icon-s" src="/icon-delete.png" alt="remove" />
          </button>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Items;
