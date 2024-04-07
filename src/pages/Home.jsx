import React, { useMemo } from "react";
import Header from "../components/common/header/Header";
import BannerSlider from "../components/slider/BannerSlider";
import ProductItemCart from "../components/product/ProductItemCart";
import ProductList from "../components/product/ProductList";
import ProductDetails from "./productDetails/ProductDetails";
import SimilarProducts from "../components/SimilarProducts";
import CartItem from "../components/cart/CartItem";
import ShoppingCart from "../components/cart/ShoppingCart";
import { Outlet } from "react-router-dom";
import UserDetails from "../components/UserDetails";
import "./home.css";

// import laptop from "../assets/banners/laptop.png";
// import samsung from "../assets/banners/samsung.png";
// import women from "../assets/banners/women.png";

function Home() {
  // const images = [laptop, samsung, women];

  const sliderMemo = useMemo(() => {
    return (
      <>
        <BannerSlider />
        <ProductList />
      </>
    );
  });

  return (
    // <>
    //   <BannerSlider />
    //   <ProductList />
    // </>
    sliderMemo
  );
}

export default Home;
