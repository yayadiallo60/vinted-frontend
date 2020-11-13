import React, { useState, useEffect } from "react";
import axios from "axios";

const Product = ({ id }) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log(product);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );

      setProduct(response.data);
      setIsLoading(false);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? <div>En cours de chargement</div> : <div>coucou</div>;
};

export default Product;
