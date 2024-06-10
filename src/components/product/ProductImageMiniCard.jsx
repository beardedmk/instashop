import "./productMiniCard.css";

function ProductImageMiniCard({ image }) {
  return (
    <div className="imageMiniCard">
      <img src={image} />
    </div>
  );
}

export default ProductImageMiniCard;
