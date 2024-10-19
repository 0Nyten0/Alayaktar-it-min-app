import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Моя Образовательная Платформа</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Главная</Nav.Link>
          <Nav.Link as={Link} to="/profile">Профиль</Nav.Link>
          <Nav.Link as={Link} to="/register">Регистрация</Nav.Link>
          <Nav.Link as={Link} to="/login">Вход</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
