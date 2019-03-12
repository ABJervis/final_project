import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./components/Login";
import Kids from "./pages/Kids";
import SignUp from "./components/SignUp/index";
import Details from "./pages/Details";
import NewAppt from "./pages/NewAppt";
import ApptDetails from "./pages/ApptDetails";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />         
          <Route exact path="/kids" component={Kids} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/kids/:id" component={Details} />  
          <Route exact path="/newappt" component={NewAppt} /> 
          <Route exact path="/appointment/:id" component={ApptDetails} />     
        </Switch>
      </div>
    </Router>
  );
}

export default App;
