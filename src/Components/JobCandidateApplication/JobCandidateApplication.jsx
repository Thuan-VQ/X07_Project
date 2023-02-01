import React, { useEffect, useState, useContext } from "react";

import styles from "./JobCandidateApplication.module.css";
import classNames from "classnames/bind";
import MetaData from "../MetaData/MetaData";
import { Link, useSearchParams } from "react-router-dom";
import HomeCategory from "../HomePage/HomeCategory/HomeCategory";
import { images } from "../../img/index";
import {  Row, Col } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { JobContext } from "../../Context/JobContext";
import ApplicationList from "./ApplicationList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cx = classNames.bind(styles);

export const JobCandidateApplication = () => {
  const { jobCandidateApplication, getJobCandidateApplication, deleteCV } = useContext(JobContext);
  const token = localStorage.getItem("token");
  const userToken = JSON.parse(token);
  const [confirmDelete, setConfirmDelete] = useState("")
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    getJobCandidateApplication(userToken, null);
  }, [userToken]);

  useEffect(() => {
    const getlocalToken = JSON.parse(localStorage.getItem("token"));
    const status = params.get("status");
    getJobCandidateApplication(getlocalToken, status);
  }, [params]);

  useEffect(() => {
    getJobCandidateApplication(userToken, "",);
  }, [confirmDelete])

  
  const setParamKey = (key, value) => {
    let currentParams = Object.fromEntries([...params]);
    setParams({ ...currentParams, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const status = params.get("status");
    getJobCandidateApplication(userToken, status);
  };

  const handleDelete = (idCV, token, e) => {
    deleteCV(idCV, token);
    setConfirmDelete(e.target.value);
    getJobCandidateApplication(token, "",);
    toast.warn("Bạn đã hủy đơn ứng tuyển")
  }


  return (
    <>
      <ToastContainer />
      <MetaData title="Công viện đã ứng tuyển" />
      <div className={cx("container")}>
        <div className={cx("wrapper")}>
          <div className={cx("wrapper_content")}>
            <div className={cx("wrapper_jobs")}>
              <form action="" onSubmit={handleSubmit} className={cx("select-bar")} style={{ padding: 0 }}>
                <Row className={cx("row-select")}>
                  <Col sm={3} md={2} className={cx("select-wrapper")}>
                    <select
                      className={cx("filter-status")}
                      onChange={(e) => setParamKey("status", e.target.value)}
                    >
                      <option value="">-- Trạng thái --</option>
                      <option value="accepted">Xác nhận </option>
                      <option value="denied">Từ chối </option>
                      <option value="pending">Đang chờ </option>
                    </select>
                  </Col>

                  <Col sm={3} md={3}>
                    <button id="button1" type="submit" className={cx("confirm")}>
                      {" "}
                      <CiSearch />
                    </button>
                  </Col>
                </Row>
              </form>
              <div className={cx("recruit_title")}>
                <div className={cx("left")}>
                  <h2 className={cx("header-jcd")}>Công việc đã ứng tuyển</h2>
                </div>
                <div className={cx("right")}>
                  <Link to="/"></Link>
                </div>
              </div>
              <div className={cx("recruit_title")}>
                <div className={cx("left")}>
                  <span>
                    {jobCandidateApplication?.length} <span>việc làm</span>
                  </span>
                </div>
              </div>

              {/* <ul className={cx("list_group_jobs")}> */}

              <div>
                <ul className={cx("list_group_jobs")}>
                  <ApplicationList
                    jobCandidateApplication={jobCandidateApplication}
                    handleDelete={handleDelete}
                  />
                </ul>
              </div>
              <div style={{ textAlign: "center" }}></div>
              {/* </ul> */}
            </div>
            <div className={cx("wrapper_banner")}>
              <img src={images.banner} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
