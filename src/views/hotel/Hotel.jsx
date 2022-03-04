//dependency
import React from "react";
import "./Hotel.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FiSearch } from 'react-icons/fi';

//component
// import Carousel from 'react-multi-carousel';
// import WithStyles from 'react-multi-carousel';
import SliderCategories from '../../components/SliderCategories/SliderCategories';
import SliderBanner from '../../components/SliderBanner/SliderBanner';
import 'react-multi-carousel/lib/styles.css';

//assets
import LogoInhotels from "../../assets/img/hotel/DailyHotels-white.svg";
import LogoInhotels2 from "../../assets/img/hotel/DailyHotels-black.svg";
import DisplayPicture from "../../assets/img/hotel/display-picture.svg";
import Facebook from "../../assets/img/hotel/facebook.svg";
import Twitter from "../../assets/img/hotel/twitter.svg";
import Instagram from "../../assets/img/hotel/instagram.svg";
import Youtube from "../../assets/img/hotel/youtube.svg";
import Tiktok from "../../assets/img/hotel/tiktok.svg";
import Website from "../../assets/img/hotel/website.svg";
import FooterFacebook from "../../assets/img/hotel/facebook-footer.svg";
import FooterTwitter from "../../assets/img/hotel/twitter-footer.svg";
import FooterInstagram from "../../assets/img/hotel/instagram-footer.svg";

import Map from "../../assets/img/hotel/package/map.svg";
import FacilityParking from "../../assets/img/hotel/package/facility-parking.svg";
import FacilityWifi from "../../assets/img/hotel/package/facility-wifi.svg";
import FacilityGym from "../../assets/img/hotel/package/facility-gym.svg";
import FacilityCCTV from "../../assets/img/hotel/package/facility-cctv.svg";
import FacilityPool from "../../assets/img/hotel/package/facility-pool.svg";
import KontakMail from "../../assets/img/hotel/package/kontak-mail.svg";
import KontakPhone from "../../assets/img/hotel/package/kontak-phone.svg";

