import React, { useEffect, useState, useContext, useCallback } from "react";
import styles from "./AvailableRecruitment.module.css";
import classNames from "classnames/bind";
import MetaData from "../MetaData/MetaData";
import loadingAnimation from "../../animationJson/loading-animation.json";
import Lottie from "lottie-react";
import { Link, useSearchParams } from "react-router-dom";
import { images } from "../../img/index";
import { CiSearch } from "react-icons/ci";
import Select from "react-select";
import { JobContext } from "../../Context/JobContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import JobListRecruitment from "./JobListRecruitment";
const cx = classNames.bind(styles);

export const AvailableRecruitment = () => {
  const {
    getMyRecruitmentJobs,
    myJobRecruitment,
    setMyJobRecruitment,
    search,
    allCategory,
    page,
    fieldSort,
    typeSort,
    token,
    setSearch,
    removeRcm
  } = useContext(JobContext);
  const [selectedOptionsField, setSelectedOptionsField] = useState([]);
  const [isClearable, setIsClearable] = useState(true);
  const [params, setParams] = useSearchParams();
  const [complete, setComplete] = useState(false);
  const [confirmRemove, setConfirmRemove] = useState("")
  const setParamsKey = (key, value) => {
    // => biến 1 mảng  thành 1 object (param là 1 object đặc biệt)
    let currentParams = Object.fromEntries([...params]);
    setParams({ ...currentParams, [key]: value });
  };
////// Use Effect
  useEffect(() => {
    const getlocalToken = JSON.parse(localStorage.getItem("token"));
    getMyRecruitmentJobs(getlocalToken, "", "", "", "");
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getlocalToken = JSON.parse(localStorage.getItem("token"));
    const categoryParams = params.get("category");
    const dateParams = params.get("date");
    const statusParams = params.get("status")
    const searchParams = params.get("search")
    const getMyListJob = async (token, search, category, page, date, status) => {
      const myListJob = await getMyRecruitmentJobs(
        token,
        search,
        category,
        page,
        date,
        status
      );
      setMyJobRecruitment(myListJob.myRcm);
      return myListJob;
    };
    getMyListJob(getlocalToken, searchParams, categoryParams, "", dateParams, statusParams);
  }, [params]);

  useEffect(()=>{
    const getlocalToken = JSON.parse(localStorage.getItem("token"));
    const getData = async()=>{
      const data = await  getMyRecruitmentJobs(getlocalToken, "", "", "", "", "")
      return data
    }
    getData()
  },[confirmRemove])

///// Function 

setTimeout(() => {
  setComplete(true);
}, 2500);

  const listCategory = allCategory?.map((item) => {
    return {
      id: item._id,
      label: item.name,
    };
  });
  const listStatus = [
    {
      value: "expire",
      label: "Hết hạn",
    },
    {
      value: "pending",
      label: "Đang chờ duyệt",
    },
    {
      value: "active",
      label: "Đang hoạt động",
    },
    {
      value: "extended",
      label: "Được gia hạn",
    },
    {
      value: "removed",
      label: "Đã bị gỡ bỏ",
    },
  ];
  

  const handlSelectCategory = (e) => {
    let arrField = e;
    if (arrField.length == 0) {
      setParamsKey("category", "");
    } else {
      const id = arrField.map((item) => {
        return item.id;
      });
      if (id) {
        setParamsKey("category", id);
      }
    }
  };
  const handleSelectStatus = (e) => {
    let arrStatus = e;
    if (arrStatus === null) {
      setParamsKey("status", "")
    } else {
      const value = e.value
      if (value) {
        setParamsKey("status", value)
      }
    }
  };
  const removeMyRcm = async(id, e) => {
    removeRcm(id)
    setConfirmRemove(id)
    setTimeout(()=>{
      toast.success("Bạn đã gỡ tin tuyển dụng thành công")
    },1000)
  }

  const debounce = (func) => {
    let timer;
    return function (...arg) {
      const context = this;
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, arg)
      }, 800)
    }
  }

  const handleSearch = (e) => {
    setParamsKey("search", e.target.value)
    const value = e.target.value
    const getlocalToken = JSON.parse(localStorage.getItem("token"));
    const getMyListJob = (token, search, category, page, date, status) => {
      const myListJob = getMyRecruitmentJobs(
        token,
        search,
        category,
        page,
        date,
        status
      );
      setMyJobRecruitment(myListJob.myRcm);
      return myListJob;
    };
    getMyListJob(getlocalToken, value, "", "", "", "")
  }
  const optimiseVersion = useCallback(debounce(handleSearch), [])

  return (
    <>
      <ToastContainer />
      <MetaData title="Danh sách tin tuyển dụng đã đăng" />
      <div className={cx("container")}>
        <div className={cx("wrapper")}>
          <div className={cx("filter")}>
            <form action="">
              <div className={cx("form-group")}>
                <input
                  type="text"
                  placeholder="Tìm việc làm"
                  // onChange={(e) => setParamsKey("search", e.target.value)}
                  onChange={optimiseVersion}
                />
                <div className={cx("search-text")}>
                  <CiSearch />
                </div>
              </div>
              <div className={cx("form-group")}>
                <Select
                  isMulti
                  options={listCategory}
                  onChange={handlSelectCategory}
                  isOptionDisabled={() => selectedOptionsField.length >= 2}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder="Lĩnh Vực"
                />
              </div>
              <div className={cx("form-group")}>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  placeholder="Trạng thái tin tuyển dụng"
                  defaultValue=""
                  isClearable={isClearable}
                  name="status"
                  options={listStatus}
                  onChange={handleSelectStatus}
                />
              </div>

              <div className={cx("form-group-button")}>
                <button>
                  <CiSearch />
                </button>
              </div>
            </form>
          </div>
          <div className={cx("wrapper_content")}>
            <div className={cx("wrapper_jobs")}>
              <div className={cx("recruit_title")}>
                <div className={cx("left")}>
                  <h2 className={cx("header-myrcm")}>
                    Danh sách tin tuyển dụng của bạn
                  </h2>
                </div>
                <div className={cx("right")}>
                  <Link to="/upload_recruiment">Đăng tin tuyển dụng</Link>
                </div>
              </div>
              {/* <ul className={cx("list_group_jobs")}> */}
              {!complete ? (
                <div className="loading-job">
                  <Lottie
                    animationData={loadingAnimation}
                    className="loading-animation-list-cv"
                  ></Lottie>
                </div>
              ) : (
                <>
                  <div className={cx("recruit_title")}>
                    {/* <div className={cx("right")}>
                      <p>Sắp xếp</p>
                      <select
                        className={cx("select_box")}
                        onChange={(e) => setParamsKey("date", e.target.value)}
                      >
                        <option value="createAt">Mới đăng </option>
                        <option value="deadline">Sắp hết hạn</option>
                      </select>
                    </div> */}
                  </div>
                  <div>
                    <ul className={cx("list_group_jobs")}>
                      <JobListRecruitment myJobRecruitment={myJobRecruitment} removeRcm={removeMyRcm} />
                    </ul>
                  </div>
                </>
              )}

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
