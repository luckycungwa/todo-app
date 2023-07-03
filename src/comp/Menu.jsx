import React from "react";
// navigation & routes import
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <nav id="menu">
        <input type="checkbox" id="responsive-menu" />
        <label></label>
          <ul>
            <li>
              <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/AddItem">Notes</NavLink>
            </li>
            <li>
              <NavLink to="/Login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/Signin">Create Account</NavLink>
            </li>
          </ul>
      </nav>
    </>
  );
}

export default Menu;
