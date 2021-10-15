import React from "react";
import Slider from "react-slick";

const MobileSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
  };
  return (
    <div className="mobile-slider-container mobile-slider">
      <Slider {...settings}>
        <div className="single-hSlider hSlide-one">
          <img src="images/bg/mdiamond-luxury.jpg" alt="mobile" />
        </div>
        <div className="single-hSlider hSlide-one">
          <img src="images/bg/mgold-luxury.jpg" alt="mobile" />
        </div>
        <div className="single-hSlider hSlide-one">
          <img src="images/bg/msilver-luxury.jpg" alt="mobile" />
        </div>
        <div className="single-hSlider hSlide-one">
          <img src="images/bg/msilver.jpg" alt="mobile" />
        </div>
      </Slider>
    </div>
  );
};

export default MobileSlider;
