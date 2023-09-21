import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductItemCart from "../components/product/ProductItemCart";
import { useSearchParams } from "react-router-dom";
import loading from "../assets/Loading_Spinner.svg";
function Search() {
  const [searchList, setSearchList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("q");
  useEffect(() => {
    async function fetch() {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${search}`
      );
      setSearchList(response.data.products);
    }
    fetch();
  }, [search]);

  return (
    <>
      <h4
        style={{
          width: "400px",
          margin: "auto",
          color: "red",
          padding: "10px",
        }}
      >
        Search Result for: {search}
      </h4>
      <div className="productsListContainer">
        <div className="product">
          {searchList.length === 0 ? (
            <h4>Oops! No product found for this search</h4>
          ) : (
            searchList.map((product) => {
              return <ProductItemCart product={product} key={product.id} />;
            })
          )}
        </div>
      </div>
    </>
  );
}

export default Search;
