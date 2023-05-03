import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../../Shared/Header/Header";
import Footer from "../../../Shared/Footer/Footer";

const Category = () => {
  const { id } = useParams();
  return (
    <div>
      <h3>this category{id}</h3>
    </div>
  );
};

export default Category;