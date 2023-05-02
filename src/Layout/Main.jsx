import React from "react";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Hero from "../Pages/HeroSection/Hero";
import SideNavigation from "../Pages/Shared/SideNavigation/SideNavigation";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Container>
        <Row>
          <Col sm={2}>
            <SideNavigation></SideNavigation>
          </Col>
          <Col sm={10}>Main Contain</Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
