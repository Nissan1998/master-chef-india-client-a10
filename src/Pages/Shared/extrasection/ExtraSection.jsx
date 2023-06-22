import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ExtraSection = () => {
  return (
    <div className="bg-light">
      <Container>
        <h1 className="text-center mt-5 mb-5">Who We Are?</h1>
        <Row className="align-items-center p-5">
          <Col lg={6}>
            <h1 className="text-center">About US</h1>
            <p>
              Your experience of starting the journey and continuing it with
              excellence over the years will have to be included on the page.
              -The different cuisines available in your restaurants must be
              clearly mentioned on the page so that customers can easily
              understand your specialization. -The address and contact number or
              any other details about the contact must be included on the page.
              -The opening and closing times of the restaurant must be clearly
              mentioned in as simple a way as possible so that customers can
              visit accordingly. -The reviews of some of the previous customers
              happy with the food and your service at h restaurant must be
              mentioned so that new customers are attracted.
            </p>
          </Col>
          <Col lg={6}>
            <div>
              <img
                className="w-75 "
                src="https://i.pinimg.com/564x/68/8e/1a/688e1ad62f12aaba7b7ad36bf5025a85.jpg"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExtraSection;
