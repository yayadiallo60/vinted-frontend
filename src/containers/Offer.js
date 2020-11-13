import React from "react";
// import { Link } from "react-router-dom";

import Product from "../components/Product";
import { useParams } from "react-router-dom";

const Offer = () => {
  const params = useParams();
  const { id } = params;
  return (
    <div>
      <Product id={id} />
    </div>
  );
};

export default Offer;
