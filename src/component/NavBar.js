import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"

const NavBar = () => {
  const cartProducts= useSelector(state=>state.cart)
  return (
    <div>

    <Navbar expand="lg"  bg="light">
      <Container fluid>
        <Navbar.Brand href="#">ReduxToolkit</Navbar.Brand>

        
          <Nav>
            <Nav.Link to="/" as={Link}>Products</Nav.Link>
          </Nav>
          <Navbar.Toggle  />
          <Navbar.Collapse  className='justify-content-end'>
          {/* <NavBar.Text> */}
            <Nav.Link to="/cart" as={Link}>My bag {cartProducts.length}</Nav.Link>
          {/* </NavBar.Text> */}
          </Navbar.Collapse>
            
    

        
      </Container>
    </Navbar>



    </div>
  )
}

export default NavBar