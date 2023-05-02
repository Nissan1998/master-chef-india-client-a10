import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideNavigation = () => {
  const [chefs, setAllChefs] = useState([]);
  console.log(chefs);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setAllChefs(data))
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div>
      <h4 className="text-center mt-5">All Chefs</h4>
      {chefs.map((chef) => (
        <p key={chef.id}>
          <Link to={`chef/${chef.id}`} className="btn btn-light w-100">
            {chef.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default SideNavigation;
