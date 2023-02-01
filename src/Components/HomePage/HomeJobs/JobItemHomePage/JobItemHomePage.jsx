import React from "react";
import { Row, Col } from "react-bootstrap";
import { IoLogoUsd } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import "./JobItem.css";
import { Link } from "react-router-dom";
import { getApiHostImage } from "../../../../config";
export default function JobItemHomePage({ job, id }) {
  const image = job?.name?.avatar;
  const splitString = image.split("/");
  const imageString = splitString[1] + "/".concat(splitString[2]);

  return (
    <div className="job-item">
      <Link to={"/jobDetail/" + id}>
        <Row className="job-container">
          <div className="job-wrapper">
            <Col md={2} className="company-logo">
              <div className="logo-wraper">
                <img
                  className="logo-company"
                  src={getApiHostImage() + `${imageString}`}
                ></img>
              </div>
            </Col>

            <Col md={10}>
              <div className="job-desctiption">
                <div className="div-job-title">
                  <h1 className="job-title">{job?.title}</h1>
                </div>
                <p className="company-name">{job?.name?.info.name}</p>
                <p className="job-salary"><span><IoLogoUsd></IoLogoUsd></span> Lương : {job?.salary} (VNĐ)</p>
                <p className="job-location"><span><IoLocationSharp></IoLocationSharp></span><span style={{marginLeft:"7px"}}>{job?.location.name}</span></p>
              </div>
            </Col>
          </div>
        </Row>
      </Link>
    </div>
  );
}
