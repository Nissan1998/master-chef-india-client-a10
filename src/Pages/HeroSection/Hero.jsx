import React from "react";
import { Carousel } from "react-bootstrap";

const Hero = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "600px" }}
            className="d-block w-100"
            src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/01/chicken-tikka-masala.jpg?quality=82&strip=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Master Chef India</h1>
            <p>For The Indian Food Lovers</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "600px" }}
            className="d-block w-100"
            src="https://previews.123rf.com/images/baibakova/baibakova1908/baibakova190800142/129010608-assorted-indian-food-on-black-background-indian-cuisine.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>Master Chef India</h1>
            <p>Explore Your Favorite Food</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "600px" }}
            className="d-block w-100"
            src="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347392/india-food-paratha/india-food-paratha-1120x732.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Master Chef India</h1>
            <p>EAT AND GO INTO THE DREAM</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
