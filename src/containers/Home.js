import React from "react";
// import { Link } from "react-router-dom";
import Header from "../components/Header";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <div className="header">
      <Header />
      <div className="image-dechire"></div>
      <Cards />
    </div>
  );
};

export default Home;
