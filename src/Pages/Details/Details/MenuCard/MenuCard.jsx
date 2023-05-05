import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const notify = () => toast("Wow!Added Your Favorite Food");
const MenuCard = ({ dishes }) => {
  const handleClick = (e) => {
    notify();
    e.currentTarget.disabled = true;
  };
  //   const { name, image, price, ingredients, method, rating } = food;
  return (
    <div>
      <Container>
        <h1 className="text-center mt-5">My Foods</h1>
        <Row xs={1} md={2} lg={3} className="g-4  mx-auto ">
          {Array.from(dishes).map((food, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={food.image} />
                <Card.Body>
                  <Card.Title>{food.name}</Card.Title>
                  <div className="d-flex justify-content-between">
                    <Rating
                      className="w-50"
                      style={{ maxWidth: 250 }}
                      value={Math.floor(food?.rating?.number || 0)}
                      readOnly
                    />
                    <span>{food?.rating.badge}</span>
                  </div>

                  <div>
                    <MDBAccordion flush initialActive={1}>
                      <MDBAccordionItem
                        collapseId={2}
                        headerTitle="Click to see Ingredients"
                      >
                        {food.ingredients.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </MDBAccordionItem>
                      <MDBAccordionItem
                        collapseId={3}
                        headerTitle="Click to see Method"
                      >
                        {food.method}
                      </MDBAccordionItem>
                    </MDBAccordion>
                  </div>
                  <div className="text-center">
                    <Button
                      type="submit"
                      onClick={handleClick}
                      variant="success"
                    >
                      <FaRegHeart />
                    </Button>
                    <ToastContainer />
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
