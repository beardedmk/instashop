import { useMemo, lazy, Suspense } from "react";
const BannerSlider = lazy(() => import("../components/slider/BannerSlider"));
import ProductList from "../components/product/ProductList";
import CategoryContainer from "../components/categoryContainer/CategoryContainer";

function Home() {
  const sliderMemo = useMemo(() => {
    return (
      <>
        <CategoryContainer />
        <BannerSlider />
        <Suspense fallback={<div>Loading...</div>}>
          <ProductList />
        </Suspense>
      </>
    );
  }, []);

  return sliderMemo;
}

export default Home;
