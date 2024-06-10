import "./productItemCart.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";

function ProductItemCart({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const priceAfterDiscount = (mp, ds) => {
    return ((mp * (100 - ds)) / 100).toFixed(2);
  };

  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }

  function handleCardClick(id) {
    navigate(`/productdetail/${id}`);
  }

  return (
    <div className="ProductItemContainer">
      <div
        onClick={() => {
          handleCardClick(product.id);
        }}
      >
        <div>
          <div className="productImage">
            <img src={product.thumbnail} />
          </div>

          <div className="productTitle">{product.title}</div>
        </div>
      </div>
      <div>
        <div className="productDetails">
          <div className="productPrice">
            <div className="printedPrice">
              <div className="markedPrice">₹{product.price}</div>
              <div className="discount">{product.discountPercentage}% off</div>
            </div>
            <div className="sellingPrice">
              ₹{priceAfterDiscount(product.price, product.discountPercentage)}
            </div>
          </div>
        </div>

        <div className="button">
          <button
            onClick={() => handleAddToCart({ cartItem: product, quantity: 1 })}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItemCart;
