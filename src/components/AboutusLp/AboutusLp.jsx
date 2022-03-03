import React from "react";
import "./AboutusLp.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// component
import FirstImage from "../../assets/img/about-us1.png";
import SecondImage from "../../assets/img/about-us2.png";

function AboutusLp() {
  return (
    <div className="al-container">
      <h2 className="al-title">
        <span className="al-title__span">Tentang</span> Kami
      </h2>
      <div className="al-first-section">
        <img src={FirstImage} alt="first image about us" className="al-first__image" />
        <div className="al-first__description">
          <p className="fd-tag">Ketersedian layanan</p>
          <h3 className="fd-title">Lorem Ipsum Dolor Amet</h3>
          <p className="fd-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <Link className="fd-link">Lihat Detail</Link>
        </div>
      </div>
      <div className="al-second-section">
        <div className="al-second__description">
          <p className="sd-tag">Ketersedian layanan</p>
          <h3 className="sd-title">Lorem Ipsum Dolor Amet</h3>
          <p className="sd-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <Link className="sd-link">Lihat Detail</Link>
        </div>
        <img src={SecondImage} alt="second image about us" className="al-second__image" />
      </div>
      <div className="al-third-section">
        <div className="al-third__box">
          <h2>Kenapa Memilih Kami</h2>
        </div>
        <div className="al-third__box">
          <h3>Layanan yang terintegrasi</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eveniet similique distinctio, molestias quibusdam rerum et ex, voluptatibus saepe dolore, error fugiat. Doloremque cum iste natus quis labore odio facere!</p>
        </div>
        <div className="al-third__box">
          <h3>Transparansi Harga</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eveniet similique distinctio, molestias quibusdam rerum et ex, voluptatibus saepe dolore, error fugiat. Doloremque cum iste natus quis labore odio facere!</p>
        </div>
        <div className="al-third__box">
          <h3>Banyak Pilihan</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eveniet similique distinctio, molestias quibusdam rerum et ex, voluptatibus saepe dolore, error fugiat. Doloremque cum iste natus quis labore odio facere!</p>
        </div>
      </div>
    </div>
  );
}

export default AboutusLp;
