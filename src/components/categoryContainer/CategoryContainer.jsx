import "./categoryContainer.css";
import furniture from "../../assets/images/furniture.png";
import groceries from "../../assets/images/groceries.png";
import laptop from "../../assets/images/laptop.png";
import smartphone from "../../assets/images/smartphone.png";
import homeDecoration from "../../assets/images/living-room.png";
import perfume from "../../assets/images/perfume-spray.png";
import womenClothes from "../../assets/images/womenClothes.png";
import skinCares from "../../assets/images/skinCares.png";

function CategoryContainer() {
  return (
    <>
      <div className="categoryContainer">
        <div className="singleCategory">
          <div className="categoryImage">
            <img src={furniture} alt="" srcSet="" />
          </div>
          <div className="categoryName">Furniture</div>
        </div>
        <div className="singleCategory">
          <div className="categoryImage">
            <img src={skinCares} alt="" srcSet="" />
          </div>
          <div className="categoryName">Skin Cares</div>
        </div>
        <div className="singleCategory">
          <div className="categoryImage">
            <img src={laptop} alt="" srcSet="" />
          </div>
          <div className="categoryName">Laptop</div>
        </div>{" "}
        <div className="singleCategory">
          <div className="categoryImage">
            <img src={smartphone} alt="" srcSet="" />
          </div>
          <div className="categoryName">Smartphone</div>
        </div>{" "}
        <div className="singleCategory">
          <div className="categoryImage">
            <img src={groceries} alt="" srcSet="" />
          </div>
          <div className="categoryName">groceries</div>
        </div>{" "}
        <div className="singleCategory">
          <div className="categoryImage">
            <img src={homeDecoration} alt="" srcSet="" />
          </div>
          <div className="categoryName">Home Decoration</div>
        </div>{" "}
        <div className="singleCategory">
          <div className="categoryImage">
            <img src={perfume} alt="" srcSet="" />
          </div>
          <div className="categoryName">Perfume</div>
        </div>
        <div className="singleCategory">
          <div className="categoryImage">
            <img src={womenClothes} alt="" srcSet="" />
          </div>
          <div className="categoryName">Women Clothes</div>
        </div>
      </div>
    </>
  );
}
export default CategoryContainer;
