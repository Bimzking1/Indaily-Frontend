import React from "react";
import "./TestimonialLp.css";

//compoent
import Testi1 from "../../assets/img/testi 1.png";
import Testi2 from "../../assets/img/testi 2.png";
function TestimonialLp() {
  return (
    <div className="tl-container">
      <h2 className="tl-title">
        <span className="tl-title__span">Testimoni</span> Pengguna
      </h2>
      <div className="tl-cards-container">
        <img src={Testi1} alt="testimoni 1" />
        <img src={Testi1} alt="testimoni 1" />
        <img src={Testi1} alt="testimoni 1" />
      </div>
    </div>
  );
}

export default TestimonialLp;
