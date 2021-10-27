import React from "react";
import Link from 'next/link'
import styles from '../../styles/NavBar.module.css'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div>
      <Navbar className={styles.navBar}>
        <Container>
          <Navbar.Brand href="/">Devin Hight</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Link href="/components/About" passHref>
                <Nav.Link>About</Nav.Link>
              </Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">projectOne</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">projectTwo</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">projectThree</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
  )
};

export default NavBar;
