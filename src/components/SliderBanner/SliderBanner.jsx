//dependency
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./SliderBanner.css";

//assets
import Banner from "../../assets/img/hotel/slideritem/Banner.svg";

import LeftArrow from "../../assets/img/hotel/slideritem/leftArrow.svg";
import RightArrow from "../../assets/img/hotel/slideritem/rightArrow.svg";

const responsive = {
  // superLargeDesktop: {
  //   // the naming can be any, depends on you.
  //   breakpoint: { max: 4000, min: 3000 },
  //   items: 5
  // },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function SliderBanner() {
  return (
    <div className="slider-banner-container">
      <Carousel 
        className="carousel-banner-container"
        responsive={responsive}
        autoPlay={false}
        autoPlaySpeed={100000}
      >
        <div type="box" className="slider-banner">
          <img type="box" className="slider-banner-item" src={Banner} alt="" />
        </div>
        <div type="box" className="slider-banner">
          <img type="box" className="slider-banner-item" src={Banner} alt="" />
        </div>
        <div type="box" className="slider-banner">
          <img type="box" className="slider-banner-item" src={Banner} alt="" />
        </div>
        <div type="box" className="slider-banner">
          <img type="box" className="slider-banner-item" src={Banner} alt="" />
        </div>
        <div type="box" className="slider-banner">
          <img type="box" className="slider-banner-item" src={Banner} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default SliderBanner;