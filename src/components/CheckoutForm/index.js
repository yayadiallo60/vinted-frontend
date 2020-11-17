import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ userId, title, amount }) => {
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

      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit">Valider la commande</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
