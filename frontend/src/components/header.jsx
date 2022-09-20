import React, {useEffect} from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { logout } from "src/reduxStore/reducers/userReducer";

const Header = () => {
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = ()=>{
    dispatch(logout());
  }

  // useEffect(()=>{
  //   if(isEmpty(user)){
  //     navigate('/login')
  //   }
  // }, [user])

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
            {isEmpty(user) ? (
              <Link to="/login">
                <Nav.Link as="div">
                  <LoginOutlinedIcon /> SIGN IN
                </Nav.Link>
              </Link>
            ) : (
              <NavDropdown title={user.name} id="user">
                  <NavDropdown.Item onClick={()=>navigate('/profile')} >Profile</NavDropdown.Item>
                <NavDropdown.Divider  />
                  <NavDropdown.Item onClick={handleLogout}>Log out</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
