import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./NotFound"
export default function NotFound() {
    return (
        <Container className="not-found">
            <Row>
                <Col sm={2} md={2}></Col>
                <Col sm={3} md={3}>
                    <img src="https://bizflyportal.mediacdn.vn/bizflyportal/459/347/2020/06/02/17/37/70515910726734841.jpg" />
                </Col>
                <Col sm={4} md={4}></Col>
                <Col sm={2} md={2}></Col>
            </Row>

        </Container>
    )
}