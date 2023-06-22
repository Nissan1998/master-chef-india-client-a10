import React, { useEffect, useState } from "react";
import ChefCard from "../../../Shared/DisplayCard/ChefCard";
import ExtraSection from "../../../Shared/extrasection/ExtraSection";
import BottomSection from "../../../Shared/extrasection/BottomSection";
import Hero from "../../../HeroSection/Hero";
import { Container, Spinner } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [categoriesChef, setCategories] = useState([]);
  console.log(categoriesChef);
  useEffect(() => {
    fetch("https://master-chef-india-server-nissan1998.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
    setLoading(false);
  }, []);
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Hero></Hero>
      <Container>
        <h1 className="h-screen text-center mt-5">OUR MASTER CHEFS</h1>
        <ChefCard categoriesChef={categoriesChef} loading={loading}></ChefCard>
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
