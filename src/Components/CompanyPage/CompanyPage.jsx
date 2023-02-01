import React, { useEffect, useState, useContext, useCallback } from "react";
import { JobContext } from "../../Context/JobContext";
import {  useSearchParams } from "react-router-dom";
import CompanyList from "./CompanyList";
import styles from "./Company.module.css";
import loadingAnimation from "../../animationJson/loading-animation.json";
import Lottie from "lottie-react";
import { images } from "../../img/index";
import { CiSearch } from "react-icons/ci";
import MetaData from "../MetaData/MetaData";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
export const CompanyPage = () => {
    const { getRecruiterCompany, company, setCompany, allCategory}  = useContext(JobContext)
    const [params, setParams] = useSearchParams();
    const [complete, setComplete] = useState(false);
    const [selectedOptionsField, setSelectedOptionsField] = useState([]);
   
    /// use effect
      useEffect(() => {
        getRecruiterCompany("", "", "");
        window.scrollTo(0, 0);
      }, []);
    

    useEffect(() => {
        const searchParams = params.get("search");
        const getListCompany = async (name, page, operationSector) => {
          const ListCompany = await  getRecruiterCompany(
            name,
            page,
            operationSector
          );
          console.log(ListCompany.rcts)
          setCompany(ListCompany.rcts);
          return  ListCompany;
        };
        getListCompany(searchParams, "",  "");
      }, [params]);

      /// function
      setTimeout(() => {
        setComplete(true);
      }, 2500);

      const setParamsKey = (key, value) => {
        // => biến 1 mảng  thành 1 object (param là 1 object đặc biệt)
        let currentParams = Object.fromEntries([...params]);
        setParams({ ...currentParams, [key]: value });
      };
      const debounce = (func)=>{
        let timer;
        return function(...arg){
          const context = this;
          if(timer) clearTimeout(timer)
          timer = setTimeout(()=>{
            timer = null;
            func.apply(context,arg)
          },800)
        }
      }
      const handleSearch = (e)=>{
        setParamsKey("search",e.target.value)
        const value = e.target.value
        const getListCompany = async (name, page, operationSector) => {
          const ListCompany = await  getRecruiterCompany(
            name,
            page,
            operationSector
          );
          console.log(ListCompany.rcts)
          setCompany(ListCompany.rcts);
          return  ListCompany;
        };
        getListCompany(value, "",  "");
      }

      const optimiseVersion = useCallback(debounce(handleSearch),[])

      return(
        <>
            <MetaData title="Danh sách công ty" />
            <div className={cx("container")}>
        <div className={cx("wrapper")}>
          <div className={cx("filter")}>
            <form action="">
              <div className={cx("form-group")}>
                <input
                  type="text"
                  placeholder="Tìm công ty"
                  onChange={optimiseVersion}
                />
                <div className={cx("search-text")}>
                  <CiSearch />
                </div>
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
                    Danh sách công ty
                  </h2>
                </div>
                {/* <div className={cx("right")}>
                  <Link to="/upload_recruiment">Đăng tin ứng tuyển</Link>
                </div> */}
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
                  <div>
                    <ul className={cx("list_group_jobs")}>
                      <CompanyList company={company} />
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
      )
    
}