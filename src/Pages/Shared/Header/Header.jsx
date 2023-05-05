import React, { useContext, useState } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../PrivetRoute/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Navbar expand="lg" bg="success" variant="">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <Image rounded width={160} src={logo}></Image>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            className="text-white"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="d-flex  ms-auto ">
              <p className="text-decoration-none">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-warning text-decoration-none me-2"
                      : "text-white text-decoration-none me-2"
                  }
                >
                  Home
                </NavLink>
              </p>
              <p>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "text-warning text-decoration-none ms-2 me-3"
                      : "text-white text-decoration-none ms-2 me-3"
                  }
                >
                  Blog
                </NavLink>
              </p>
            </div>
            <Nav className=" align-items-center">
              <Nav.Link
                className="d-flex align-items-center justify-content-center  "
                style={{
                  height: 10,
                }}
                href="#deets"
              >
                {user && <p className="text-white">{user?.displayName}</p>}
                {user ? (
                  <img
                    style={{ width: 40 }}
                    title={user?.displayName}
                    className="rounded-circle  ms-2"
                    src={user?.photoURL}
                  ></img>
                ) : (
                  ""
                )}
              </Nav.Link>
              {user ? (
                <Link onClick={handleLogOut} className=" btn btn-warning ">
                  LogOut
                </Link>
              ) : (
                <>
                  <Link className=" btn btn-warning mb-2 " to="login">
                    Login
                  </Link>

                  <Link className="ms-2 btn btn-warning mb-2 " to="register">
                    Register
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
