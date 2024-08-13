"use client";

import React from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "./sliderItem";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Slider = () => {
  return (
    <div>
      <SlickSlider {...settings}>
        <SliderItem
          title="Fresh & Healthy Organic Food"
          subTitle={<Discount discount={48} />}
        />
        <SliderItem
          title="Fresh & Healthy Organic Food"
          subTitle={<Discount discount={48} />}
        />
        <SliderItem
          title="Fresh & Healthy Organic Food"
          subTitle={<Discount discount={48} />}
        />
      </SlickSlider>
    </div>
  );
};

export default Slider;

const Discount = (props) => {
  return (
    <p className="text-body-xxl text-white text-opacity-60 px-3 border-l-2 border-success ">
      Sale Up to <br /> <span className="text-white">{props.discount}</span>%
      off
    </p>
  );
};
