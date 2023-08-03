import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Example(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <section id='navbar'>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          Egemen's Portfolio
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#service">Service</NavLink>
            </NavItem>
            <NavItem>             
              <NavLink href="#education">Education</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#certificates">Certificates</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#experience">Experiences</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#footer">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </section>
  );
}

export default Example;