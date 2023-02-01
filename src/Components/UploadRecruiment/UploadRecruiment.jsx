import React, { useContext, useEffect, useState } from "react";
import "../UploadRecruiment/Upload.css";
import { JobContext } from "../../Context/JobContext";
import {
  isAgeFrom,
  isAgeTo,
  isCategory,
  isExperience,
  isLevel,
  isLocation,
  isNumberApplicant,
  isPosition,
  isSalary,
  isTitle,
  isType,
  isDate,
} from "../../utils/validate";
import BasicInfo from "./BasicInfo";
import { AuthContext } from "../../Context/Context";
import MetaData from "../MetaData/MetaData";
import DetailFirstInfo from "./DetailFirstInfo";
import DetailSeccondInfo from "./DetailSeccondInfo";
import DescriptionInfo from "./DescriptionInfo";

export default function UploadRecruiment() {
  const [ckEditorOutput, setCkEditorOutput] = useState("");
  const [WarningDate, setWarningDate] = useState(false);
  const [warningType, setWarningType] = useState(false);
  const [warningLevel, setWarningLevel] = useState(false);
  const [warningAgeFrom, setWarningAgeFrom] = useState(false);
  const [warningAgeTo, setWarningAgeTo] = useState(false);
  const [warningDescription, setWarningDescription] = useState(false);
  const [warningExp, setWarningExp] = useState(false);
  const [warningSalary, setWarningSalary] = useState(false);
  const [warningNumberApplicant, setWarningNumberApplicant] = useState(false);
  const [warningLocation, setWarningLocaion] = useState(false);
  const [warningCategory, setWarningCategory] = useState(false);
  const [warningTitle, setWarningTitle] = useState(false);
  const [warningPosition, setWarningPosition] = useState(false);
  const [alerToday, setAlerToday] = useState(false);
  const [page, setPage] = useState(0);
  const [aletUploadSuccess, setAletUploadSuccess] = useState(false);
  const [disabledUpload, setDisabledUpload] = useState(false);
  const [confirmInfoJob, setConformInfoJob] = useState(true);
  const [alertAgeTo, setAlertAgeTo] = useState(false);
  const [alertAgeFrom, setAlertAgeFrom] = useState(false);
  const [prevButton, setPrevButton] = useState(true);
  const [NxtButton, setNxtButton] = useState(true);

  const {
    title,
    position,
    type,
    level,
    ageFrom,
    ageTo,
    experience,
    salary,
    numberApplicant,
    location,
    category,
    date,
    createRecruiment,
    setTitle,
    setPosition,
    setType,
    setLevel,
    setAgeFrom,
    setAgeTo,
    setExperience,
    setSalary,
    setNumberApplicant,
    setLocation,
    setCategory,
    setDate,
  } = useContext(JobContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const FormTitles = [
    "Đăng tin tuyển dụng",
    "Đăng tin tuyển dụng",
    "Đăng tin tuyển dụng",
    "Đăng tin tuyển dụng",
  ];

  const pageDisplay = () => {
    if (page === 0) {
      return <BasicInfo />;
    }
    if (page === 1) {
      return <DetailFirstInfo />;
    }
    if (page === 2) {
      return <DetailSeccondInfo />;
    }
    if (page === 3) {
      return <DescriptionInfo />;
    }
  };

  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  if (mm < 9) {
    mm = "0" + mm;
  }

  let dd = today.getDate();
  if (dd < 9) {
    dd = "0" + dd;
  }
  const formattedToday = yyyy + "-" + mm + "-" + dd;

  const confirmInfo = () => {
    setDisabledUpload(false);
  };
  const submitRecruiment = (e, dateCompare) => {
    e.preventDefault();
    let stringAge = `${ageFrom}-${ageTo}`;
    if (page == 3) {
      if (!ckEditorOutput) {
        setWarningDescription(true);
        return;
      }
      setAletUploadSuccess(true);
      setDisabledUpload(true);
      setTitle("");
      setPosition("");
      setType("");
      setLevel("");
      setAgeFrom("");
      setAgeTo("");
      setExperience("");
      setSalary("");
      setNumberApplicant("");
      setLocation("");
      setCategory("");
      createRecruiment(ckEditorOutput, date[0], date[1], stringAge);
      setWarningDescription(false);
    }
  };
  const setNextPage = () => {
    if (page == 0) {
      if (!isTitle(title)) {
        setWarningTitle(true);
        return;
      } else {
        setWarningTitle(false);
      }
      if (!isPosition(position)) {
        setWarningPosition(true);
        return;
      } else {
        setWarningPosition(false);
      }
      if (!isType(type)) {
        setWarningType(true);
        return;
      } else {
        setWarningType(false);
      }
      if (!isDate(date)) {
        setWarningDate(true);
        return;
      }
      if (date[0] < formattedToday || date[0] > formattedToday) {
        console.log(date[0]);
        setAlerToday(true);
        return;
      }
      setWarningTitle(false);
      setWarningPosition(false);
      setWarningType(false);
      setWarningLevel(false);
      setAlerToday(false);
      setPage((page) => page + 1);
      return;
    }
    if (page == 1) {
      if (!isLevel(level)) {
        setWarningLevel(true);
        return;
      } else {
        setWarningLevel(false);
      }
      if (!isSalary(salary)) {
        setWarningSalary(true);
        return;
      } else {
        setWarningSalary(false);
      }
      if (!isAgeFrom(ageFrom)) {
        setWarningAgeFrom(true);
        return;
      } else {
        setWarningAgeFrom(false);
      }
      if (!isAgeTo(ageTo)) {
        setWarningAgeTo(true);
        return;
      } else {
        setWarningAgeTo(false);
      }
      if (ageFrom < 18) {
        setAlertAgeFrom(true);
        return;
      } else {
        setAlertAgeFrom(false);
      }
      if (ageTo < 20 || ageTo > 60) {
        setAlertAgeTo(true);
        return;
      } else {
        setAlertAgeTo(false);
      }
      setWarningLevel(false);
      setWarningSalary(false);
      setWarningAgeFrom(false);
      setWarningAgeTo(false);
      setPage((page) => page + 1);
      return;
    }
    if (page == 2) {
      if (!isNumberApplicant(numberApplicant)) {
        setWarningNumberApplicant(true);
        return;
      } else {
        setWarningNumberApplicant(false);
      }
      if (!isExperience(experience)) {
        setWarningExp(true);
        return;
      } else {
        setWarningExp(false);
      }
      if (!isCategory(category)) {
        setWarningCategory(true);
        return;
      } else {
        setWarningCategory(false);
      }
      if (!isLocation(location)) {
        setWarningLocaion(true);
        return;
      }
      setPrevButton(false);
      setNxtButton(false);
      setWarningNumberApplicant(false);
      setWarningExp(false);
      setWarningCategory(false);
      setWarningLocaion(false);
      setPage((page) => page + 1);
      return;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        warningTitle,
        warningPosition,
        alerToday,
        warningType,
        warningLevel,
        warningAgeFrom,
        warningAgeTo,
        warningSalary,
        warningNumberApplicant,
        warningExp,
        warningCategory,
        warningLocation,
        warningDescription,
        setCkEditorOutput,
        WarningDate,
        title,
        position,
        type,
        date,
        level,
        ageFrom,
        ageTo,
        salary,
        numberApplicant,
        location,
        category,
        experience,
        ckEditorOutput,
        aletUploadSuccess,
        disabledUpload,
        confirmInfoJob,
        confirmInfo,
        alertAgeFrom,
        alertAgeTo,
      }}
    >
      <MetaData title="Đăng tin tuyển dụng" />
      <div className="container-upload-job">
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
            {prevButton && (
              <button
                disabled={page == 0}
                onClick={() => setPage((currentPage) => currentPage - 1)}
                className={page == 0 ? "btn-prev-form btn-form-upload-job disabled" : "btn-prev-form btn-form-upload-job"}
              >
                Quay lại di
              </button>
            )}
            {NxtButton && (
              <button
                disabled={page == FormTitles.length - 1}
                onClick={() => setNextPage()}
                className={
                  page == FormTitles.length - 1
                    ? "btn-nxt-form btn-form-upload-job disabled"
                    : "btn-nxt-form btn-form-upload-job"
                }
              >
                Tiếp tục
              </button>
            )}
          </div>
        </div>
        <div></div>
      </div>
    </AuthContext.Provider>
  );
}
