import React, { useState } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
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
              <Image rounded width={160} src={logo}></Image>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="d-flex  mx-auto ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-warning text-decoration-none"
                      : "text-white text-decoration-none"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "text-warning text-decoration-none"
                      : "text-white text-decoration-none"
                  }
                >
                  Blog
                </NavLink>
              </li>
            </div>
            <Nav>
              <Nav.Link href="#deets">Profile</Nav.Link>
              <Link className=" btn btn-warning" to="login">
                Login
              </Link>
              <Link className="ms-2 btn btn-warning" to="register">
                SignUp
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
