import React, { useEffect, useState } from "react";
import Card from "../../../Shared/DisplayCard/ChefCard";
import ChefCard from "../../../Shared/DisplayCard/ChefCard";
const Home = () => {
  const [categoriesChef, setCategories] = useState([]);
  console.log(categoriesChef);
  useEffect(() => {
    fetch("https://master-chef-india-server-nissan1998.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="mt-5">
      <h1 className="h-screen text-center text-white">OUR MASTER CHEFS</h1>
      <ChefCard categoriesChef={categoriesChef}></ChefCard>
    </div>
  );
};

export default Home;
