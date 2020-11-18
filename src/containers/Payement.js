import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/CheckoutForm";
import { useLocation } from "react-router-dom";

const Payement = ({ userId }) => {
  const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");
  const location = useLocation();
  console.log(location);
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        userId={userId}
        title={location.state.title}
        amount={location.state.amount}
      />
    </Elements>
  );
};

export default Payement;

// https://lereacteur-vinted.netlify.app/payment
