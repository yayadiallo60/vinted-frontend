import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import "./index.css";

const CheckoutForm = ({ userId, title, amount }) => {
  const [completed, setCompleted] = useState(false);
  const [total, setTotal] = useState(0);
  let fraisPort = 3.5;
  let fraisProtection = 1.8;

  // setTotal((fraisPort + fraisProtection).toFixed(2));
  console.log(total);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //Récupere les elements de la CB
      const cardElement = elements.getElement(CardElement);

      //   Requete vers strip pour obtenir un token
      const stripeResponse = await stripe.createToken(cardElement, {
        name: userId,
      });
      //   console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;

      //Envoi du token vers notre back
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        { token: stripeToken, title, amount }
      );
      // console.log(response.data);

      if (response.data.status === "succeeded") {
        setCompleted(true);
      }
    } catch (error) {
      // console.log(error.message);
    }
  };

  return completed ? (
    <div>Merci pour votre achat</div>
  ) : (
    <div className="payement">
      <div className="payement-container">
        <div className="payement-card">
          <div className="card-content">
            <ul>
              <li>
                Commande
                <span>{amount} €</span>
              </li>
              <li>
                Frais de port
                <span>{fraisPort} €</span>
              </li>
              <li>
                Frais de protection des acheteurs{" "}
                <span>{fraisProtection} €</span>
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit}>
            <CardElement className="cbElt" />
            <button className="validBtn" type="submit">
              Valider la commande
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
