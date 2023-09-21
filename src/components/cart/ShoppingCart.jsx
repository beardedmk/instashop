import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./shoppingCart.css";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../store/cartSlice";

function ShoppingCart() {
  const cartItems = useSelector((state) => state.cartStore.cartItems);
  const tPrice = useSelector((state) => state.cartStore.totalPrice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function placeOrder() {
    navigate("/order");
    dispatch(clearCart());
  }

  return (
    <div className="shoppingCartContainer">
      {cartItems.length === 0 ? (
        <span className="emptySpan">Cart is Empty!</span>
      ) : (
        <div className="shoppingCart">
          <div className="priceColumn">
            <span>
              Total price: <span style={{ color: `#d2691e` }}>₹{tPrice}</span>
            </span>
            <button
              className="placeOrderButton"
              onClick={() => {
                placeOrder();
              }}
            >
              Place Order
            </button>
          </div>
          {cartItems.map((item) => {
            return <CartItem item={item} key={item.cartItem.id} />;
          })}
        </div>
      )}
    </div>
  );
}
export default ShoppingCart;
