import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" class="menu">
      <Navbar.Brand href="#">
        <img
          src="data:image/png;base64,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"
          alt="Giraffas Logo"
          style={{ height: '40px' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">Peça Já</Nav.Link>
          <Nav.Link href="#">Cupons</Nav.Link>
          <Nav.Link href="#">Cardápios</Nav.Link>
          <Nav.Link href="#">Lojas</Nav.Link>
          <Nav.Link href="#">Seja um franqueado</Nav.Link>
          <Nav.Link href="#">Fale Conosco</Nav.Link>
          
          
        </Nav>
      </Navbar.Collapse>
      <a href="#order" className="order-link">Faça seu Pedido</a>
    </Navbar>
    
  );
};

export default Header;