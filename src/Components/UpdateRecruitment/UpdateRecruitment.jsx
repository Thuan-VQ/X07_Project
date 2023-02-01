import React, { useContext, useEffect, useState } from "react";
import "../UpdateRecruitment/update.css";
import { JobContext } from "../../Context/JobContext";

import { AuthContext } from "../../Context/Context";
import UpdateBasicInfo from "./updateBasicInfo";
import UpdateDetailInfo from "./updateDetailInfo";
import UpdateDesInfo from "./updateDesInfo";
import { useParams } from "react-router-dom";
import MetaData from "../MetaData/MetaData";
// const { RangePicker } = DatePicker;
export default function UpdateRecruiment() {
  const [ckEditorOutput, setCkEditorOutput] = useState("");
  const [alertDeadline, setAlertDeadline] = useState(false);
  const [page, setPage] = useState(0);
  const [alertUpdatedSuccess, setAletUpdateSuccess] = useState(false);
  const [disabledUpdate, setDisabledUpdate] = useState(true);
  const [confirmInfoJob, setConformInfoJob] = useState(true);
  const [descriptionJob, setDescriptionJob] = useState("");
  const [dateFormat,setDateFormat] = useState("")
  const [jobData,setJobData] = useState("")
  const [deadlineCheck,setDeadlineCheck] = useState("")
  const { id } = useParams();

  const {
    setTitleUpdate,
    setPositionUpdate,
    setTypeUpdate,
    setLevelUpdate,
    setAgeFromUpdate,
    setAgeToUpdate,
    setExpUpdate,
    setSalaryUpdate,
    setNumberApplicantUpdate,
    fetchJobDetail,
    setCategoryId,
    setCategoryName,
    setLocationId,
    setLocationName,
    updateRecruitment,
    ageFromUpdate,
    ageToUpdate,
    deadlineJob,
    setDeadlineJob,
  } = useContext(JobContext);

  const FormTitles = [
    "Cập nhật thông tin ",
    "Cập nhật thông tin",
    "Cập nhật thông tin",
  ];

  const pageDisplay = () => {
    if (page === 0) {
      return <UpdateBasicInfo />;
    }
    if (page === 1) {
      return <UpdateDetailInfo />;
    }
    if (page === 2) {
      return <UpdateDesInfo />;
    }
  };
  ///////////
  useEffect(() => {
    const getJobDetail = async (id) => {
      const jobDetail = await fetchJobDetail(id)
      console.log(jobDetail);
      setJobData(jobDetail)
      setTitleUpdate(jobDetail.title);
      setPositionUpdate(jobDetail.position);
      setTypeUpdate(jobDetail.type);
      setLevelUpdate(jobDetail.level);
      const ageString = jobDetail.age.split("-");
      setAgeFromUpdate(ageString[0]);
      setAgeToUpdate(ageString[1]);
      setSalaryUpdate(jobDetail.salary);
      setExpUpdate(jobDetail.experience);
      setNumberApplicantUpdate(jobDetail.numberApplicant);
      setLocationId(jobDetail?.location._id);
      setLocationName(jobDetail?.location.name);
      setCategoryId(jobDetail?.category._id);
      setCategoryName(jobDetail?.category.name);
      setCkEditorOutput(jobDetail.description);
      let crTime = new Date(jobDetail.deadline).getTime();
      let crDay = new Date(crTime).getDate();
      let crMonth = new Date(crTime).getMonth() + 1;
      let crYear = new Date(crTime).getFullYear();
      let newCreate = `${crDay}-${crMonth}-${crYear}`;
      setDateFormat(newCreate)
    };
    getJobDetail(id);
  }, [id]);

  const confirmInfo = () => {
    setConformInfoJob(false);
    setDisabledUpdate(false);
  };
  const submitRecruiment = (e, dateCompare) => {
    e.preventDefault();
    let stringAge = `${ageFromUpdate}-${ageToUpdate}`;
    setAletUpdateSuccess(true)
    setDisabledUpdate(true)
    updateRecruitment(ckEditorOutput, deadlineCheck, stringAge, id);
  };

  const setNextPage = () => {
      if (page == 0) {
      if(deadlineCheck < jobData.deadline){
        setAlertDeadline(true)
        return
      }else if (deadlineCheck > jobData.deadline || deadlineCheck == jobData.deadline){
        setAlertDeadline(false)
        console.log("?????");
        setPage((page) => page + 1);
        return;
      } 
    }
    setPage((page) => page + 1);
  };

  return (
    <AuthContext.Provider
      value={{
        setCkEditorOutput,
        ckEditorOutput,
        alertDeadline, 
        descriptionJob,
        ckEditorOutput,
        alertUpdatedSuccess,
        disabledUpdate,
        confirmInfoJob,
        dateFormat,
        setDeadlineJob,
        deadlineJob,
        setDeadlineCheck,
        confirmInfo,
      }}
    >
      <MetaData title="Cập nhật tuyển dụng" />
      <div className="container-update-job">
        <div className="form-container-upload-job">
          <form className="form-upload-job" onSubmit={submitRecruiment}>
            <div className="form-wrapper-upload">
              <div className="header-form-upload">
                <h1 className="header-single-form">{FormTitles[page]}</h1>
              </div>
              <div className="form-body-upload">{pageDisplay()}</div>
            </div>
          </form>
          <div className="footer-form-upload">
            <button
              disabled={page == 0}
              onClick={() => setPage((currentPage) => currentPage - 1)}
              className={
                page == 0
                  ? "btn-prev-form btn-form-update-job disabled"
                  : "btn-prev-form btn-form-update-job"
              }
            >
              Quay lại
            </button>
            <button
              disabled={page == FormTitles.length - 1}
              onClick={() => setNextPage()}
              className={
                page == FormTitles.length - 1
                  ? "btn-nxt-form btn-form-update-job disabled"
                  : "btn-nxt-form btn-form-update-job"
              }
            >
              Tiếp tục
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </AuthContext.Provider>
  );
}
