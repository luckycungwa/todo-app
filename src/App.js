import React from "react";
import "./App.css";
//importing Router related elements
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddItem from "./comp/AddItem";
import Home from "./comp/Home";
import ItemList from "./comp/ItemList";
import Login from "./comp/Login";
import Menu from "./comp/Menu";
import Signin from "./comp/Signin";

function App() {
  return (
      <Router>
    <div className="bg">
      
        <div class="body">
          <header className="">
            <Menu />

            <Switch>
              <Route exact path="/home" component={Home} />
              <Route path="/ItemList" component={ItemList} />
              <Route path="/AddItem" component={AddItem} />
              <Route path="/Login" component={Login} />
              <Route path="/Signin" component={Signin} />
            </Switch>
          </header>
        </div>
      
    </div>
    </Router>

   
  );
}

export default App;
