import React, { useState } from "react";
import Items from "./Items";

function AddItem() {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
    console.log("Task Added!"); // Your comment
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddTask();
  };

  const AddTask = () => {
    if (!newTask) {
      alert("You must add at least 1 task!");
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
      // check existing array before deleting item from array
      prevList.filter((task) => task.id !== id);
      console.log("SUCCESSFUL DELETE!");
    });
  };

  const handleDelete = () => {
    deleteTask(todos.id);
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
                      placeholder="create new task..."
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
                    {todos.map((task) => {
                      return (
                        <div key={task.id}>
                          <Items value={task.value} />
                          <div className="delete">
                            <button
                              className="unbutton"
                              onClick={() => deleteTask(task.id)}
                            ></button>
                          </div>
                        </div>
                      );
                    })}
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
