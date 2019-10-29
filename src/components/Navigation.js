import React from "react";
import {Navbar, Nav,  Form, Button, FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link to='/' className="nav-link">Home</Link>
        <Link to='/candidate' className="nav-link"  >Candidate</Link>
        <Link to='/company' className="nav-link" >Company</Link>
        
       
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  );
}
