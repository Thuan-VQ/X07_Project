import React, { Fragment} from "react";
import { Link } from "react-router-dom";
import styles from "../AvailableRecruitment/AvailableRecruitment.module.css";
import classNames from "classnames/bind";
import { IoLogoUsd } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { Space } from "antd";
import { getApiHostImage } from "../../config";

const cx = classNames.bind(styles);

export default function RcmItem({ myJobRecruitment, id }) {

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
      <Link to={"/JobDetail/" + id}>
        <li className={cx("list_group_item")}>
          <div className={cx("box_item")}>
            <div className={cx("images")}>
              <img src={getApiHostImage() + `${imageString}`} alt="" />
            </div>
            <div className={cx("content")}>
              {myJobRecruitment.title}
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
                <Space>
                  <div className={cx("deadline")}>
                    Ngày tạo:{" "}
                    <span className="create-date me-5"> {newCreate}</span>
                  </div>
                  <div className={cx("deadline")}>
                    Ngày hết hạn:{" "}
                    <span className="deadline-date">{newDealine}</span>
                  </div>
                </Space>
              </div>
            </div>
          </div>
        </li>
      </Link>
    </Fragment>
  );
}


