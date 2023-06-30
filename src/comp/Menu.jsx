import React from "react";

function Menu() {
  
  return (
    <>
<nav id='menu'>
  <input type='checkbox' id='responsive-menu'/><label></label>
  <ul>
    <li><a href='http://'>Home</a></li>
    <li><a href='http://'>About</a></li>
    <li><a href='http://'>Contact Us</a></li>
    <li className="right"><a href='http://'>sig</a></li>
    
  </ul>
</nav>
    </>
  );
};

export default Menu;
