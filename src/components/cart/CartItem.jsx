import React from "react";
import "./cartItem.css";
import { addToCart, removeFromCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
function CartItem({ item }) {
  const { id, title, price, thumbnail } = item.cartItem;
  const quantity = item.quantity;

  const dispatch = useDispatch();
  function addCartStore(data) {
    dispatch(addToCart(data));
  }

  function removefromCartStore(id) {
    dispatch(removeFromCart(id));
  }

  return (
    <div className="cartItem">
      <div className="cartItemImage">
        <img src={thumbnail} />
      </div>
      {console.log()}
      <div className="cartItemTitle">
        {title.length > 12 ? title.slice(0, 14) + "..." : title}
      </div>
      <div className="priceContainer">
        <div className="counter">
          <button onClick={() => addCartStore(item)}>+</button>
          <span className="quantity">{quantity}</span>
          <button onClick={() => removefromCartStore(id)}>-</button>
        </div>
        <div className="price">
          ₹{price} x{quantity}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
