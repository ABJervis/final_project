import React from "react";
import "./style.css";

function Nav() {
  return (
    /*<nav className="navbar navbar-expand-lg navbar-dark bg-dark border border-primary ">
        <a className="navbar-brand" href="/">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="#">Login</a>
          <a class="nav-item nav-link" href="#">Pricing</a>
          </nav>*/
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border border-primary ">
        <a className="navbar-brand" href="./Home">Pediatric Appointment Tracker</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="./Login">Login</a>
  
    </div>
  </div>
</nav>
  );
}


export default Nav;

