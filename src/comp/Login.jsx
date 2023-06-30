import React from "react";

function Login() {
  return (
    <>
      <div className="">
        <h1 className="font-display">LOGIN PAGE</h1>
        <div className="">
          <div>
            <div className="">
              <div className="">
                <h1>Login to your Account</h1>

                <div className="userAccounts">
                  <div className="icon white"></div>
                  <div className="icon medium"></div>
                  <div className="icon high"></div>
                  <div className="icon low"></div>
                </div>

                <br />
                <br />
                <form className="" onSubmit="">
                  <div className="">
                    <div className="input-field">
                      <label className="label left">Username: </label>
                      <input
                        className=""
                        placeholder="username or email"
                        type="text"
                        name="username"
                        value=""
                        onChange=""
                      />
                    </div>
                    <br></br>
                    <br></br>
                    <div className="input-field">
                      <label className="label left">Password: </label>
                      <input
                        className=""
                        placeholder="username or email"
                        type="text"
                        name="username"
                        value=""
                        onChange=""
                      /><p className="card-footer left"><span>forgot password</span></p>
                    </div>

                    <br />
                    <div className="form-field left">
                      <button className="cta-btn" type="submit">
                        Login
                      </button>
                    </div>
                    <div className="card-footer">
                      <p>
                        or Create new account <span> here</span>
                      </p>
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

export default Login;
