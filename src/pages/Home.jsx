import React, { useMemo, lazy, Suspense } from "react";
const BannerSlider = lazy(() => import("../components/slider/BannerSlider"));
import ProductList from "../components/product/ProductList";

function Home() {
  const sliderMemo = useMemo(() => {
    return (
      <>
        <BannerSlider />
        <Suspense fallback={<div>Loading...</div>}>
          <ProductList />
        </Suspense>
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
