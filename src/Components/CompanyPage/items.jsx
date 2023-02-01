import React, { Fragment } from "react";
import {  AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./Company.module.css";
import classNames from "classnames/bind";
import { IoLocationSharp } from "react-icons/io5";

import { getApiHostImage } from "../../config";
const cx = classNames.bind(styles);
function CompanyItems({ company, id }) {
  let imageString
  if(company.avatar){
    const image = company?.avatar;
    const splitString = image.split("/");
     imageString = splitString[1] + "/".concat(splitString[2]);
  }
  else{
    imageString = ""
  }


  return (
    <Link to={"/CompanyDetail/" + id}>
      <Fragment>
        <li className={cx("list_group_item")}>
          <div className={cx("box_item")}>
            <div className={cx("images")}>
              <img src={getApiHostImage() + `${imageString}`} alt="" />
              {/* <img src={image} alt="" /> */}
            </div>
            <div className={cx("content")}>
              <div>
                <div className={cx("company")}>
                  {company?.info?.name}
                </div>
              </div>
              <div className={cx("address")}>
                <span>
                  <IoLocationSharp></IoLocationSharp>Địa điểm:{" "}
                  {company?.info?.address}{" "}
                </span>
              </div>
              <div className={cx("info_salary")}>
                <div className={cx("contact")}>
                  <span>
                    <AiOutlinePhone></AiOutlinePhone>
                  </span>{" "}
                  <span>Liên hệ: {company?.info?.phoneNumber} </span>
                </div>
              </div>
              <div className={cx("info_salary")}>
                <div className={cx("email-contact")}>
                  <span>
                    <AiOutlineMail></AiOutlineMail> Email:  {company?.info?.email}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </Fragment>

       </Link>
  );
}

export default CompanyItems;
