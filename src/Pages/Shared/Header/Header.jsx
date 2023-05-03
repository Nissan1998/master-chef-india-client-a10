import React, { useState } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Header = () => {
  const [isActive, setActive] = useState(false);
  const activeRoute = () => {
    setActive(true);
  };
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <Image roundedCircle width={80} src={logo}></Image>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Link className="ms-auto">
              <Link className="me-2 text-decoration-none text-white " to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className="me-auto">
              <Link className=" text-decoration-none text-white " to="blog">
                Blog
              </Link>
            </Nav.Link>
            <Nav>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Link className=" btn btn-warning" to="login">
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
