import React from "react";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const RecipeDetails = () => {
  return (
    <div>
      <Header></Header>

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

export default RecipeDetails;
