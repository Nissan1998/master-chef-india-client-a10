import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
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
