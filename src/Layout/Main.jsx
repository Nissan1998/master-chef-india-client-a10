import React from "react";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Hero from "../Pages/HeroSection/Hero";

const Main = () => {
  return (
    <div className="">
      <Header></Header>
      <Hero></Hero>
      <Container>
        <Row>
          <Col lg={12}>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
