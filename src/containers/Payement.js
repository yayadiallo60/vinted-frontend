import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../components/CheckoutForm";

const Payement = ({ userId }) => {
  const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm userId={userId} />
    </Elements>
  );
};

export default Payement;
