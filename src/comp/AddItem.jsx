import React, { useState } from "react";
import Items from "./Items";
import PriorityBtn from "./PriorityBtn";

function AddItem() {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState([]);
  // search functionality here
  const [searchTask, setSearchTask] = useState("");

  const handleInputChange = (e) => {
    //Monitor the user's input & alert if the iput was recorded
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddTask();
  };
  const Search = (e) => {
    setSearchTask(e.target.value)
  };

  const AddTask = () => {
    if (!newTask) {
      alert("You must add at least 1 task!"); // Alert the user if they did not filll in the task
      return;
    }
    // Create random id (index) for each Input/task
    const task = {
      id: Math.floor(Math.random() * 1000),
      value: newTask,
    };
    //check through existing array before creating  new one
    setTodos((prevList) => [...prevList, task]);
    setNewTask("");
  };
  //delete function
  const deleteTask = (id) => {
    setTodos((prevList) => {
      return prevList.filter((task) => task.id !== id);
    });
    console.log("Deleted Task called: ");
  };

  // Options/ priority buttons

  return (
    <>
      <div className="">
        <div className="">
          <div>
            <div className="form-section">
              <div className="">
                <h1>TO DO LIST</h1>
                <div className="search">
                  {/* search box contents */}
                  <input
                    className="search-input"
                    placeholder="search Task"
                    type="text"
                    name="search"
                    value={searchTask}
                    onChange={Search}
                  ></input>
                </div>

                <br />
                <br />
                <div className="btn-section">
                  {/* <label className="label left">Create New Task</label> */}
                  <form onSubmit={handleSubmit}>
                    <div>
                      <input
                        className="input-field"
                        placeholder="Add new task..."
                        type="text"
                        name="todoInput"
                        value={newTask}
                        onChange={handleInputChange}
                      ></input>
                    </div>
                  </form>
                  {/* Priority selection button */}
                  <PriorityBtn />
                </div>

                {/* dropdown components */}
                <div></div>
                <div className="form-field">
                  <div className="">
                    {/* TABLE FOR WORKER INFORMATION DISPLAY */}
                   
                    {todos
                      .filter((task) =>
                      
                        task.value
                          .toLowerCase()
                          .includes(searchTask.toLowerCase())
                      )
                      .map((task) => (
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
