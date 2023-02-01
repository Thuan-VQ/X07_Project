import React, { useEffect, useRef, useState } from "react";

import styles from "./AllJob.module.scss";
import classNames from "classnames/bind";
import MetaData from "../MetaData/MetaData";
import { List } from "antd";
import { images } from "../../img/index";
import JobItem from "./JobItem";
import { CiSearch } from "react-icons/ci";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobCategory, getAllJobs } from "../../Actions/jobAction";
import Loading from "../Loading";
import banner from "../../../src/img/banner-page.jpg"
const cx = classNames.bind(styles);
export const AllJob = () => {
  const [selectedOptionsField, setSelectedOptionsField] = useState([]);
  const [selectedOptionsAddress, setSelectedOptionsAddress] = useState([]);
  const { recruiment, countDoc } = useSelector((state) => state.allJobs.jobs);
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.allJobs);
  const [search, setSearch] = useState("");

  const [id, setId] = useState("");

  const [valueSortDate, setValueSortDate] = useState("");
  const listCategory = categories?.map((item) => {
    return {
      id: item._id,
      label: item.name,
    };
  });
  useEffect(() => {
    dispatch(getAllJobs());
    dispatch(getAllJobCategory());
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [dispatch]);
  //change input Search
  const handleChangeInput = (e) => {
    setSearch(e.target.value);
  };
  //submitSearch when click button
  const handleSubmitSearchJob = (e) => {
    e.preventDefault();
    if (search.length > 0 || id.length > 0) {
      dispatch(getAllJobs(search.toLocaleUpperCase(), "", id[0]));
    } else {
      dispatch(getAllJobs(search.toLocaleUpperCase(), "", ""));
    }
  };
  //sort by select
  const handleSortDate = (e) => {
    const value = e.target.value;
    if (value === "defaults" || value === "createAt" || value === "deadline") {
      setValueSortDate(value);
      dispatch(getAllJobs(search, value, id[0]));
    }
  };
  //filters field by value
  const handleChangeField = (e) => {
    let arrField = e;
    if (arrField.length === 0) {
      dispatch(getAllJobs(search.toLocaleUpperCase(), "", setId("")));
    } else {
      const id = arrField.map((i) => i.id);
      if (id) {
        setId(id);
      }
    }
  };
  return (
    <>
      <MetaData title="Danh sách tất cả việc làm" />
      <div className={cx("container")}>
        <div className={cx("wrapper")}>
          <div className={cx("filter")}>
            <form action="" onSubmit={handleSubmitSearchJob}>
              <div className={cx("form-group")}>
                <input
                  type="text"
                  name="search"
                  onChange={handleChangeInput}
                  placeholder="Tiêu đề việc làm..."
                />
                <div className={cx("search-text")}>
                  <CiSearch />
                </div>
              </div>
              <div className={cx("form-group")}>
                <Select
                  // defaultValue={selectedOptionsField}
                  isMulti
                  // name="field"
                  onChange={handleChangeField}
                  options={listCategory}
                  // onChange={(e) => setSelectedOptionsField(e)}
                  isOptionDisabled={() => selectedOptionsField.length >= 2}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  placeholder="Lĩnh Vực"
                />
              </div>
              {/* <div className={cx("form-group")}>
                <Select
                  defaultValue={selectedOptionsAddress}
                  isMulti
                  // name="address"
                  options={address}
                  isSearchable="true"
                  className="basic-multi-select"
                  onChange={(e) => setSelectedOptionsAddress(e)}
                  isOptionDisabled={() => selectedOptionsAddress.length >= 2}
                  classNamePrefix="select"
                  placeholder="Địa điểm"
                />
              </div> */}
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
                  <h2 className={cx("left-title")}>Tất cả tin tuyển dụng</h2>
                </div>
              </div>
              <div className={cx("recruit_title")}>
                <div className={cx("left")}>
                  <div style={{ marginBottom: "15px" }}>
                    <p style={{ color: "#6c757d" }}>
                      <span style={{ color: "#EC803F", fontWeight: "bold" }}>
                        {" "}
                        {countDoc}{" "}
                      </span>
                      việc làm
                    </p>
                  </div>
                </div>

                <div className={cx("right")}>
                  <p>Sắp xếp</p>
                  <select
                    className={cx("select_box")}
                    onChange={handleSortDate}
                  >
                    <option value="defaults">-- Sắp xếp theo --</option>
                    <option value="createAt">Mới đăng </option>
                    <option value="deadline">Ngày hết hạn</option>
                  </select>
                </div>
              </div>

              {loading ? (
                <div style={{ textAlign: "center" }}>
                  {" "}
                  <Loading loading={loading} color={"#6800fa"} size={"35"} />
                </div>
              ) : (
                <ul className={cx("list_group_jobs")}>
                  <List
                    className={cx("list-container")}
                    pagination={{
                      pageSize: 10,
                    }}
                    dataSource={recruiment}
                    renderItem={(item) => <JobItem key={item.id} data={item} />}
                  ></List>
                </ul>
              )}
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
