import { List } from "antd";
import React from "react";
import { div, Col, Container, Row } from "react-bootstrap";
import "../ContactPage/contactpage.css";
import ContactItem from "./ContactItem";
import { BsBuilding } from "react-icons/bs";
import MetaData from "../../MetaData/MetaData";

export default function ContactPage() {
  const listContact = [
    { name: "Mr Thuận", phoneNumber: "0938765333" },
    { name: "Mr Cương", phoneNumber: "0909554667" },
    { name: "Mr Toàn", phoneNumber: "0349765234" },
    { name: "Mr Tùng", phoneNumber: "0312349884" },
    { name: "Mr Minh", phoneNumber: "0998743322" },
  ];

  return (
    <>
    <MetaData title="Liên hệ công ty"/>
      <div className="contact-page">
        <div className="container-contact-page">
          <Row>
            <Col>
              <div className="contact-background">
                <h2 className="contact-title mt-3">Thông tin liên hệ</h2>
                <Row className="row-list-item">
                  {listContact.map((item, index) => {
                    let color = "#";
                    for (let i = 0; i < 3; i++)
                      color += (
                        "0" +
                        Math.floor(
                          ((1 + Math.random()) * Math.pow(16, 2)) / 2
                        ).toString(16)
                      ).slice(-2);
                    const bgColor = color;
                    const red = Math.floor((Math.random() * 256) / 2);
                    const green = Math.floor((Math.random() * 256) / 2);
                    const blue = Math.floor((Math.random() * 256) / 2);
                    const bgLight =
                      "rgb(" + red + ", " + green + ", " + blue + ")";
                    return (
                      <Col key={index} md={6} sm={12}>
                        <ContactItem
                          item={item}
                          bgcolor={bgColor}
                          colorIcon={bgLight}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </div>

              <div className="contact-background">
                <h2 className="contact-title mt-3">Vị trí</h2>
                <p className="ms-2 mt-3">
                  {" "}
                  <b> Văn phòng tại Tp.Hồ Chí Minh</b>
                </p>
                <div className="contact-location mt-3">
                  <p>
                    <b>Địa chỉ: </b> Tòa nhà VIETTEL, 285 Cách Mạng Tháng 8,
                    Q.10, TP. Hồ Chí Minh
                  </p>
                  <p>
                    <b>Số điện thoại: </b>028 3767 1711
                  </p>
                  <p>
                    <b>Email: </b>{" "}
                    <a className="link"> XCareerBuilder@gmail.com </a>
                  </p>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62715.955194440714!2d106.66757232712574!3d10.753956263768526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f7d6f3efd25%3A0xa5e00b18ed1cfb7!2sT%C3%B2a%20nh%C3%A0%20Viettel%20Complex!5e0!3m2!1svi!2s!4v1672664177135!5m2!1svi!2s"
                  style={{
                    width: "100%",
                    height: "600px",
                    style: "border:0",
                    allowfullscreen: "",
                    loading: "lazy",
                    referrerpolicy: "no-referrer-when-downgrade",
                  }}
                ></iframe>

                <p className="ms-2 mt-5">
                  {" "}
                  <BsBuilding></BsBuilding> <b> Văn phòng tại Hà Nội</b>
                </p>
                <div className="contact-location mt-3">
                  <div className="ms-2 mt-2">
                    <p>
                      <b>Địa chỉ: </b> Phòng 307, DMC Tower, 537 Kim Mã, Ba
                      Đình, TP.Hà Nội
                    </p>
                    <p>
                      <b>Số điện thoại: </b>024 2319 4576
                    </p>
                    <p>
                      <b>Email: </b>{" "}
                      <a className="link"> XCareerBuilder@gmail.com </a>
                    </p>
                  </div>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0822760869946!2d105.80803525006507!3d21.02939368592931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab6be93a9bd9%3A0x3a6eb744e79dea70!2zVG_DoCBuaMOgIERNQw!5e0!3m2!1svi!2s!4v1672660073984!5m2!1svi!2s"
                  style={{
                    width: "100%",
                    height: "450px",
                    border: "0",
                    allowfullscreen: "",
                    loading: "lazy",
                    referrerpolicy: "no-referrer-when-downgrade",
                  }}
                ></iframe>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
