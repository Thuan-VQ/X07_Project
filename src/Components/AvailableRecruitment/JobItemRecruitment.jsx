import React, { Fragment, useContext, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./AvailableRecruitment.module.css";
import classNames from "classnames/bind";
import { IoLogoUsd } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { useEffect } from "react";
import { getApiHostImage } from "../../config";
import { JobContext } from "../../Context/JobContext";
const cx = classNames.bind(styles);

function JobItemRecruitment({ myJobRecruitment, id ,removeRcm}) {

  const image = myJobRecruitment?.name?.avatar;
  const splitString = image.split("/");
  const imageString = splitString[1] + "/".concat(splitString[2]);
  let crTime = new Date(myJobRecruitment.createAt).getTime();
  let crDay = new Date(crTime).getDate();
  let crMonth = new Date(crTime).getMonth() + 1;
  let crYear = new Date(crTime).getFullYear();
  let newCreate = `${crDay}-${crMonth}-${crYear}`;

  let dlTime = new Date(myJobRecruitment.deadline).getTime();
  let dlDay = new Date(dlTime).getDate();
  let dlMonth = new Date(dlTime).getMonth() + 1;
  let dlYear = new Date(dlTime).getFullYear();
  let newDealine = `${dlDay}-${dlMonth}-${dlYear}`;

  return (
    <Fragment>
      <Link to={"/RJDetails/" + id}>
        <li className={cx("list_group_item")}>
          <div className={cx("box_item")}>
            <div className={cx("images")}>
              <img src={getApiHostImage() + `${imageString}`} alt="" />
            </div>
            <div className={cx("content")}>
              <Link to={"/RJDetails/" + id} className={cx("title")}>
                {myJobRecruitment.title}
              </Link>
              <div>
                <Link to={"/RJDetails/" + id} className={cx("company")}>
                  Công ty {myJobRecruitment.name.info.name}
                </Link>
              </div>
              <div className={cx("address")}>
                <span>
                  <IoLocationSharp></IoLocationSharp>Địa điểm:{" "}
                  {myJobRecruitment.location.name}{" "}
                </span>
              </div>
              <div className={cx("info_salary")}>
                <div className={cx("salary ")}>
                  <span>
                    <IoLogoUsd></IoLogoUsd>
                  </span>{" "}
                  <span>Lương: {myJobRecruitment.salary} (VNĐ) </span>
                </div>
              </div>
              <div className={cx("category")}>
                <span>{myJobRecruitment.category.name}</span>
              </div>
              <div className={cx("small_detail")}>
                <div className={cx("deadline")}>
                  Ngày tạo: <span className="create-date"> {newCreate}</span>
                </div>
                <div className={cx("deadline")}>
                  Ngày hết hạn:{" "}
                  <span className="deadline-date">{newDealine}</span>
                </div>
                <div className={cx("deadline")}>
                  {myJobRecruitment.status === "active" && (
                    <>
                      Trạng thái tin:
                      <span className={cx("status-myrcm-active")}>
                        Đang hoạt động
                      </span>
                    </>
                  )}
                  {myJobRecruitment.status === "removed" && (
                    <>
                      Trạng thái tin:
                      <span className={cx("status-myrcm-removed")}>
                        Đã bị gỡ bỏ
                      </span>
                    </>
                  )}
                  {myJobRecruitment.status === "pending" && (
                    <>
                      Trạng thái tin:
                      <span className={cx("status-myrcm-pending")}>
                        Đang chờ duyệt
                      </span>
                    </>
                  )}
                  {myJobRecruitment.status === "extended" && (
                    <>
                      Trạng thái tin:
                      <span className={cx("status-myrcm-extended")}>
                        Đã được gia hạn đến ngày {newDealine}
                      </span>
                    </>
                  )}
                  {myJobRecruitment.status === "expire" && (
                    <>
                      Trạng thái tin:
                      <span className={cx("status-myrcm-expire")}>
                        Đã hết hạn
                      </span>
                    </>
                  )}
                </div>
                <Link to={""}>
                  <div className={cx("update")} onClick={(e)=>removeRcm(id,e)}>
                    <button className={cx("btn-delete-rcm")}>Gỡ bỏ</button>
                  </div>
                </Link>
              </div>
              {myJobRecruitment.status === "removed" && (
                <>
                  <span className={cx("alert-myrcm-removed")}>
                    Hãy kiểm tra <strong>Email</strong> của bạn để biết được tại
                    sao tin của bạn bị gỡ bỏ.
                  </span>
                </>
              )}
            </div>
          </div>
        </li>
      </Link>
    </Fragment>
  );
}

export default JobItemRecruitment;
