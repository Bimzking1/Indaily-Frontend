//dependency
import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./LandingPage.css";
//component
import NavbarLp from "../../components/NavbarLp/NavbarLp";

function LandingPage() {
  return (
    <>
      <div className="lp-topLp">
        <NavbarLp />
        <div className="lp-jumbotron">
          <h2 className="lp-jumbotron__headline">Jadikan Bisnis Anda dengan Satu Tautan Saja</h2>
          <p className="lp-jumbotron__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <InputGroup className={("mb-3", "lp-jumbotron__search")}>
            <FormControl placeholder="inhotel.id/BuatTautanAndaDisini" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <Button className="search-btn" variant="outline-secondary" id="button-addon2">
              Buat
            </Button>
          </InputGroup>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
