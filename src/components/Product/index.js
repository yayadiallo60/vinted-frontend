import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

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
      // console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <div>En cours de chargement</div>
  ) : (
    <div className="offer-body">
      <div className="container">
        <div className="offer-content">
          <div className="left-side">
            <img
              src={product.product_image.secure_url}
              alt={product.product_name}
            />
          </div>
          <div className="right-side">
            <div className="right-side-up">
              <p className="price">{product.product_price}</p>
              {product.product_details.map((elem, index) => {
                const keys = Object.keys(elem); // chaque tour me renvoi la clé de l'element
                console.log(product);
                return (
                  <div className="info" key={index}>
                    <span className="info-details">{keys[0]}</span>
                    <span>{elem[keys[0]]}</span>
                  </div>
                );
              })}
            </div>
            <div className="right-side-down">
              <p className="product-name"> {product.product_name}</p>
              <div className="product-user">
                <img
                  className="avatar"
                  src={product.owner.account.avatar.secure_url}
                  alt={product.owner.account.username}
                />
                <p>{product.owner.account.username}</p>
              </div>

              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
