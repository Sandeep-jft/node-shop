import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
      <Container>
        <Link to="/">
          <Navbar.Brand as="div">Shopping</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            <Link to="/cart">
              <Nav.Link as="div">
                <ShoppingCartOutlinedIcon /> CART
              </Nav.Link>
            </Link>
            <Link to="/signin">
              <Nav.Link as="div">
                <LoginOutlinedIcon /> SIGNIN
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
