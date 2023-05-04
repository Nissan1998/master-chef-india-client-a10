import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const MenuCard = ({ dishes }) => {
  //   const { name, image, price, ingredients, method, rating } = food;
  return (
    <div>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4  mx-auto mt-5">
          {Array.from(dishes).map((food, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={food.image} />
                <Card.Body>
                  <Card.Title>{food.name}</Card.Title>
                  <Rating
                    className="w-50"
                    style={{ maxWidth: 250 }}
                    value={Math.floor(food?.rating?.number || 0)}
                    readOnly
                  />
                  <span>{food?.rating.badge}</span>

                  <div>
                    <Button variant="success">
                      See Method and Ingredients
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MenuCard;
