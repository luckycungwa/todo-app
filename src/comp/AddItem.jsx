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
    //Alert user to input a task otherwise do nothing
    if (!newTask) {
      alert("You must Add at least 1 Task!");
      return;
    }

    const task = {
      //hardcoding/creating a random id to track each task
      id: Math.floor(Math.random() * 1000),
      //the task captured from the input is recorded as the value === newTask
      value: newTask,
    };
    //check previous items on the array when adding new task
    setTodos((prevList) => [...prevList, task]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    // deletion code
    return (
        setTodos(prevArray => {
    //check existing array before deleting itemmfrom array
      prevArray.filter(todos => todos.id !== id);
    })
    );
    
    
  };

  // FUNCTION FOR HANDLING 'DELETION' FOR EACH ITEM LISTED
  const handleDelete = () => {
    deleteTask(todos.id);
  };

  return (
    // components for listing Items
    <>
      {/* ITEMS LIST CARD */}
      <div className="main">
        <div className="">
          <div>
            <div className="form-section">
              <div className="">
                <h1>TO DO LIST</h1>
                {/* user must the order of importance which is associated by colour */}
                <div className="userAccounts">
                  <div className="icon important"></div>
                  <div className="icon due"></div>
                  <div className="icon over-due"></div>
                  <div className="icon blue-dark"></div>
                </div>
                {/* Choose priority section */}

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

                {/* CONTENTS FOR DISPLAYING ADDED ITEMS */}
                <div className="form-field">
                  {/* TABLE FOR WORKER INFORMATION DISPLAY */}
                  <div className="">
                    {todos.map((todos) => {
                      return (
                        <>
                        <Items key={todos.id} value={todos.value} />
                        <button className="over-due" onClick={todos.handleDelete}>
                           REMOVE
                          </button>
                        {/* <div className="todo-item">
                          <div className="priority over-due"></div>

                          <div className="list" key={todos.id}>
                            {todos.value}
                          </div>
                          <div className="complete-true"></div>
                          <button className="over-due" onClick={handleDelete}>
                            X
                          </button>
                        </div> */}
                        </>
                        
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
