import React from "react";
import "./header.css";
function Header() {
  return (
    <>
      <div className="headerContainer">
        <div className="headerNavbarContainer">
          <div className="brandContainer">
            <div className="horizontalLine">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="brandName">
              <h1>Instashop</h1>
            </div>
          </div>
          <div className="searchBar">
            <input type="text" name="" />
            <div className="searchLogo">S</div>
          </div>
          <div className="cart"></div>
          <div className="avatar"></div>
        </div>
        <div className="headerCategoryContainer"></div>
      </div>
    </>
  );
}

export default Header;
