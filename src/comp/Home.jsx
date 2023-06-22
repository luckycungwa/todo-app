import React from "react";


function Home() {

    
  return (
    <>
      <div className="main">
        <h1 className="font-display">HOME PAGE</h1>
        <div className="card">
          <div>
            <div className="form-section">
              <div className="">
                <h1>Create Account</h1>

                <div className="userAccounts">
                  <div className="icon"></div>
                  <div className="icon"></div>
                  <div className="icon"></div>
                  <div className="icon"></div>
                </div>
                <br />
                <br />
                <form onSubmit="">
                  <div className="form-field ">
                  
                    <label className="label">Username:</label>
                    <input className="input-field" type="text" name="position" value="" onChange="" />

                    <label className="label">Email: *</label>
                    <input className="input-field" type="text" name="position" value="" onChange="" />

                    <label className="label">Password:</label>
                    <input className="input-field" type="password" name="position" value="" onChange="" />

                    <br />
                    <br />
                    <div className="btn-area">
                      <button className="cta-btn" type="submit">
                        SIGN UP
                      </button>
                    </div>
                    <div className="card-footer">
                        <p>or sign <span> if you already have an acoount</span></p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
