import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements;
  return (
    <div>
      <form>
        <CardElement />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default CheckoutForm;
