import React from "react";
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import "./style.css";

function Nav() {
  return (
    <Navbar bg="dark" expand="lg">
    <Navbar.Brand href="./Home">Pediatric Appointment Tracker</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Form inline>
        <FormControl type="text" placeholder="Email Address" className="mr-sm-2" />
        <FormControl type="text" placeholder="Password" className="mr-sm-2" />
        <Button variant="outline-success">Login</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  );
}




export default Nav;

