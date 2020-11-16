import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import logovinted from "../Header/VintedLogo.png";
// card.owner.account.avatar.secure_url
const Card = ({ card, index }) => {
  // console.log(card._id);
  // div d'une carte
  return (
    <Link to={`/offer/${card._id}`}>
      <div className="card-container">
        <div className="card-user" key={index}>
          {card.owner.account.avatar ? (
            <img src={card.owner.account.avatar.secure_url} alt="avatar" />
          ) : (
            <img src={logovinted} alt="logovinted" />
          )}

          <span>{card.owner.account.username}</span>
        </div>
        <div className="picture">
          <img src={card.product_image.secure_url} alt={card.product_name} />
        </div>
        <div className="card-price-brand">
          <span>{card.product_price}</span> <span className="€">€</span>
          <span>{card.product_details[1].TAILLE}</span>
          <span>{card.product_details[0].MARQUE}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
