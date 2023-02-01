import React, { useState, useEffect, useContext } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getApiHostImage } from "../../config";
import { UserContext } from "../../Context/UserContext";
import { images } from "../../img/index";
import "./CompanyDetail.css"


export default function CompanyDetail() {

    const [companyData, setCompanyData] = useState({});
    const { getCompanyInfo } = useContext(UserContext);
    const { id } = useParams();
    const [logo, setLogo] = useState();

    ///Uss effect
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const detailData = async () => {
            await getCompanyDetail();
        };
        detailData();

    }, [id]);

    useEffect(() => {
        const companyDescription = document.getElementById("company-info");
        companyDescription.innerHTML = `${companyData?.info?.description}`;
    }, [companyData]);


    /// function
    const getCompanyDetail = async () => {
        let data = await getCompanyInfo(id);
        if (data) {
            setCompanyData(data);
            const image = data?.avatar;
            const splitString = image.split("/");
            const imageString = splitString[1] + "/".concat(splitString[2]);
            setLogo(imageString);
            return
        }
        return data;
    };


    return (
        <>
            {companyData && (
                <Container>
                    <Row className="row-detail-company">
                        <Col sm={9} md={9}>
                            <Card className="job-content mt-3 mb-3">
                                <Card.Img
                                    className="job-banner"
                                    variant="top"
                                    src="https://dxwd4tssreb4w.cloudfront.net/web/images/default_banner_1.svg"
                                />
                            </Card>

                            <Card.Body>
                                <Row className="titte m-2">
                                    <Col className="logo" sm={2} md={2}>
                                        <img
                                            className="image-logo"
                                            src={getApiHostImage() + `${logo}`}
                                        />
                                    </Col>

                                    <Col className="company mt-4" sm={10} md={10}>
                                        <Card.Title className="job-tittle">
                                            {companyData?.info?.name}
                                        </Card.Title>
                                    </Col>
                                </Row>

                                <div id="about" className="mt-3">
                                    <h2 className="require-title"> Về Công Ty </h2>
                                    <div id="company-info"></div>
                                </div>

                                <Link to={"/ListRcmCompany/" + id} className="btn-company-rcm">
                                    <div className="mt-3">
                                        <Button className="primary"> Việc đang tuyển </Button>
                                    </div>
                                </Link>
                            </Card.Body>
                        </Col>

                        <Col>
                            <img
                                className="list-banner mb-3 mt-3"
                                src={images.banner}
                                alt=""
                            />
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    )
}