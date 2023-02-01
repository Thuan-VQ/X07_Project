import React, { Fragment, useState, useContext } from "react";
import { Space, Col, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import styles from "./JobCandidateApplication.module.css";
import classNames from "classnames/bind";
import { IoLogoUsd } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { JobContext } from "../../Context/JobContext";
import { getApiHostImage } from "../../config";
const cx = classNames.bind(styles);

function ApplicationItems({ job, recruimentId, id, handleDelete }) {
  const image = recruimentId?.name?.avatar;
  const splitString = image.split("/");
  const imageString = splitString[1] + "/".concat(splitString[2]);
  const [recruitmentStatus, setRecruitmentStatus] = useState(
    recruimentId?.status
  );

  const token = localStorage.getItem('token');
  const userToken = JSON.parse(token);

  

  return (
    <Fragment>
      <li className={cx("list_group_item")}>
        <Link to={"/jobDetail/" + id}>
          <div className={cx("box_item")}>
            <div className={cx("images")}>
              <img
                src={getApiHostImage()+`${imageString}`}
                alt="img"
              />
            </div>
            <div className={cx("content")}>
              <Link to={"/jobDetail/" + id} className={cx("title")}>
                {recruimentId?.title} -{" "}
                <span>
                  <IoLogoUsd></IoLogoUsd>
                </span>
                {recruimentId?.salary}(VNĐ)
              </Link>
              <div>
                <Link to={"/jobDetail/" + id} className={cx("company")}>
                  Công ty: {recruimentId?.name.info.name}
                </Link>
              </div>
              <div className={cx("address")}>
                <b>
                  {" "}
                  <span>
                    <IoLocationSharp></IoLocationSharp>
                    {recruimentId?.location?.name}{" "}
                  </span>{" "}
                </b>
              </div>
              <div className={cx("info_salary")}>
                <div className={cx("salary ")}>
                  <span> Vị trí làm việc: {recruimentId?.position} </span>
                </div>
              </div>
              <div className={cx("small_detail")}>
                <div className={cx("deadline")}>
                {job?.status === "active" && <p> Trạng thái đơn ứng tuyển: <strong className={cx('status-myjob')}>Đã chấp nhận</strong> </p>}
                  {job?.status === "denied" && <p> Trạng thái đơn ứng tuyển: <strong className={cx('status-myjob')}>Đã từ chối</strong> </p>}
                  {job?.status === "accepted" && <p> Trạng thái đơn ứng tuyển: <strong className={cx('status-myjob')}>Đã chấp nhận</strong></p>}
                  {job?.status === "pending" && <p> Trạng thái đơn ứng tuyển: <strong className={cx('status-myjob')}>Đang chờ</strong> </p>}
                </div>
                <div className={cx("deadline")}>
                  {recruitmentStatus==="active" && <p>Trạng thái tin tuyển dụng: <strong className={cx('status-rcm')}>Đang hoạt động</strong></p>}
                  {recruitmentStatus==="extended" && <p>Trạng thái tin tuyển dụng: <strong className={cx('status-rcm')}>Đã gia hạn</strong></p>}
                  {recruitmentStatus==="expire" && <p>Trạng thái tin tuyển dụng: <strong className={cx('status-rcm')}>Đã hết hạn</strong></p>}
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Row>
          <Col sm={5} md={5}></Col>
          <Col sm={4} md={4}></Col>
          <Col sm={3} md={3}>
            <button className={cx("delete-button")} onClick={(e) => handleDelete(job._id, userToken, e)} value="cancel">
              Hủy ứng tuyển
            </button>
          </Col>
        </Row>
      </li>
    </Fragment>
  );
}

export default ApplicationItems;
