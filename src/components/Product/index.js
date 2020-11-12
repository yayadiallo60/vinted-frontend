import React, { useState, useEffect } from "react";
import axios from "axios";

const Product = (id) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log(id);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}  `
      );

      setProduct(response.data);
      setIsLoading(false);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(id);
  useEffect(() => {
    fetchData();
  }, []);
  console.log(isLoading);
  return isLoading ? <div>En cours de chargement</div> : <div>{product}</div>;
};

export default Product;
