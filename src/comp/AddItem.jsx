import React, { useState, useEffect } from "react";
import Items from "./Items";
import { addDoc, collection, getDocs, doc, deleteDoc } from "firebase/firestore"; //adding & fetching data functions
import { db } from "../config/firebase";

function AddItem() {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState([]);
  // search functionality here
  const [searchTask, setSearchTask] = useState("");

  const handleInputChange = (e) => {
    //Monitor the user's input & alert if the iput was recorded
    setNewTask(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    AddTask();
  };
  // create search function by targetoing and matching the value: imnput
  const Search = (e) => {
    setSearchTask(e.target.value);
  };

  const AddTask = async () => {
    if (!newTask) {
      alert("You must add at least 1 task!"); // Alert the user if they did not filll in the task
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "todoList"), {
        userTask: newTask,
      });
      // Create random id (index) for each Input/task
    const task = {
      id: Math.floor(Math.random() * 1000),
      userTask: newTask,
    };
     //check through existing array before creating  new one
    setTodos((prevList) => [...prevList, task]);
    setNewTask("");

    } catch (error) {
      alert("Error Removing task: " +error);
    }
    
  };

  //delete function
  const deleteTask = async (id) => {

    try {
      //remove task from the database using id
      await deleteDoc(doc(db, "todoList", id));

      setTodos((prevList) => {

        return prevList.filter((task) => task.id !== id);
      });
    } catch (error) {
      alert("Error deleting task: " + error);
    }
  };

  //HANDLE THE FIRESTORE DATA RETRIEVAL
  const getTaskData = async () => {
    try {
      console.log("Fetched Task : " +data); // Log the retrieved data
      const querySnapshot = await getDocs(collection(db, "todoList"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        userTask: doc.data().userTask,
      }));
      //Retrieve and set data from the Database | update state
      setTodos(data);
      // Keep data on the user local storage | display json data as readable string
      localStorage.setItem("todos", JSON.stringify(data));
    } catch (error) {
     console.log("Check for errors!");
    }
  };
  
  useEffect(() => {
    // STORING DTA ON LOCAL STORAGE
    const storedData = localStorage.getItem("todos");
    if (storedData) {
      setTodos(JSON.parse(storedData));
    } else {
      getTaskData();
    }
  }, []);

  return (
    <>
      <div className="main">
        <h1>TO DO LIST</h1>
        <div className="search"></div>

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
          {/* search box contents */}
          <input
            className="search-input"
            placeholder="search"
            type="text"
            name="search"
            value={searchTask}
            onChange={Search}
          ></input>
        </div>
<br/>
<br/>
        {/* dropdown components */}
        <div className="form-field">
          <div className="">
            {/* TABLE FOR WORKER INFORMATION DISPLAY */}
            {todos
              .filter(
                (task) =>
                  //enable the display to display the values matched on the search function (disable caseSensitivity)
                  task.userTask.toLowerCase() &&
                  task.userTask.toLowerCase().includes(searchTask.toLowerCase())
              )
              .map((task) => (
                <div key={task.id}>
                  <Items todo={task} onDelete={deleteTask} />
                </div>
              ))}

          </div>
        </div>
      </div>
    </>
  );
}

export default AddItem;
