import React from "react";
// import { Link } from "react-router-dom";
import photo from "../assets/images/vinted-img.jpeg";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <div className="header">
      <div className="image-dechire">
        <img src={photo} alt="vinted-img" />
      </div>
      <Cards />
    </div>
  );
};

export default Home;
