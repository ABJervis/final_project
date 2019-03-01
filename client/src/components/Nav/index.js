import React from "react";
import { Navbar } from 'react-bootstrap';
import Login from "../Login";
import "./style.css";

function Nav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="./Home">Pediatric Appointment Tracker</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Login />
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Nav;


