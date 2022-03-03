import React from "react";
//dependency
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./ServiceLp.css";

//component
import Sosmed from "../../assets/img/phone.png";
import Mice from "../../assets/img/mice.png";
import FnB from "../../assets/img/fnb.png";
import RoomBooking from "../../assets/img/roomBooking.png";
function ServiceLp() {
  return (
    <div className="sl-container">
      <h2 className="sl-title">
        <span className="sl-title__span">Semua</span> Layanan
      </h2>
      <div className="sl-card-container">
        <div className="sl-card">
          <div className="sl-card-header">
            <img src={Sosmed} alt="rover" />
          </div>
          <div className="sl-card-body">
            <h4>Social Media</h4>
            <p>Facebook, Instagram, etc</p>
            <Link>Lihat Detail</Link>
          </div>
        </div>
        <div className="sl-card">
          <div className="sl-card-header">
            <img src={Mice} alt="rover" />
          </div>
          <div className="sl-card-body">
            <h4>MICE</h4>
            <p>Ballroom, Meetingroom, etc</p>
            <Link>Lihat Detail</Link>
          </div>
        </div>
        <div className="sl-card">
          <div className="sl-card-header">
            <img src={FnB} alt="rover" />
          </div>
          <div className="sl-card-body">
            <h4>FnB</h4>
            <p>Dine in, Delivery, etc</p>
            <Link>Lihat Detail</Link>
          </div>
        </div>
        <div className="sl-card">
          <div className="sl-card-header">
            <img src={RoomBooking} alt="rover" />
          </div>
          <div className="sl-card-body">
            <h4>Room Booking</h4>
            <p>Seasona, Bundling, etc</p>
            <Link>Lihat Detail</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceLp;
