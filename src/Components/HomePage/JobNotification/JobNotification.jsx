import React from "react";
import { Container, Form, Row } from "react-bootstrap";
import "../JobNotification/JobNotification.css";

export default function JobNotification() {
  return (
    <div className="job-notification">
      <Container className="container-job-notification">
        <h1>Nhận bản tin việc làm</h1>
        <p>Cẩm nang việc làm và thông tin công việc mỗi tuần</p>
        <div className="form-send-email">
          <Form className="form-email">
            <Form.Group className="mb-3 input-email" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Nhập email của bạn" />
            </Form.Group>
            <button type="submit" className="btn btn-primary mb-3">Gởi email cho tôi</button>
          </Form>
        </div>
      </Container>
    </div>
  );
}
