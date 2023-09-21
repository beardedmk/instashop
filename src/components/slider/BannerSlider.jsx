import { useEffect, useMemo, useState } from "react";
import laptop from "../../assets/banners/laptop.png";
import samsung from "../../assets/banners/samsung.png";
import women from "../../assets/banners/women.png";
import "./bannerSlider.css";

function BannerSlider() {
  const images = [laptop, samsung, women];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bannerImages">
      <img src={images[currentImageIndex]} />
    </div>
  );
}

export default BannerSlider;
