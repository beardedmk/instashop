import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ProductItemCart from "../components/product/ProductItemCart";
import loading from "../assets/Loading_Spinner.svg";

function AllProductsByCategory() {
  const [categoryProducts, setCategoryProducts] = useState();

  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("cat");
  const URL = `https://dummyjson.com/products/category/${category}`;
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(URL);
      setCategoryProducts(response.data);
      // console.log(categoryProducts.products);
    };

    fetch();
  }, [URL]);
  return (
    <>
      <div
        style={{
          width: "fitContent",
          margin: "auto",
          padding: "10px",
          backgroundColor: "red",
          marginTop: "10px",
        }}
      >
        <h1
          style={{ display: "flex", justifyContent: "center", color: "white" }}
        >
          {category}
        </h1>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {categoryProducts == undefined ? (
          <img src={loading} />
        ) : (
          categoryProducts.products.map((product) => {
            return <ProductItemCart product={product} key={product.id} />;
          })
        )}
      </div>
    </>
  );
}

export default AllProductsByCategory;
