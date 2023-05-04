import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../../Shared/Header/Header";
import Footer from "../../../Shared/Footer/Footer";
import ChefDetails from "../../../Details/Details/ChefDetails";

const Category = () => {
  const { id } = useParams();
  const chefDetails = useLoaderData();
  console.log(chefDetails);

  return (
    <div>
      <div>
        <ChefDetails chefDetails={chefDetails}></ChefDetails>
      </div>
    </div>
  );
};

export default Category;
