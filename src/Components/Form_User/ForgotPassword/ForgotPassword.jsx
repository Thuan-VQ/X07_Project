import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ForgotPassword.module.scss";
import { toast, ToastContainer } from "react-toastify";
import MetaData from "../../MetaData/MetaData";
import { isEmail, isEmpty } from "../../../utils/validate";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../../Actions/userAction";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const ForgotPassword = () => {
  const initialState = {
    email: "",
  };
  const [data, setData] = useState(initialState);
  const { email } = data;
  const dispatch = useDispatch();

  //handle even
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmitForgotPassword = (e) => {
    e.preventDefault();

    if (isEmpty(email)) {
      return toast.warn("Vui lòng nhập email !");
    }
    if (!isEmail(email)) {
      return toast.error("Địa chỉ email không đúng định dạng !");
    }

    dispatch(forgotPassword(email));
  };
  return (
    <>
      <ToastContainer />
      <MetaData title="Quên mật khẩu" />
      <div className={cx("container")}>
        <div className={cx("container_login")}>
          <div className={cx("wrapper")}>
            <h1>Quên mật khẩu</h1>
            <form className={cx("login")} onSubmit={handleSubmitForgotPassword}>
              <div className={cx("group_input")}>
                <label htmlFor="email">
                  Địa chỉ Email <span>*</span>
                </label>
                <p
                  style={{
                    fontSize: "12px",
                    textAlign: "left",
                    paddingBottom: "12px",
                  }}
                >
                  Vui lòng nhập địa chỉ email của bạn dưới đây để nhận được một
                  liên kết.
                </p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={cx("email")}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                />
              </div>

              <Link to={"/login"} className={cx("back_to_login")}>
                Đi đến đăng nhập <CiLogin />{" "}
              </Link>

              <div className={cx("login_btn")}>
                <button type="submit">Gửi Email</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
