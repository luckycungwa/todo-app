import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Login() {
  // search functionality here
  //const [userInput, setUserInput] = useState("");
  const [userName, setUserName] = useState(""); //change defaulkts to match info from the database/
  const [userPas, setUserPass] = useState("");  //change defaulkts to match info from the database/authentication etc.

  const handleSubmit = (e) => {
    e.preventDefault();
    ForceInput();
    
  };

  //Prevent user from submiting an empty form
  const ForceInput = (e) => {
    if (!userName) {
      alert("You must add at least 1 task!"); // Alert the user if they did not filll in the task
      return;
    }
  };
  

  return (
    <>
      <div className="">
              <div className="">
                <h1>Login to your Account</h1>

                <div className="userAccounts">
                  <div className="icon">
                  <NavLink to="/gmail.com"><img src="/email.png" alt="email" className="icon"/></NavLink>
                  </div>
                  <div className="icon">
                  <NavLink to="/facebook.com"><img src="/facebook.png" alt="facebook" className="icon"/></NavLink>
                  </div>
                  <div className="icon">
                  <NavLink to="/linkedin.png"><img src="/linkedin.png" alt="linkedIn" className="icon"/></NavLink>
                  </div>
                  <div className="icon">
                  <NavLink to="/twitter.com"><img src="/twitter.png" alt="twitter" className="icon"/></NavLink>
                  </div>
                </div>

                <br />
                <br />
                <form className="" onSubmit={handleSubmit}>
                  <div className="">
                    <div className="input-field">
                      <label className="label left">Username: </label>
                      <input
                      autoFocus
                        className=""
                        placeholder="username or email"
                        type="text"
                        name="username"
                        value={userName}
                        //Disable handler until we complete Firebase Lessons
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
                        type="text"
                        name="username"
                        value={userPas}
                        //Disable handler until we complete Firebase Lessons
                        onChange={(e) => setUserPass(e.target.value)}
                         // force user to fill force
                         required
                      /><p className="card-footer left"><span><NavLink to="/">forgot password</NavLink></span></p>
                    </div>

                    <br />
                    <div className="form-field left">
                      <button className="cta-btn" type="submit">
                        Login
                      </button>
                    </div>
                    <div className="card-footer">
                      <p>
                        or Create new account <span> <NavLink to="/Signin">HERE</NavLink></span>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            
      </div>
    </>
  );
}

export default Login;
