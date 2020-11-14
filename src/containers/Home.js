import React from "react";
// import { Link } from "react-router-dom";
import photo from "../assets/images/vinted-img.jpeg";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <div className="header">
      <div className="image-dechire">
        <img src={photo} alt="vinted-img" />
        <div className="carte-header">
          <p className="carte-heaader-title">
            Prêts à faire du tri dans vos placards ?
          </p>
          <button className="carte-header-button">Commencer a vendre</button>
        </div>
      </div>

      <Cards />
    </div>
  );
};

export default Home;
