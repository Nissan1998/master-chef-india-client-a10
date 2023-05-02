import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Hero from "../../HeroSection/Hero";
const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Container>
        <Row>
          <Col style={{ backgroundColor: "black" }} sm={2}>
            sm=8
          </Col>
          <Col sm={10}>sm=4</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