function Hotel() {
  return (
    <>
      <div className="hotel-container">

        {/* Preview Section Starts */}
        <div className="preview-section">
          <div className="logo-inhotels-container">
            <img className="logo-inhotels" src={LogoInhotels} alt="" />
          </div>
          <div className="hotel-atribute">
            <div className="hotel-logo-container">
              <img className="hotel-logo" src={DisplayPicture} alt="" />
            </div>
            <div className="hotel-name">
              Hotel Kampi
            </div>
            <div className="hotel-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
            <div className="hotel-media">
              <img className="hotel-social-media" src={Facebook} alt="" />
              <img className="hotel-social-media" src={Twitter} alt="" />
              <img className="hotel-social-media" src={Instagram} alt="" />
              <img className="hotel-social-media" src={Youtube} alt="" />
              <img className="hotel-social-media" src={Tiktok} alt="" />
              <img className="hotel-social-media" src={Website} alt="" />
            </div>
          </div>
        </div>
        {/* Preview Section Ends */}

        {/* Search Section Starts */}
        <div className="search-section-container">
          <div className="search-section">
            <InputGroup className={("search-area")}>
              <div className="search-icon">
                <FiSearch className="fi-search"/>
              </div>
              <FormControl className="text-area" placeholder="Everything is here ..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <Button className="search-button" variant="outline-danger" id="button-addon2">
                Search
              </Button>
            </InputGroup>
          </div>
        </div>
        {/* Search Section Ends */}

        {/* Slider Banner Starts*/}
        <SliderBanner/>
        {/* Slider Banner Ends */}

        {/* Slider Categories Starts*/}
        <SliderCategories/>
        {/* Slider Categories Ends */}

        {/* Alamat & Package Section Starts*/}
        
        <div className="package-section-container">
          <div className="package-section-inner">
            <div className="package-section-inner-left">
              <div className="package-section-inner-left-alamat-text">
                Alamat
              </div>
              <div className="package-section-inner-left-map-container">
                <img className="package-section-inner-left-map" src={Map} alt="" />
              </div>
              <div className="package-section-inner-left-alamat">
                Jl. Taman Apsari No.3-5, Embong Kaliasin, Kec. Genteng, Kota SBY, Jawa Timur 60271
              </div>
              <div className="package-section-inner-left-alamat-text">
                Fasilitas
              </div>
              <div className="package-section-inner-left-fasilitas">
                <div className="package-section-inner-left-fasilitas-container">
                  <div className="package-section-inner-left-fasilitas-item">
                    <img className="package-section-inner-left-fasilitas-icon" src={FacilityParking} alt="" />
                  </div>
                  <div className="package-section-inner-left-fasilitas-item">
                    Tempat Parkir
                  </div>
                </div>
                <div className="package-section-inner-left-fasilitas-container">
                  <div className="package-section-inner-left-fasilitas-item">
                    <img className="package-section-inner-left-fasilitas-icon" src={FacilityWifi} alt="" />
                  </div>
                  <div className="package-section-inner-left-fasilitas-item">
                    WiFi
                  </div>
                </div>
                <div className="package-section-inner-left-fasilitas-container">
                  <div className="package-section-inner-left-fasilitas-item">
                    <img className="package-section-inner-left-fasilitas-icon" src={FacilityGym} alt="" />
                  </div>
                  <div className="package-section-inner-left-fasilitas-item">
                    Gym Station
                  </div>
                </div>
                <div className="package-section-inner-left-fasilitas-container">
                  <div className="package-section-inner-left-fasilitas-item">
                    <img className="package-section-inner-left-fasilitas-icon" src={FacilityCCTV} alt="" />
                  </div>
                  <div className="package-section-inner-left-fasilitas-item">
                    Kamera CCTV
                  </div>
                </div>
                <div className="package-section-inner-left-fasilitas-container">
                  <div className="package-section-inner-left-fasilitas-item">
                    <img className="package-section-inner-left-fasilitas-icon" src={FacilityPool} alt="" />
                  </div>
                  <div className="package-section-inner-left-fasilitas-item">
                    Kolam Renang
                  </div>
                </div>
              </div>
              <div className="package-section-inner-left-kontak-text">
                Kontak
                <div className="package-section-inner-left-kontak-container">
                  <div className="package-section-inner-left-kontak-item">
                    <img className="package-section-inner-left-kontak-icon" src={KontakMail} alt="" />
                  </div>
                  <div className="package-section-inner-left-kontak">
                    hotelkampisurabayagub@gmail.com
                  </div>
                </div>
                <div className="package-section-inner-left-kontak-container">
                  <div className="package-section-inner-left-kontak-item">
                    <img className="package-section-inner-left-kontak-icon" src={KontakPhone} alt="" />
                  </div>
                  <div className="package-section-inner-left-kontak">
                    0888 - 2648 - 254
                  </div>
                </div>
              </div>
            </div>
            <div className="package-section-inner-right">
              Kanan
            </div>
          </div>
        </div>
        
        {/* Alamat & Package Section Ends */}

        {/* Footer Section Starts */}
        <div className="footer-section-container">
          <div className="footer-section-upper">
            <div className="footer-section-first">
              <div className="footer-section-first-logo">
                <img className="logo-inhotels2" src={LogoInhotels2} alt="" />
              </div>
              <div className="footer-section-first-text">
                The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.
              </div>
            </div>
            <div className="footer-section-second">
              <div className="footer-section-second-features" style={{ color: "#EB1C24" }}>
                Layanan
              </div>
              <div className="footer-section-second-features">
                Email Pemasaran
              </div>
              <div className="footer-section-second-features">
                Campaigns
              </div>
              <div className="footer-section-second-features">
                Branding
              </div>
            </div>
            <div className="footer-section-third">
              <div className="footer-section-third-features" style={{ color: "#EB1C24" }}>
                Layanan
              </div>
              <div className="footer-section-third-features">
                Tempat Tidur
              </div>
              <div className="footer-section-third-features">
                Kursi
              </div>
              <div className="footer-section-third-features">
                Semua
              </div>
            </div>
            <div className="footer-section-fourth">
              <div className="footer-section-fourth-features" style={{ color: "#EB1C24" }}>
                Ikuti Kami
              </div>
              <div className="footer-section-fourth-features">
                <div className="footer-section-fourth-icon">
                  <img className="logo-footer" src={FooterFacebook} alt="" />
                </div>
                <div className="footer-section-fourth-text">
                  Facebook
                </div>
              </div>
              <div className="footer-section-fourth-features">
                <div className="footer-section-fourth-icon">
                  <img className="logo-footer" src={FooterTwitter} alt="" />
                </div>
                <div className="footer-section-fourth-text">
                  Twitter
                </div>
              </div>
              <div className="footer-section-fourth-features">
                <div className="footer-section-fourth-icon">
                  <img className="logo-footer" src={FooterInstagram} alt="" />
                </div>
                <div className="footer-section-fourth-text">
                  Instagram
                </div>
              </div>
            </div>
          </div>
          <div className="footer-section-lower">
            <div className="footer-section-lower-first">
              Copyright © 2021
            </div>
            <div className="footer-section-lower-second">
              Syarat & Ketentuan
            </div>
            <div className="footer-section-lower-third">
              Kebijakan Privasi
            </div>
          </div>
        </div>
        {/* Footer Section Ends */}
      </div>
    </>
  );
}

export default Hotel;
