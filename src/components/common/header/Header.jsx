import React, { useEffect, useMemo, useRef, useState } from "react";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductCategories } from "../../../store/productsCategoriesSlice";
import user from "../../../assets/images/user.png";
import cart from "../../../assets/images/cart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const categories = useSelector(
    (state) => state.productStore.productsCategoriesSliceReducer.categories,
  );
  const totalCartItems = useSelector(
    (state) => state.cartStore.cartItems.length,
  );
  const navigate = useNavigate();

  const searchRef = useRef();

  const fetchCategory = useMemo(() => {
    return () => {
      dispatch(
        fetchAllProductCategories("https://dummyjson.com/products/categories"),
      );
    };
  }, [dispatch]);

  useEffect(() => {
    fetchCategory();
  }, [fetchAllProductCategories]);

  function handleCartClick() {
    navigate("/cart");
  }

  function handleCategoryClick(category) {
    navigate(`/category?cat=${category}`);
  }

  function performSearch(query) {
    navigate(`/search?q=${query}`);
  }
  let debounce;
  function handleSearchChange() {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      searchRef.current.value.trim() != "" &&
        performSearch(searchRef.current.value.trim());
    }, 1500);
  }

  function handleUserClick() {
    navigate("/user");
  }

  return (
    <>
      <div className="headerContainer">
        <div className="headerNavbarContainer">
          <div className="brandContainer">
            <div
              className="brandName"
              onClick={() => {
                navigate("/");
              }}
            >
              <h1>Instashop</h1>
            </div>
          </div>
          <div className="searchBar">
            <input
              type="text"
              name=""
              ref={searchRef}
              placeholder="Search..."
              onChange={(e) => handleSearchChange(e)}
            />
            <div className="searchLogo">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
          <div className="cartUserContainer">
            <div className="avatar" onClick={() => handleUserClick()}>
              <img src={user} alt="user" />
            </div>
            <div className="cart" onClick={() => handleCartClick()}>
              {/* <FontAwesomeIcon icon={faCartShopping} /> */}
              <img src={cart} />
              <span className="cartNumber">{totalCartItems}</span>
            </div>
          </div>
        </div>
        <div className="headerCategoryContainer">
          {categories.slice(0, 10).map((category) => (
            // <div
            //   className="categoryItem"
            //   key={category}
            //   onClick={() => handleCategoryClick(category)}
            // >
            //   {category}
            // </div>

            <NavLink
              to={`/category?cat=${category}`}
              className="categoryItem"
              key={category}
            >
              {category}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default Header;
