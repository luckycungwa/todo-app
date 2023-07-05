import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// Imports for user authentication | FIREBASE
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

function Signin() {
  const [newUserName, setNewUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const Signup = () => {
    const authUser = getAuth();
    createUserWithEmailAndPassword(
      authUser, //user authentication as the first object
      
      userEmail,
      password
    )
      .then(() => {
        alert("Login successful!");
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred. Please try again.");
      });
  };

  const handleSignin = () => {
    if (!userEmail) {
      alert("You must add at least 1 task!"); // Alert the user if they did not filll in the task
      return;
    } else {
      Signup();
    }
  };

  const resetForm = (e) => {
    setNewUserName("");
    setUserEmail("");
    setUserSurname("");
  };

  return (
    <>
      <div className="main card">
        <div className="form">
          <h1>Create New Account</h1>

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
          <form className="">
            <div className="">
              {/* <div className="input-field">
                <label className="label left">Name: </label>
                <input
                  className=""
                  placeholder="Name"
                  type="text"
                  name="username"
                  value={newUserName}
                  autoComplete="given-name"
                  maxLength={28}
                  //Disable handler until we complete Firebase Lessons
                  onChange={(e) => setNewUserName(e.target.value)}
                  // force user to fill force
                />
              </div>
              <br />
              <div className="input-field">
                <label className="label left">Surname: </label>
                <input
                  className=""
                  placeholder="Surname"
                  type="text"
                  name="username"
                  autoComplete="family-name"
                  value={userSurname}
                  maxLength={28}
                  onChange={(e) => setUserSurname(e.target.value)}
                />
              </div>
              <br></br> */}
              <div className=" input-field">
                <label className="label left">Email: </label>
                <input
                  className=""
                  placeholder="Email"
                  type="email"
                  name="username"
                  value={userEmail}
                  autoComplete="email"
                  onChange={(e) => setUserEmail(e.target.value)}
                  // force user to fill force
                  required
                />
              </div>
              <br></br>
              <div className="input-field">
                <label className="label left">Password: </label>
                <input
                  className=""
                  placeholder="password"
                  type="password"
                  name="username"
                  maxLength={16}
                  value={password}
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                  // force user to fill force
                  required
                />
                <p className="card-footer left">
                  <span>forgot password</span>
                </p>
              </div>

              <br />
              <div className="form-field left">
                <button
                  className="cta-btn"
                  type="submit"
                  onClick={handleSignin}
                >
                  Login
                </button>
              </div>
              <div className="card-footer">
                <p>
                  You already have an account? Click 
                  <span>
                    <NavLink to="/Login"> HERE </NavLink>
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
