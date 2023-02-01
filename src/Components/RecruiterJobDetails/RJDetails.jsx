import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import {
  Card,
  Container,
  Col,
  Row,
  Button,
} from "react-bootstrap";
import { AiOutlineDollarCircle } from "react-icons/ai";
import {
  BsBriefcase,
  BsCalendar2Check,
  BsClockHistory,
  BsDiagram3,
  BsPerson,
} from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { TiFlowChildren } from "react-icons/ti";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { MdOutlineWorkOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useParams} from "react-router-dom";
import { JobContext } from "../../Context/JobContext";
import "./RJDetails.css";
import { UserContext } from "../../Context/UserContext";
import { getApiHostImage } from "../../config";
export default function RJDetails() {
  const { user } = useSelector((state) => state.auths);
  const { currentUser } = useContext(UserContext);
  const { fetchJobDetail } = useContext(JobContext);
  const [logo, setLogo] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");

  // const [active, setActive] = useState(false);


  const { id } = useParams();
  const [jobData, setJobData] = useState({});
  useEffect(() => {
    const detailData = async () => {
      await getJobDetail();
    };
    detailData();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const description = document.getElementById("description");
    description.innerHTML = `
        ${jobData.description}
    `;
    const compnayDescription = document.getElementById("about-info");
    compnayDescription.innerHTML = `
        ${jobData?.name?.info?.description}
    `;

    let crTime = new Date(jobData.createAt).getTime();
    let crDay = new Date(crTime).getDate();
    let crMonth = new Date(crTime).getMonth() + 1;
    let crYear = new Date(crTime).getFullYear();
    let newCreate = `${crDay}-${crMonth}-${crYear}`;
    setCreateDate(newCreate);

    let dlTime = new Date(jobData.deadline).getTime();
    let dlDay = new Date(dlTime).getDate();
    let dlMonth = new Date(dlTime).getMonth() + 1;
    let dlYear = new Date(dlTime).getFullYear();
    let newDealine = `${dlDay}-${dlMonth}-${dlYear}`;
    setDeadlineDate(newDealine);
  }, [jobData]);

  const getJobDetail = async () => {
    let data = await fetchJobDetail(id);
    if (data) {
      setJobData(data);
      const image = data?.name?.avatar;
      const splitString = image.split("/");
      const imageString = splitString[1] + "/".concat(splitString[2]);
      return setLogo(imageString);
    }
    return data;
  };


  const scrollToElement = (elementID) => {
    const element = document.getElementById(elementID);
    const offsetTop = element.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      {jobData && (
        <Container>
          <Row>
            <Col sm={9} md={9}>
              <Card className="job-content mt-3 mb-3">
                <Card.Img
                  className="job-banner"
                  variant="top"
                  src="https://dxwd4tssreb4w.cloudfront.net/web/images/default_banner_1.svg"
                />

                <Card.Body>
                  <Row className="titte m-2">
                    <Col className="logo" sm={2} md={2}>
                      <img
                        className="image-logo"
                        src={getApiHostImage()+`${logo}`}
                      />
                    </Col>

                    <Col className="company" sm={10} md={10}>
                      <Card.Title className="job-tittle">
                        {" "}
                        {jobData?.title}
                      </Card.Title>
                      <h3> {jobData?.name?.info?.name}</h3>
                    </Col>
                  </Row>

                  <div className="job-details">
                    <p className="mt-2" style={{ fontWeight: "bolder" }}>
                      <CiLocationOn className="me-2"></CiLocationOn>{" "}
                      {jobData?.location?.name}
                    </p>
                    <p className="mt-2">
                      <AiOutlineDollarCircle className="me-2"></AiOutlineDollarCircle>
                      <b>Lương</b>:{" "}
                      <span className="salary">{jobData?.salary} (VNĐ)</span>
                    </p>
                    <p className="mt-2">
                      <MdOutlineWorkOutline className="me-2"></MdOutlineWorkOutline>{" "}
                      {jobData?.experience} kinh nghiệm
                    </p>
                    <Row className="mt-2">
                      <Col sm={5} md={5}>
                        <BsCalendar2Check className="me-2"></BsCalendar2Check>
                        <b>Ngày đăng tuyển:</b>{" "}
                        <span className="create-date"> {createDate}</span>
                      </Col>
                      <Col sm={5} md={5}>
                        <b>Ngày hết hạn:</b>{" "}
                        <span className="deadline-date">{deadlineDate}</span>
                      </Col>
                    </Row>

                    {(user?.role == "recruiter" ||
                      currentUser?.role == "recruiter") && (
                      <Row className="mt-2">
                          <Col sm={12} md={3}>
                        <Link to={"/update/" + jobData?._id}>
                            <Button
                              className="job-button"
                              variant="primary"
                            >
                              Cập Nhật
                            </Button>
                        </Link>
                          </Col>
                        <Col sm={12} md={4}>
                          <Link to={`/candidateList/${id}`}>
                            <Button
                              className="job-button"
                              variant="outline-primary"
                            >
                              Danh sách ứng viên
                            </Button>
                          </Link>
                        </Col>
                      </Row>
                    )}
                  </div>

                  <div className="tab-rows">
                    <Row className="ms-2 p-2">
                      <Col sm={2} md={2}>
                        <a
                          className="job-tab"
                          onClick={() => scrollToElement("des-title")}
                        >
                          {" "}
                          Mô tả
                        </a>
                      </Col>

                      <Col sm={2} md={2}>
                        <a
                          className="job-tab"
                          onClick={() => scrollToElement("require")}
                        >
                          {" "}
                          Yêu cầu{" "}
                        </a>
                      </Col>

                      <Col sm={3} md={3}>
                        <a
                          className="job-tab"
                          onClick={() => scrollToElement("info")}
                        >
                          {" "}
                          Mô tả bổ sung
                        </a>
                      </Col>

                      <Col sm={3} md={3}>
                        <a
                          className="job-tab"
                          onClick={() => scrollToElement("about")}
                        >
                          {" "}
                          Về công ty
                        </a>
                      </Col>

                      <Col sm={2} md={2}></Col>
                    </Row>
                  </div>

                  <div id="des-title">
                    <h2 className="require-title"> Mô tả </h2>
                    <div id="description" className="mt-3"></div>
                  </div>

                  <div id="require" className="mt-3">
                    <h2 className="require-title"> Yêu Cầu </h2>
                    <Row>
                      <Col sm={6} md={6}>
                        <Card>
                          <Card.Body>
                            <div>
                              <h3 className="require-text">
                                <BsBriefcase className="me-2"></BsBriefcase> Vị
                                trí
                              </h3>
                              <p className="ms-2"> {jobData?.position}</p>
                            </div>

                            <div className="mt-3">
                              <h3 className="require-text">
                                {" "}
                                <BsDiagram3 className="me-2"></BsDiagram3> Cấp
                                bậc
                              </h3>
                              <p className="ms-2"> {jobData?.level}</p>
                            </div>

                            <div className="mt-3">
                              <h3 className="require-text">
                                {" "}
                                <BsClockHistory className="me-2"></BsClockHistory>{" "}
                                Thời gian làm việc
                              </h3>
                              <> 
                              <p className="ms-2"> {jobData?.type}</p>
                              </>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col sm={6} md={6}>
                        <Card>
                          <Card.Body>
                            <div>
                              <h3 className="require-text">
                                {" "}
                                <RxAvatar className="me-2"></RxAvatar>Kinh
                                nghiệm
                              </h3>
                              <p className="ms-2">
                                {" "}
                                {jobData?.experience} kinh nghiệm
                              </p>
                            </div>

                            <div className="mt-3">
                              <h3 className="require-text">
                                {" "}
                                <BsPerson className="me-2"></BsPerson>Số lượng
                              </h3>
                              <p className="ms-2">
                                {" "}
                                {jobData?.numberApplicant} nhân viên
                              </p>
                            </div>

                            <div className="mt-3">
                              <h3 className="require-text">
                                <TiFlowChildren className="me-2">
                                </TiFlowChildren>
                                Độ tuổi{" "}
                              </h3>
                              <p className="ms-2"> {jobData?.age} tuổi</p>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </div>

                  <div id="info" className="mt-3">
                    <h2 className="require-title"> Thông tin liên hệ </h2>
                    <p className="ms-2 mt-3">
                      {" "}
                      Tên Liên hệ: <b>Phòng Nhân Sự</b>
                    </p>
                    <p className="ms-2 mt-3">
                      {" "}
                      <CiLocationOn></CiLocationOn>{" "}
                      {jobData?.name?.info?.address}{" "}
                    </p>
                    <p className="ms-2 mt-3">
                      {" "}
                      <CiPhone> </CiPhone> {jobData?.name?.info?.phoneNumber}
                    </p>
                  </div>

                  <div id="about" className="mt-3">
                    <h2 className="require-title"> Về Công Ty </h2>
                    <div id="about-info"></div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={4} md={4}></Col>
          </Row>
        </Container>
      )}
    </>
  );
}
