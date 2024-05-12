import "./categoryContainer.css";
import furniture from "../../assets/images/furniture.png";
import groceries from "../../assets/images/groceries.png";
import laptop from "../../assets/images/laptop.png";
import smartphone from "../../assets/images/smartphone.png";
import homeDecoration from "../../assets/images/living-room.png";
import perfume from "../../assets/images/perfume-spray.png";
import womenClothes from "../../assets/images/womenClothes.png";
import skinCares from "../../assets/images/skinCares.png";
import { NavLink } from "react-router-dom";

function CategoryContainer() {
  return (
    <>
      <div className="categoryContainer">
        <NavLink to={`/category?cat=furniture`} className="singleCategory">
          <div className="categoryImage">
            <img src={furniture} alt="" srcSet="" />
          </div>
          <div className="categoryName">Furniture</div>
        </NavLink>
        <NavLink to={`/category?cat=skincare`} className="singleCategory">
          <div className="categoryImage">
            <img src={skinCares} alt="" srcSet="" />
          </div>
          <div className="categoryName">Skin Cares</div>
        </NavLink>
        <NavLink to={`/category?cat=laptops`} className="singleCategory">
          <div className="categoryImage">
            <img src={laptop} alt="" srcSet="" />
          </div>
          <div className="categoryName">Laptop</div>
        </NavLink>
        <NavLink to={`/category?cat=smartphones`} className="singleCategory">
          <div className="categoryImage">
            <img src={smartphone} alt="" srcSet="" />
          </div>
          <div className="categoryName">Smartphone</div>
        </NavLink>{" "}
        <NavLink to={`/category?cat=groceries`} className="singleCategory">
          <div className="categoryImage">
            <img src={groceries} alt="" srcSet="" />
          </div>
          <div className="categoryName">groceries</div>
        </NavLink>{" "}
        <NavLink
          to={`/category?cat=home-decoration`}
          className="singleCategory"
        >
          <div className="categoryImage">
            <img src={homeDecoration} alt="" srcSet="" />
          </div>
          <div className="categoryName">Home Decoration</div>
        </NavLink>{" "}
        <NavLink to={`/category?cat=fragrances`} className="singleCategory">
          <div className="categoryImage">
            <img src={perfume} alt="" srcSet="" />
          </div>
          <div className="categoryName">Perfume</div>
        </NavLink>
        <NavLink to={`/category?cat=womens-dresses`} className="singleCategory">
          <div className="categoryImage">
            <img src={womenClothes} alt="" srcSet="" />
          </div>
          <div className="categoryName">Women Clothes</div>
        </NavLink>
      </div>
    </>
  );
}
export default CategoryContainer;
