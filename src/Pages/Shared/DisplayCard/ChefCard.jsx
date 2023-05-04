import React from "react";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import LazyLoad from "react-lazyload";

const ChefCard = ({ categoriesChef, loading }) => {
  if (loading) {
    return (
      <div className="mx-auto bg-light w-25">
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
      </div>
    );
  }
  return (
    <div>
      <Row xs={1} md={2} lg={4} className="g-2 text-center">
        {Array.from(categoriesChef).map((chef, idx) => (
          <Col key={idx}>
            <Card className="h-100">
              <LazyLoad>
                <Card.Img
                  style={{ height: 250 }}
                  className=" w-75 mx-auto p-3"
                  variant="top"
                  src={chef?.image}
                />
              </LazyLoad>
              <Card.Body>
                <Card.Title>{chef?.name}</Card.Title>
                <Card.Text>
                  <a className="d-flex text-decoration-none text-black align-items-center justify-content-center">
                    <AiFillLike /> {chef?.likes}
                  </a>
                  <>Total Recipes:{chef?.recipes}</>
                  <br></br>
                  <span>Experience:-{chef?.experience}Years</span>
                </Card.Text>
              </Card.Body>
              <Button variant="warning" size="lg">
                <Link
                  to={`/categories/${chef?.id}`}
                  className="text-black text-decoration-none"
                >
                  View Recipes
                </Link>
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ChefCard;
