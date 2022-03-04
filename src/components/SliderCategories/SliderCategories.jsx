//dependency
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./SliderCategories.css";

//assets
import ItemSemua from "../../assets/img/hotel/slideritem/semua.svg";
import ItemMice from "../../assets/img/hotel/slideritem/mice.svg";
import ItemFnB from "../../assets/img/hotel/slideritem/fnb.svg";
import ItemRoom from "../../assets/img/hotel/slideritem/room.svg";
import ItemWellness from "../../assets/img/hotel/slideritem/wellness.svg";
import ItemGym from "../../assets/img/hotel/slideritem/gym.svg";
import ItemSwimming from "../../assets/img/hotel/slideritem/swimming.svg";
import ItemEvent from "../../assets/img/hotel/slideritem/event.svg";
import ItemPackage from "../../assets/img/hotel/slideritem/package.svg";

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
    items: 9
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

function SliderCategories() {
  return (
    <div className="slider-container">
      <Carousel 
        className="carousel-container"
        responsive={responsive}
        autoPlay={false}
        autoPlaySpeed={100000}
      >
        <div type="box" className="slider-box">
          <img type="box" className="slider-box-item" src={ItemSemua} alt="" />
          <div className="slider-box-item-name">
            Semua
          </div>
        </div>
        <div type="box" className="slider-box">
          <img type="box" className="slider-box-item" src={ItemMice} alt="" />
          <div className="slider-box-item-name">
            MICE
          </div>
        </div>
        <div type="box" className="slider-box">
          <img type="box" className="slider-box-item" src={ItemFnB} alt="" />
          <div className="slider-box-item-name">
            FnB
          </div>
        </div>
        <div type="box" className="slider-box">
          <img type="box" className="slider-box-item" src={ItemRoom} alt="" />
          <div className="slider-box-item-name">
            Room Service
          </div>
        </div>
        <div type="box" className="slider-box">
          <img type="box" className="slider-box-item" src={ItemWellness} alt="" />
          <div className="slider-box-item-name">
            Wellness
          </div>
        </div>
        <div type="box" className="slider-box">
          <img type="box" className="slider-box-item" src={ItemGym} alt="" />
          <div className="slider-box-item-name">
            Gym Station
          </div>
        </div>
        <div type="box" className="slider-box">
          <img type="box" className="slider-box-item" src={ItemSwimming} alt="" />
          <div className="slider-box-item-name">
            Swimming Pool
          </div>
        </div>
        <div type="box" className="slider-box">
          <img type="box" className="slider-box-item" src={ItemEvent} alt="" />
          <div className="slider-box-item-name">
            Event
          </div>
        </div>
        <div type="box" className="slider-box">
          <img type="box" className="slider-box-item" src={ItemPackage} alt="" />
          <div className="slider-box-item-name">
            Package
          </div>
        </div>
        <div type="box" className="slider-box">
          <img type="box" className="slider-box-item" src={ItemSemua} alt="" />
          <div className="slider-box-item-name">
            Semua
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default SliderCategories;