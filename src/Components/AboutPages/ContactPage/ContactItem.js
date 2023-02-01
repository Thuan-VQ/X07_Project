import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { TfiHeadphoneAlt } from "react-icons/tfi";

export default function ContactItem({ item, bgcolor,colorIcon }) {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
  return (
    <div className="contact-card">
      <Row className="row-item-contact">
        <Col sm={4} md={5} className="col-item-headphone">
          <div
            className="wrap-icon-contact"
            style={{
              backgroundColor: bgcolor,
            }}
          >
            <TfiHeadphoneAlt
              className="headPhone"
              style={{
                color: colorIcon,
              }}
            ></TfiHeadphoneAlt>
          </div>
          <div className="item-desc">
            <b>Nhân viên: </b>
            <b>Sđt: </b>
          </div>
        </Col>

        <Col sm={6} md={7}>
          <p>{item.name}</p>
          <p>{item.phoneNumber}</p>
        </Col>
      </Row>
    </div>
  );
}
