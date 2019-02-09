import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import SelectKid from "./components/SelectKid";
import AddKid from "./components/AddKid";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />         
          <Route exact path="/addkid" component={AddKid} />
          <Route exact path="/selectkid" component={SelectKid} />
          <Route exact path="/welcome" component={Welcome} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
