import Container from 'react-bootstrap/Container';
import "./NavBar.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  NavLink } from 'react-router-dom';
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand className='nombre' href="/">Tienda de Zapas</Navbar.Brand>
      <Nav className="barra">
        <NavLink className="barra" to="/">Home</NavLink>
        <NavLink className="barra" to="cat/electronics">Hombre</NavLink>
        <NavLink className="barra" to="cat/jewelery">Mujer</NavLink>
      <CartWidget />
      </Nav>
    </Container>
  </Navbar>
  );
}

export default NavBar;