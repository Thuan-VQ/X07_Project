import React, { useContext, useEffect, useRef, useState } from "react";
import logo from "../../../../img/xcareerlogo.png";
import { Link, useNavigate } from "react-router-dom";
import "./AuthHeader.css";
import { BsBuilding, BsSearch } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../../../../Context/UserContext";
import { logoutUser } from "../../../../Actions/authAction";



const AuthHeader = ({ mode }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auths);
  const {  logOutUser, currentUser, imageString} =
    useContext(UserContext);
  const [showUserBox, setShowUserBox] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const current = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    const closeUserBox = (e) => {
      const valueTarget = e.srcElement
      if( !valueTarget.classList.contains("content")){
        setShowUserBox(false);
      }
    };
    document.body.addEventListener("click", closeUserBox);
    return () => document.body.addEventListener("click", closeUserBox);
  });
  const handleLogOutUser = () => {
    logOutUser();
    navigate("/");
    setShowSideBar(false);
    dispatch(logoutUser(navigate));
  };
  // handleLogOutUser()
  const toggleUserBox = (e) => {
    setShowUserBox((prev) => !prev);
  };

  const openSidebar = () => {
    setShowSideBar(true);
  };
  const closeSideBar = () => {
    setShowSideBar(false);
  };

  return (
    <div className="header">
      <div className="header-logo">
        <Link to={"/"}>
          <img className="image-header" src={logo}></img>
        </Link>
      </div>
      <div className="header-navbar">
        <Link to={"/company"} className="navbar-content navbar-content-link company-navbar">
          <div className="navbar-content company-navbar">
            <BsBuilding className="icon-navbar"></BsBuilding>
            <p className="content">Danh sách công ty</p>
          </div>
        </Link>
        <div
          className="navbar-content account-user"
          onClick={() => toggleUserBox()}
        >
          <MdAccountCircle className="icon-navbar" ></MdAccountCircle>
          {!current ? <p className="content content-login">Đăng ký</p> : <></>}
          {(currentUser?.role === "recruiter" ||
            user?.role === "recruiter") && (
            <p className="content">Nhà tuyển dụng</p>
          )}
          {(currentUser?.role === "candidate" ||
            user?.role === "candidate") && (
            <p className="content">Người tìm việc</p>
          )}
          <RiArrowDropDownLine className="icon-dropdown-user"></RiArrowDropDownLine>
          {showUserBox && (
            <div
              className={
                !current
                  ? "control-account  control-account-position"
                  : "control-account"
              }
              id="control-account"
            >
              {current ? (
                <></>
              ) : (
                <div className="btn-control-account">
                  <Link to={"/login"} className="link-btn-header">
                    <button className="btn-login-header btn-header">
                      Đăng nhập
                    </button>
                  </Link>
                  <Link to={"/register"} className="link-btn-header">
                    <button className="btn-signin-header btn-header">
                      Đăng ký
                    </button>
                  </Link>
                </div>
              )}
              <div
                className={
                  user || current
                    ? "account-action-header border-bottom"
                    : "account-action-header"
                }
              >
                {!current && <></>}
                {current?.role == "recruiter" && (
                  <div className="account-action">
                    <Link to={"/availablerecruitment"}>
                      <p className="content-action">Tin tuyển dụng đã đăng</p>
                    </Link>
                    {!current.info ? (
                      <p className="alert-update-info content-action text-danger">
                        Cập nhật thông tin đầy đủ trước khi đăng tuyển
                      </p>
                    ) : (
                      <Link to={"/upload_recruiment"}>
                        <p className="content-action">Đăng tin tuyển dụng</p>
                      </Link>
                    )}

                    <Link to={"/update_info"}>
                      <p className="content-action">Cập nhật thông tin</p>
                    </Link>
                  </div>
                )}{" "}
                {current?.role == "candidate" && (
                  <div className="account-action">
                    <Link to={"/CandidateApplication"}>
                      <p className="content-action">Công việc đã ứng tuyển</p>
                    </Link>
                    <Link to={"/update_info"}>
                      <p className="content-action">Cập nhật thông tin</p>
                    </Link>
                  </div>
                )}
              </div>
              {(current || user) && (
                <div className="account-info-header">
                  <div
                    className="wrap-btn-logout"
                    onClick={() => handleLogOutUser()}
                  >
                    <div className="btn-logout">
                      <BiLogOut className="icon-logout"></BiLogOut>
                      <div className="logout">Đăng xuất</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="container-icon-sidebar" onClick={() => openSidebar()}>
        <FaBars className="icon-open-sidebar"></FaBars>
      </div>
      <div
        className={
          showSideBar
            ? "navbar-sidebar show-sidebar open-sidebar"
            : "navbar-sidebar show-sidebar close-sidebar"
        }
      >
        <div className="close-sidebar-container" onClick={() => closeSideBar()}>
          <AiOutlineClose className="close-icon-sidebar"></AiOutlineClose>
        </div>
        {!user && (
          <div className="btn-sidebar-container show-btn-sidebar">
            <Link to={"/login"} onClick={() => closeSideBar()}>
              <button className="btn-login-header btn-header">Đăng nhập</button>
            </Link>
            <Link to={"/register"} onClick={() => closeSideBar()}>
              <button className="btn-signin-header btn-header">Đăng ký</button>
            </Link>
          </div>
        )}
        {user && (
          <div className="btn-sidebar-container btn-sidebar-container-user show-btn-sidebar">
            <Link
              className="logo-sidebar"
              to={"/"}
              onClick={() => closeSideBar()}
            >
              <img className="img-logo-sidebar" src={logo}></img>
            </Link>
            {current?.role === "candidate" && (
              <div className="action-sidebar">
                <Link
                  to={"/CandidateApplication"}
                  onClick={() => closeSideBar()}
                >
                  <p className="content-action">Công việc đã ứng tuyển</p>
                </Link>
                <Link to={"/update_info"} onClick={() => closeSideBar()}>
                  <p className="content-action">Cập nhật thông tin</p>
                </Link>
              </div>
            )}
            {current?.role === "recruiter" && (
              <div className="action-sidebar">
                <Link
                  to={"/availablerecruitment"}
                  onClick={() => closeSideBar()}
                >
                  <p className="content-action">Tin tuyển dụng đã đăng</p>
                </Link>
                {!current.info ? (
                  <p
                    className="alert-update-info content-action text-danger"
                    onClick={() => closeSideBar()}
                  >
                    Cập nhật thông tin đầy đủ trước khi đăng tuyển
                  </p>
                ) : (
                  <Link
                    to={"/upload_recruiment"}
                    onClick={() => closeSideBar()}
                  >
                    <p className="content-action">Đăng tin tuyển dụng</p>
                  </Link>
                )}

                <Link to={"/update_info"} onClick={() => closeSideBar()}>
                  <p className="content-action">Cập nhật thông tin</p>
                </Link>
              </div>
            )}
          </div>
        )}
        <div
          className={
            current
              ? "navbar-sidebar-content navbar-sidebar-content-user show-content-sidebar"
              : "navbar-sidebar-content  show-content-sidebar"
          }
        >
          <div className="navbar-content company-navbar">
            <BsBuilding className="icon-navbar"></BsBuilding>
            <p className="content">Danh sách công ty</p>
          </div>
          <div className="navbar-content location-navbar">
            <BsSearch className="icon-navbar"></BsSearch>
            <p className="content">Địa điểm/Ngành nghề</p>
          </div>
        </div>
        {current ? (
          <div
            className="btn-logout-sidebar"
            onClick={() => handleLogOutUser()}
          >
            <BiLogOut className="icon-logout"></BiLogOut>
            <div className="logout">Đăng xuất</div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div
        className={
          showSideBar ? "modal-header-home" : "close-modal modal-header-home"
        }
      ></div>
    </div>
  );
};

export default AuthHeader;
