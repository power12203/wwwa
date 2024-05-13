import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = require.context("../img", false, /\.(png|jpe?g|svg)$/);
const keys = images.keys(); // filename

const imgList = keys.map((key) => images(key));
// console.log(imgList);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: -1,
  autoplay: true,
  autoplaySpeed: 2000, // Adjust as needed
};

const Carousel = () => {
  const [carouselStyle, setCarouselStyle] = useState(settings);
  useEffect(() => {
    setCarouselStyle({ ...carouselStyle, slidesToScroll: +1 });
  }, [carouselStyle]);
  return (
    <div style={{ width: "60%", margin: "10px auto" }}>
      <Slider {...carouselStyle}>
        {imgList.map((img) => (
          <div>
            <img src={img} width="100%" height="400px" alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
