import React from "react";

function Items(todos) {
  


  return (
    // components as an  ITEM
    <>
      {/* THE ITEM COMPONENTS HERE */}

      {/* This is where each item (Index) from the array will be displayed */}

      <div className="">
        <div className="todo-item">
          <div className="category" />
          {/* Display the value recorded on the user input */}
          <p>{todos.value}</p>
          {/* components for functionality (DELETE | EDIT | MARK AS COMPLETE) */}
          <div className="complete"></div>
          
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Items;
