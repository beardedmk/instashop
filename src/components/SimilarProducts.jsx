import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItemCart from "./product/ProductItemCart";
import loading from "../assets/Loading_Spinner.svg";
import "./similarProducts.css";

function SimilarProducts({ productCategory, id }) {
  const [similarProducts, setSimilarProducts] = useState();
  useEffect(() => {
    let response = null;
    async function fetch() {
      response = await axios.get(
        `https://dummyjson.com/products/category/${productCategory}`
      );
      setSimilarProducts(response.data);
    }
    fetch();
  }, []);

  return (
    <>
      <h3>Similar Products</h3>
      <div className="similarItems">
        {similarProducts === undefined ? (
          <img src={loading} />
        ) : (
          similarProducts.products.map((product) => {
            return <ProductItemCart product={product} key={Math.random()} />;
          })
        )}
      </div>
    </>
  );
}

export default SimilarProducts;
