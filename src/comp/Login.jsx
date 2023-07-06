import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../config/firebase";

function Login() {
  //const [userInput, setUserInput] = useState("");
  const [userName, setUserName] = useState(""); //change defaulkts to match info from the database/
  const [userPass, setUserPass] = useState(""); //change defaulkts to match info from the database/authentication etc.

  //Prevent user from submiting an empty form
  const ForceInput = (e) => {
    if (!userName) {
      alert("You must add at least 1 task!"); // Alert the user if they did not filll in the task
      return;
    }
  };

  //user registeration & authentication
  const handleLogin = () => {
    ForceInput();

    const authUser = getAuth();

    signInWithEmailAndPassword(authUser, userName, userPass)
      .then(() => {
        alert("Login successful!");
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <>
      <div className="main">
        <div className="form">
          <h1>Login to your Account</h1>

          <div className="userAccounts">
            <div className="icon">
              <NavLink to="/gmail.com">
                <img src="/email.png" alt="email" className="icon" />
              </NavLink>
            </div>
            <div className="icon">
              <NavLink to="/facebook.com">
                <img src="/facebook.png" alt="facebook" className="icon" />
              </NavLink>
            </div>
            <div className="icon">
              <NavLink to="/linkedin.png">
                <img src="/linkedin.png" alt="linkedIn" className="icon" />
              </NavLink>
            </div>
            <div className="icon">
              <NavLink to="/twitter.com">
                <img src="/twitter.png" alt="twitter" className="icon" />
              </NavLink>
            </div>
          </div>

          <br />
          <br />
          {/* form component */}
          <div className="">
            <div className="">
              <div className="input-field">
                <label className="label left">Username: </label>
                <input
                  autoFocus
                  className=""
                  placeholder="username or email"
                  type="text/email"
                  autoComplete="on"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  // force user to fill force
                  required
                />
              </div>
              <br></br>
              <br></br>
              <div className="input-field">
                <label className="label left">Password: </label>
                <input
                  className=""
                  placeholder="password"
                  type="password"
                  value={userPass}
                  required
                  autoComplete="off"
                  //Disable handler until we complete Firebase Lessons
                  onChange={(e) => setUserPass(e.target.value)}
                  // force user to fill force
                />
                <p className="card-footer left">
                  <span>
                    <NavLink to="/ForgotPassword">forgot password</NavLink>
                  </span>
                </p>
              </div>

              <br />
              <div className="form-field left">
                <button className="cta-btn" onClick={handleLogin}>
                  Login
                </button>
              </div>
              <div className="card-footer">
                <p>
                  or Create new account{" "}
                  <span>
                    {" "}
                    <NavLink to="/Signin">HERE</NavLink>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
