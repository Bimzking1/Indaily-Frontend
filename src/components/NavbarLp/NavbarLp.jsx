//dependency
import React from "react";
import "./NavbarLp.css";

//component
import { Nav, Navbar, Container, InputGroup, FormControl, Button } from "react-bootstrap";
import logoIndaily from "../../assets/img/logo-dailyhotels.png";

function NavbarLp() {
  return (
    <Navbar className="NLp-Container" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img className="NLp-logo" src={logoIndaily} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Tentang kami</Nav.Link>
            <Nav.Link href="#pricing">Layanan</Nav.Link>
            <Nav.Link href="#pricing">Harga</Nav.Link>
            <Nav.Link href="#pricing">Kontak</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <InputGroup className={("mb-3", "lp-jumbotron__search")}>
                <FormControl placeholder="Cari hotel" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              </InputGroup>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Button variant="primary">Primary</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLp;
