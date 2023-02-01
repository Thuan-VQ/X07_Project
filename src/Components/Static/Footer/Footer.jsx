import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "../Footer/Footer.module.css";
import logo from "../../../img/xcareerlogo.png";
import { SiVerizon } from "react-icons/si";
import { JobContext } from "../../../Context/JobContext";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

export default function Footer() {
  const { allCategory, allLocation } = useContext(JobContext);
  let location = [];
  let category = [];
    if (allCategory) {
      category = [
        allCategory[0],
        allCategory[11],
        allCategory[12],
        allCategory[15],
        allCategory[6],
        allCategory[10],
      ];
    }
    if (allLocation) {
      location = [
        allLocation[0],
        allLocation[1],
        allLocation[2],
        allLocation[3],
        allLocation[4],
        allLocation[5],
      ];
    }
 

  return (
    <div className={cx("footer")}>
      <div className={cx("container-footer-content")}>
        <div className={cx("footer-content")}>
          <Row className={cx("row-footer-content")}>
            <Col sm={6} md={3}>
              <ul className={cx("list-footer-content")}>
                <p className={cx("header-footer-content")}>về MindXCareer</p>
                <div className={cx("wrap-content-item")}>
                  <Link to={"/Company_about"}>
                    <li className={cx("footer-content-item")}>Về chúng tôi</li>
                  </Link>
                  <Link to="/TermPage">
                    <li className={cx("footer-content-item")}>
                      Quy chế hoạt động
                    </li>
                  </Link>
                  <Link to="PrivacyPage">
                    <li className={cx("footer-content-item")}>
                      Quy định bảo mật
                    </li>
                  </Link>
                  <Link to="/CovenantPage">
                    <li className={cx("footer-content-item")}>
                      Thỏa thuận sử dụng
                    </li>
                  </Link>
                  <Link to="/ContactPage">
                    <li className={cx("footer-content-item")}>Liên hệ</li>
                  </Link>
                </div>
              </ul>
            </Col>
            <Col sm={6} md={3}>
              <div className={cx("for-candidate")}>
                <ul className={cx("list-footer-content")}>
                  <p className={cx("header-footer-content")}>
                    Dành cho ứng viên
                  </p>
                  <div className={cx("wrap-content-item")}>
                    <Link to={"/allJob"}>
                    <li className={cx("footer-content-item")}>Việc làm</li>
                    </Link>
                    <Link to={"/company"}>
                    <li className={cx("footer-content-item")}>Công ty</li>
                    </Link>
                    <li className={cx("footer-content-item")}>
                      Tìm việc nhanh
                    </li>
                  </div>
                </ul>
              </div>
            </Col>
            <Col sm={6} md={3}>
              <Row>
                <Col md={12}>
                  <ul className={cx("list-footer-content")}>
                    <p className={cx("header-footer-content")}>
                      Việc làm theo ngành nghề
                    </p>
                    {category?.map((item, index) => {
                      return (
                        <li className={cx("footer-content-item")} key={index}>
                          {item?.name}
                        </li>
                      );
                    })}
                  </ul>
                </Col>
                <Col>
                  <ul className={cx("list-footer-content")}>
                    <p className={cx("header-footer-content")}>
                      Việc làm theo khu vực
                    </p>
                    {location?.map((item, index) => {
                      return (
                        <li className={cx("footer-content-item")} key={index}>
                          {item?.name}
                        </li>
                      );
                    })}
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col sm={6} md={3}>
              <p className={cx("header-footer-content")}>Chứng nhận học giỏi</p>
              <div className={cx("verify-footer")}>
                <div className={cx("wrap-verify-icon")}>
                  <SiVerizon className={cx("verify-icon")}></SiVerizon>
                </div>
                <div className={cx("verify-content")}>
                  <p>Đã chứng nhận</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className={cx("container-footer-contact")}>
        <div className={cx("logo-contact")}>
          <img className={cx("image-logo-footer")} src={logo} />
        </div>
        <div className={cx("contact-content")}>
          <p>
            Tuyển dụng, tìm kiếm việc làm trực tuyến tại MindxCareer.vn |
            Customer Care:(028) 3867 1711 / contact@MindxCareer.vn
          </p>
          <p>
            CTY TNHH MINDXCAREER | GPĐKKD số 0123456789 do Sở KHĐT Kênh Nước Đen
            cấp ngày 24/11/2022
          </p>
          <p>
            Tòa nhà Viettel 279 Đường CMT8, Phường 12, Quận 10 Thành phố Hồ Chí Minh Copyright ©
            2007-2020 by https://www.mindxcareer.vn All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
