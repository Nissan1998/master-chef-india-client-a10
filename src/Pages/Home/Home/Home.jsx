import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Hero from "../../HeroSection/Hero";
const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Container>
        <Row>
          <Col style={{ backgroundColor: "red" }} sm={9}>
            sm=8
          </Col>
          <Col sm={3}>sm=4</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
