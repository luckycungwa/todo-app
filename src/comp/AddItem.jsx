import React, { useState } from "react";
import Items from "./Items";

function AddItem() {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    //Monitor the user's input & alert if the iput was recorded
    setNewTask(e.target.value);
    console.log("Task Added!"); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddTask();
  };

  const AddTask = () => {
    if (!newTask) {
      alert("You must add at least 1 task!");       // Alert the user if they did not filll in the task
      return;
    }

    const task = {
      id: Math.floor(Math.random() * 1000),
      value: newTask,
    };

    setTodos((prevList) => [...prevList, task]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTodos((prevList) => {
      return prevList.filter((task) => task.id !== id);
    });
    console.log("SUCCESSFUL DELETE!");
  };

  return (
    <>
      <div className="main">
        <div className="">
          <div>
            <div className="form-section">
              <div className="">
                <h1>TO DO LIST</h1>
                <div className="userAccounts">
                  <div className="icon important"></div>
                  <div className="icon due"></div>
                  <div className="icon over-due"></div>
                  <div className="icon blue-dark"></div>
                </div>

                <br />
                <br />
                <form onSubmit={handleSubmit}>
                  <div className="form-field">
                    <label className="label">Create New Task</label>
                    <input
                      className="input-field"
                      placeholder="Add new task..."
                      type="text"
                      name="todoInput"
                      value={newTask}
                      onChange={handleInputChange}
                    />
                  </div>
                </form>

                <div className="form-field">
                  <div className="">
                    {/* TABLE FOR WORKER INFORMATION DISPLAY */}
                    {todos.map((task) => (
                      <div key={task.id}>
                      {/* set the values as per input and enable deletion from our component (Items)  */}
                        <Items todo={task} onDelete={deleteTask} />
                      </div>
                    ))}
                  </div>

                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddItem;
