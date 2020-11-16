import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card";
import "./index.css";

const Cards = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Récuperer les data depuis le back

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offers`
      );

      setData(response.data);
      setIsLoading(false);

      // console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  //Appel de la fonction fetchData
  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span> En cours de chargement</span>
  ) : (
    //div qui contient toutes les cartes
    <div className="home-Cards-wrapper">
      {data.offers.map((card, index) => {
        return <Card card={card} key={index} />;
      })}
    </div>
  );
};

export default Cards;
