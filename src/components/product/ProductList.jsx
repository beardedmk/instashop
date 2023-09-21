import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../store/allProductsSlice";
import "./productList.css";
import ProductItem from "./ProductItemCart";
import { addToCart, removeFromCart } from "../../store/cartSlice";
import loading from "../../assets/Loading_Spinner.svg";
function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(
    (state) => state.productStore.allProductsReducer.allProducts
  );

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  function addCartStore(data) {
    dispatch(addToCart(data));
  }

  function removefromCartStore() {
    dispatch(removeFromCart(1));
  }

  const handleAddToCart = () => {
    // Dispatch the addToCart action with the product as the payload
    dispatch(addToCart({ dfvvd: "oduct" }));
  };

  return (
    <div className="productsListContainer">
      <div className="product">
        {!(products === undefined) ? (
          products.products.map((product) => {
            return <ProductItem product={product} key={product.id} />;
          })
        ) : (
          <img src={loading} />
        )}
      </div>
    </div>
  );
}

export default ProductList;
