import React, { useEffect, useState } from "react";
import ChefCard from "../../../Shared/DisplayCard/ChefCard";
import ExtraSection from "../../../Shared/extrasection/ExtraSection";
import BottomSection from "../../../Shared/extrasection/BottomSection";
import Hero from "../../../HeroSection/Hero";
import { Container } from "react-bootstrap";

const Home = () => {
  const [categoriesChef, setCategories] = useState([]);
  console.log(categoriesChef);
  useEffect(() => {
    fetch("https://master-chef-india-server-nissan1998.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <Hero></Hero>
      <Container>
        <h1 className="h-screen text-center">OUR MASTER CHEFS</h1>
        <ChefCard categoriesChef={categoriesChef}></ChefCard>
        <div>
          <ExtraSection></ExtraSection>
        </div>
        <div>
          <BottomSection></BottomSection>
        </div>
      </Container>
    </div>
  );
};

export default Home;
