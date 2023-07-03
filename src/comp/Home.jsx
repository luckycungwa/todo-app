import React from "react";
import Menu from "./Menu";
import AddItem from "./AddItem";
import { NavLink } from "react-router-dom";


function Home(task) {
  return (
    <>
      <div className="main">
        <h1 className="font-display">HOME PAGE</h1>

        <div className="main-menu">
          

          <div className="">
            <NavLink to="/Login">
              <img src="/003.jpg" alt="Login" className="card-item" />
            </NavLink>
          </div>
          <div className="">
            <NavLink to="/AddItem">
              <img src="/001.jpg" alt="Create Task" className="card-item" />
            </NavLink>
          </div>
          <div className="">
            <NavLink to="/Register">
              <img src="/002.jpg" alt="View Notes" className="card-item" />
            </NavLink>
          </div>
          <div className="">
            <NavLink to="/Login">
              <img src="/003.jpg" alt="Login" className="card-item" />
            </NavLink>
          </div>
          

        </div>
        <div>
        
        </div>
      </div>
    </>
  );
}

export default Home;
