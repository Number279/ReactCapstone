import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';



class NavBar extends Component{
render(){
    return(
        <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Find Help Here</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/aboutus">About the Devs</Nav.Link>
          {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form> */}
      </Navbar>
      </div>
        );
    }
}

export default NavBar

