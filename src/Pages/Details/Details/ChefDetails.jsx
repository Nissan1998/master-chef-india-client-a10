import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
import { AiFillLike } from "react-icons/ai";
import MenuCard from "./MenuCard/MenuCard";

const ChefDetails = ({ chefDetails }) => {
  const { chefs_id, image, bio, name, experience, recipes, likes, dishes } =
    chefDetails[0];
  console.log(dishes);
  return (
    <div>
      <h2 className="text-center mt-2">Master Chef</h2>
      <div>
        <MDBCard
          className="mx-auto"
          style={{ maxWidth: "1000px", maxHeight: "600px", fontSize: "20px" }}
        >
          <MDBRow className="g-0">
            <MDBCol md="4">
              <MDBCardImage src={image} alt="..." fluid />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody
                style={{ height: "500px" }}
                className="bg-success p-5 rounded text-white"
              >
                <MDBCardTitle style={{ fontSize: "50px" }}>{name}</MDBCardTitle>
                <div>
                  <p>
                    Total Likes:-{likes} <AiFillLike className="text-warning" />
                  </p>
                  <p>Experience:-{experience} Years</p>
                  <p>ToTal Recipes:-{recipes}+</p>
                </div>
                <div>
                  <h3>{bio}</h3>
                </div>
                <MDBCardText>
                  <small>Last updated 3 mins ago</small>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </div>
      <div className="mt-5">
        <MenuCard dishes={dishes}></MenuCard>
      </div>
    </div>
  );
};

export default ChefDetails;
