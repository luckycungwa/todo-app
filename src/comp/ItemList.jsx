import React from "react";

function ItemList() {
  return (
    // components for listing Items
    <>
      {/* ITEMS LIST CARD */}
      <div className="main">
        <div className="">
          <div>
            <div className="form-section">
              <div className="">
                <h1>TO DO LIST</h1>

                <div className="userAccounts">
                  <div className="icon important"></div>
                  <div className="icon due"></div>
                  <div className="icon over-due"></div>
                  <div className="icon blue-dark"></div>
                </div>
                <br />
                <br />
                <form onSubmit="">
                  <div className="form-field ">
                    <label className="label">Add Task</label>
                    <input
                      className="input-field"
                      type="text"
                      name="position"
                      value=""
                      onChange=""
                    />

                    <label className="label">Email: *</label>
                    <input
                      className="input-field"
                      type="text"
                      name="position"
                      value=""
                      onChange=""
                    />

                    <label className="label">Password:</label>
                    <input
                      className="input-field"
                      type="password"
                      name="position"
                      value=""
                      onChange=""
                    />

                    <br />
                    <br />
                    <div className="btn-area">
                      <button className="cta-btn" type="submit">
                        SIGN UP
                      </button>
                    </div>
                    <div className="card-footer">
                      <p>
                        or sign <span> if you already have an acoount</span>
                      </p>
                    </div>
                  </div>
                </form>

                {/* CONTENTS FOR DISPLAYING ADDED ITEMS */}
                <div className="form-field ">
                  {/* TABLE FOR WORKER INFORMATION DISPLAY */}
                  <div className="">
                    {/* THE ITEM COMPONENTS HERE */}
                    <div className="todo-item">
                      <div className="priority"></div>
                      <div className="list">
                        {/* This is where each item (Index) from the array will be displayed */}
                        <p>COMPLETED TASK</p>
                      </div>
                    </div>
                    {/* THE ITEM COMPONENTS HERE */}
                    <div className="todo-item">
                      <div className="priority"></div>
                      <div className="list">
                        {/* This is where each item (Index) from the array will be displayed */}
                        <p>AWAITING TASK</p>
                      </div>
                    </div>
                    {/* THE ITEM COMPONENTS HERE */}
                    <div className="todo-item">
                      <div className="priority"></div>
                      <div className="list">
                        {/* This is where each item (Index) from the array will be displayed */}
                        <p>MEETING WITH </p>
                      </div>
                    </div>
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

export default ItemList;
