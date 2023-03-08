import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import {

  Navbar,
  Nav,
  Form,
  FormControl,
  Button,

} from "react-bootstrap";
function Header() {
  return (
    <header className="header">
      <Navbar bg="light" expand="lg">
    
     
          <Nav className="mr-auto">
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "/blog">Blog</Link>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form> */}
     </Navbar>
    </header>
  );
}

export default Header;
