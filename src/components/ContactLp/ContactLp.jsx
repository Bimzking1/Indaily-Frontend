import React from "react";
import "./ContactLp.css";
import { FloatingLabel, Form, Button } from "react-bootstrap";
function ContactLp() {
  return (
    <div className="cl-container">
      <h2 className="cl-title">
        <span className="cl-title__span">Kontak</span> Kami
      </h2>
      <div className="cl-boxs">
        <Form className="cl-left-boxs">
          <h5 className="cl-left-title">Tinggalkan pesan</h5>
          <FloatingLabel controlId="floatingInput" label="Nama lengkap anda" className="mb-3">
            <Form.Control type="text" placeholder="Maskurnia shidi" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Alamat email anda" className="mb-3">
            <Form.Control type="text" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: "100px" }} />
          </FloatingLabel>
          <Button className="btn-contact" variant="primary" type="submit">
            Kirim Pesan
          </Button>
        </Form>
        <div className="cl-right-boxs"></div>
      </div>
    </div>
  );
}

export default ContactLp;
