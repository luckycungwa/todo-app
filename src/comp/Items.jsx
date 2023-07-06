import React from "react";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"; //adding & fetching data functions
import { db } from "../config/firebase";

function Items({ todo, onDelete, setTodos }) {
  //Creating states for when the task is complete
  const [taskDone, setTaskDone] = useState(false);
  // priority states: default priority is 1, then now we check the 2 remaining priorities

  const [isEdit, setIsEdit] = useState(false);
  

  

  const handleComplete = () => {
    // use states if statement
    setTaskDone(!taskDone);
  };

  // handle the user updating info states
  const handleEdit = () => {
    //
    setIsEdit(!isEdit);
  };

   //FIRESTORE
   useEffect(() => {
    getTaskData();
    
  });

  const getTaskData = async () => {
    try {
      const querySnapShot = await getDocs(collection(db, "todoList"));
      const data = querySnapShot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      //Retrieve and set data from the Database | update state
      setTodos(data);

    } catch (error) {
      alert("Check for errors!");
    }
  };
  
  return (
    <>
      {/* This is where each item (Index) from the array will be displayed contentEditable="plaintext-only"*/}
      <div className="form">
        {/* Delete corresponding task */}
        <div className="btn-section">
          {/* task listing below */}
          <div className="todo-item">
            
            {/* Check box for checking if state/ task is done or pending */}
            <div className="checker">
              <button className="unbutton" onClick={handleComplete}>
                {/* id statement to check current state using images */}
                {taskDone ? (
                  <img className="check" src="/icon-done.png" alt="done" />
                ) : (
                  <img
                    className="check"
                    src="/icon-pending.png"
                    alt="pending"
                  />
                )}
              </button>
            </div>
            {/* Use content-editable as a cheaper approach not sure how it will affect the searh function: {priority ? "priority1" : "priority2"} */}
            <div>
              <p
                contenteditable={isEdit ? "plaintext-only" : "false"}
                autoFocus
                className={taskDone ? "strike" : ""}
              >
                {todo.userTask}
              </p>
            </div>

            
          </div>
          {/* Buttons below */}
          
          <button className="btn" onClick={handleEdit}>
            <img className="edit-icon" src="/icon-edit.png" alt="edit" />
            <div className="btn-title">EDIT</div>
          </button>

          <button className="btn" onClick={() => onDelete(todo.id)}>
            <img className="icon-s delete" src="/icon-delete.png" alt="remove" />
            <div className="btn-title">REMOVE</div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Items;
