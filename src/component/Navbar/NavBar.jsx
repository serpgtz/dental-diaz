import Container from 'react-bootstrap/Container';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../images/dental-removebg-preview.png"
import s from "./Navbar.module.css"

import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <Navbar className={s.navbar} bg="light " expand="lg" variant='light '>
      <Container   >
        <Navbar.Brand className={s.brand} href="#home"><img src={logo} width="130px" alt='Logo de la pagina web'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={s.navbar_collapse} id="basic-navbar-nav">
          <Nav className={s.navbar_nav }>  
          {/* me-auto mx-auto */}
            <Nav.Link className={s.item} href="/contacto">Contactanos</Nav.Link>
            <Nav.Link className={s.item} href="/quienes">Quienes Somos</Nav.Link>
            <NavDropdown className={s.item} title="Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;