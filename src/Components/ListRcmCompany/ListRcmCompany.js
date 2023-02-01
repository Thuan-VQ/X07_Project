import React, { useEffect, useState, useContext } from "react";
import styles from "../AvailableRecruitment/AvailableRecruitment.module.css";
import classNames from "classnames/bind";
import MetaData from "../MetaData/MetaData";
import loadingAnimation from "../../animationJson/loading-animation.json";
import Lottie from "lottie-react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { images } from "../../img/index";
import { JobContext } from "../../Context/JobContext";
import ListRcm from "./ListRcm";
const cx = classNames.bind(styles);

export const ListRcmCompany = () => {
  const {
    myJobRecruitment,
    setMyJobRecruitment,
    allCategory,
    getListRcmCompany,
  } = useContext(JobContext);
  const {id} = useParams();
  const [selectedOptionsField, setSelectedOptionsField] = useState([]);
  const [isClearable, setIsClearable] = useState(true);
  const [params, setParams] = useSearchParams();
  const [complete, setComplete] = useState(false);
  const [confirmRemove,setConfirmRemove] = useState("")
  const setParamsKey = (key, value) => {
    // => biến 1 mảng  thành 1 object (param là 1 object đặc biệt)
    let currentParams = Object.fromEntries([...params]);
    setParams({ ...currentParams, [key]: value });
  };

  useEffect(() => {
    getListRcmCompany(id);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getMyListJob = async (id) => {
      const myListJob = await  getListRcmCompany(id);
      setMyJobRecruitment(myListJob);
      return myListJob;
    };
    getMyListJob(id);
  }, [id]);

  const listCategory = allCategory?.map((item) => {
    return {
      id: item._id,
      label: item.name,
    };
  });
  setTimeout(() => {
    setComplete(true);
  }, 2500);

 

  return (
    <>
      <MetaData title="Danh sách tin tuyển dụng công ty" />
      <div className={cx("container")}>
        <div className={cx("wrapper")}>
          <div className={cx("wrapper_content")}>
            <div className={cx("wrapper_jobs")}>
              <div className={cx("recruit_title")}>
                <div className={cx("left")}>
                  <h2 className={cx("header-myrcm")}>
                    Danh sách tin tuyển dụng của công ty
                  </h2>
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
                    <div className={cx("left")}>
                    </div>
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
                      <ListRcm myJobRecruitment={myJobRecruitment}/>
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
