import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isEmail, isEmpty } from "../../../utils/validate";
import { loginUser } from "../../../Actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import MetaData from "../../MetaData/MetaData";
import { UserContext } from "../../../Context/UserContext";
import logo from "../../../img/loginbanner2.jpg";
import Loading from "../../Loading";
const cx = classNames.bind(styles);
const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialState);
  const [visible, setVisible] = useState(false);
  // const { loading } = useSelector((state) => state.auths);
  const { email, password } = data;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //Handle Even
  const handleClick = () => {
    setVisible(!visible);
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    //check fields
    if (isEmpty(email) || isEmpty(password))
      return toast.warn("Vui lòng điền tất cả thông tin !");
    // check email
    if (!isEmail(email))
      return toast.error("Vui lòng nhập một địa chỉ email hợp lệ !");
    if (email && password) {
      dispatch(loginUser(email, password, navigate));
    }
  };

  return (
    <>
      <ToastContainer />
      <MetaData title="Đăng nhập" />
      <div className={cx("container")}>
        <div className={cx("test")}>
          <div className={cx("banner")}>
            <h1 className={cx("header-banner-login")}>
              Xây dựng{" "}
              <b>
                Sự nghiệp <br />
                <span className={cx("text-primary")}>thành công</span>
              </b>{" "}
              cùng
              <br />
              Xjob.Mindx
            </h1>
            <div className={cx("yellow-circle")}></div>
            <img
              className={cx("image-banner-login")}
              src="https://dxwd4tssreb4w.cloudfront.net/web/images/pages/login/banner.png"
              alt=""
            />
          </div>

          <div className={cx("left")}>
            <div className={cx("circle-light")}></div>
            <div className={cx("container_login")}>
              <div className={cx("wrapper")}>
                <h1>Đăng nhập</h1>
                <form className={cx("login")} onSubmit={handleSubmitLogin}>
                  <div className={cx("group_input")}>
                    <label htmlFor="email">
                      Địa chỉ Email <span>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      className={cx("email")}
                      placeholder="vidu@mail.com"
                    />
                  </div>
                  <div className={cx("group_input")}>
                    <label htmlFor="password">
                      Mật khẩu <span>*</span>
                      <div className={cx("input_icon")} onClick={handleClick}>
                        {visible ? <MdVisibility /> : <MdVisibilityOff />}
                      </div>
                      <input
                        type={visible ? "text" : "password"}
                        id="password"
                        name="password"
                        onChange={handleChange}
                        className={cx("password")}
                        placeholder="Mật khẩu"
                      />
                    </label>
                  </div>
                  <div className={cx("login_actions")}>
                    <div className={cx("login_forgotPassword")}>
                      <Link to={"/forgot_password"}>Quên mật khẩu?</Link>
                    </div>
                    <div className={cx("register")}>
                      <Link to={"/register"}>Bạn chưa có tài khoản ?</Link>
                    </div>
                  </div>
                  <div className={cx("login_btn")}>
                    {/* {loading ? (
                      <button type="submit" disabled>
                        <Loading loading={loading} color={"#fff"} size={20} />
                      </button>
                    ) : (
                      <button type="submit">Đăng nhập</button>
                    )} */}
                    <button type="submit">Đăng nhập</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
