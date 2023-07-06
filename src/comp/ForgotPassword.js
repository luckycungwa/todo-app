import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../config/firebase";

function ForgotPassword() {
  const [userEmail, setPassword] = useState(""); //change defaulkts to match info from the database/
  

  const resetPassword = () => {

    const authUser = getAuth();

    sendPasswordResetEmail(authUser, userEmail)
      .then(() => {
        alert("Reset Link sent to " + userEmail);
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred. Please try again.");
      });
  };
  return (
    <div className="main card">
      <h1> RESET PASSWORD </h1>
      <div >
        <div className="input-field">
          <label className="label left">Username: </label>
          <input
            autoFocus
            className=""
            placeholder="email"
            type="email"
            autoComplete="off"
            value={userEmail}
            onChange={(e) => setPassword(e.target.value)}
            // force user to fill force
            required
          />
        </div>
        <br></br>
        <div className="form-field left">
                <button className="cta-btn" onClick={resetPassword}>
                  Reset Password
                </button>
              </div>
       
      </div>
    </div>
  );
}

export default ForgotPassword;
