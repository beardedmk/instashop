import { useEffect, useState } from "react";
import "./productDetails.css";
import ProductImageMiniCard from "../../components/product/ProductImageMiniCard";
import { useDispatch, useSelector } from "react-redux";
import SimilarProducts from "../../components/SimilarProducts";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingleProduct } from "../../store/productSlice";
import { addToCart } from "../../store/cartSlice";

function ProductDetails() {
  const product = useSelector(
    (state) => state.productStore.productReducer.singleProductDetails,
  );
  const dispatch = useDispatch();
  const params = useParams();

  const images = product.images;
  const thumbnail = product.thumbnail;
  const title = product.title;
  const rating = product.rating;
  const price = product.price;
  const description = product.description;
  const productCategory = product.category;
  const productId = product.id;

  const urlId = params.id;
  const navigate = useNavigate();
  const [bigImage, setBigImage] = useState();
  useEffect(() => {
    dispatch(fetchSingleProduct(urlId));
    window.scrollTo(0, 0);
    setBigImage(thumbnail);
  }, [urlId, thumbnail]);

  function handleAddToCart(p) {
    dispatch(addToCart({ cartItem: product, quantity: 1 }));
  }
  function setDetailsImage(image) {
    setBigImage(image);
  }

  function handleBuy() {
    navigate("/order");
  }

  return (
    <div className="pd">
      <div className="productDetailsContainer">
        <div className="productDetailsImage">
          <div className="productImageList">
            {images &&
              images.map((image) => {
                const productId = product.id;
                return (
                  <div
                    key={`${productId}+${Math.random()}`}
                    onMouseEnter={() => {
                      setDetailsImage(image);
                    }}
                  >
                    <ProductImageMiniCard image={image} />
                  </div>
                );
              })}
          </div>
          <div className="productfullImage">
            <img src={bigImage} />
          </div>
        </div>
        <div className="productDescription">
          <div className="desc">
            <div className="productTitle">
              {title}: {description}
            </div>

            <div className="productRating">
              {rating} <span>&#9733;</span>
            </div>
            <div className="productPrice">
              <span>BestBuy at</span>₹{price}
            </div>
            <div className="description">
              <h3>Product Description:</h3>
              {description}
            </div>
          </div>
          <div className="buttons">
            <button onClick={() => handleAddToCart(product)}>
              Add To Cart
            </button>
            <button
              onClick={() => {
                handleBuy();
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="sameCategoryProduct">
        <SimilarProducts productCategory={productCategory} key={productId} />
      </div>
    </div>
  );
}

export default ProductDetails;
