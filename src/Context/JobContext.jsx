import React, { useEffect, useState } from "react";
import { createContext } from "react";
import JobApi from "../API/ProductApi";
import axios from "axios";
import { getApiHost } from "../config";

const JobContext = createContext();

const JobProvider = ({ children }) => {
  const [jobHomePage, setJobHomePage] = useState([]);
  const [pageHomeJob,setPageHomeJob] = useState("")
  const [jobList, setJobList] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [allLocation, setAllLocation] = useState([]);
  const [search, setSearch] = useState("");
  const [myJobRecruitment, setMyJobRecruitment] = useState([]);
  const [page, setPage] = useState("");
  const [fieldSort, setFieldSort] = useState("");
  const [typeSort, setTypeSort] = useState("");
  const [token, setToken] = useState(null);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [position, setPosition] = useState("");
  const [type, setType] = useState("");
  const [level, setLevel] = useState("");
  const [ageFrom, setAgeFrom] = useState("");
  const [ageTo, setAgeTo] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [numberApplicant, setNumberApplicant] = useState("");
  const [category, setCategory] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [location, setLocation] = useState("");
  const [locationName, setLocationName] = useState("");
  const [locationId, setLocationId] = useState("");
  const [date, setDate] = useState([]);
  const [deadlineJob, setDeadlineJob] = useState("");
  const [titleUpdate, setTitleUpdate] = useState("");
  const [descriptionUpdate, setDescriptionUpdate] = useState("");
  const [positionUpdate, setPositionUpdate] = useState("");
  const [typeUpdate, setTypeUpdate] = useState("");
  const [levelUpdate, setLevelUpdate] = useState("");
  const [ageFromUpdate, setAgeFromUpdate] = useState("");
  const [ageToUpdate, setAgeToUpdate] = useState("");
  const [expUpdate, setExpUpdate] = useState("");
  const [salaryUpdate, setSalaryUpdate] = useState("");
  const [numberApplicantUpdate, setNumberApplicantUpdate] = useState("");
  const [jobCandidateApplication, setJobCandidateApplication] = useState([]);
  const [listRecruimentCv, SetlistRecruimentCv] = useState("");
  const [company, setCompany] = useState([]);
  useEffect(() => {
    getallCategory();
    getallLocation();
    const getToken = JSON.parse(localStorage.getItem("token"));
    setToken(getToken);
  }, []);

  const getJobHomePage = async (categoryId,page) => {
    const user_category = { categoryId: categoryId };
    const jobs = await fetch(getApiHost() + `recruiments/home-page/?page=${page ?? ""}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setJobHomePage(data.recruiment);
        const pageTotal = Math.ceil(data.countDoc/10)
        console.log(pageTotal);
        setPageHomeJob (pageTotal)
        localStorage.setItem("jobHomePage", JSON.stringify(data.recruiment));
      });
    return jobs;
  };

  const getMyRecruitmentJobs = async (token, search, category, page, date,status) => {
    const getMyListJob = await fetch(
        getApiHost() +
          `recruiments/my-recruiment?search=${search ?? ""}&category=${
            category ?? ""
          }&page=${page ?? ""}&fieldSort=${date ?? ""}&status=${status ?? ""}`,
        { 
          method:"GET",
          headers: { "authorization": `Bearer ${token}` } }
      )
      .then((res) => {
        return res.json()
      }).then((data)=>{
        setMyJobRecruitment(data.myRcm);
        localStorage.setItem("myRcm", JSON.stringify(data.myRcm));
        return data
      })
      .catch((error) => console.log(error.response));
      return getMyListJob
  };

  const getJobCandidateApplication = async (token, status) => {
    await axios
      .get(
        getApiHost() +
          `recruiments/list-recruiment-application?status=${status ?? ""}`,
        { headers: { authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const data = res.data;
        localStorage.setItem("C-applied", JSON.stringify(data));
        setJobCandidateApplication(data);
        return data;
      })
      .catch((error) => console.log(error.response));
  };


  //getRecruiterCompany
  const getRecruiterCompany = async (name, page, operationSector) => {

    const getMyListCompany = await fetch(
      getApiHost() +`users/list-recruiter?search=${name ?? ""}&page=${page ?? ""}$operationSector=${operationSector}`,
      { 
        method:"GET",
 }
    )
    .then((res) => {
      return res.json()
    }).then((data)=>{
      setCompany(data.rcts);
      if (!localStorage.getItem("company")) {
        localStorage.setItem("company", JSON.stringify(data.rcts));
      }
      return data
    })
    .catch((error) => console.log(error.response));
    return getMyListCompany
  }

  const fetchCandidateApplication = async (id) => {
    let applicationDetail = await JobApi.CandidateApplicationDetail(id);
    if (applicationDetail) {
      return applicationDetail;
    }
  };

  //fetch all Job
  const fetchAllJobs = async () => {
    let data = await JobApi.allJobs();

    setJobList(data.allJobs);
  };

  //fetch job detail
  const fetchJobDetail = async (id) => {
    let jobDetail = await JobApi.jobDetail(id);

    if (jobDetail) {
      return jobDetail;
    }
  };
  /// fetch all category
  const getallCategory = async () => {
    const categories = await JobApi.categories();
    setAllCategory(categories);
  };
  //fetch all location
  const getallLocation = async () => {
    const locations = await JobApi.locations();
    setAllLocation(locations);
    return locations
  };
  //create recruiment
  const createRecruiment = async (description, createAt, deadline, age) => {
    const getUserId = JSON.parse(localStorage.getItem("currentUser"));
    const userId = getUserId.id;
    console.log(token);
    const newRecruiment = JobApi.recruiment(
      title,
      userId,
      description,
      position,
      type,
      level,
      age,
      experience,
      salary,
      numberApplicant,
      location,
      category,
      createAt,
      deadline
    );
    // console.log(newRecruiment);
    const createRecruiment = await fetch(getApiHost() + `recruiments/new`, {
      method: "post",
      body: JSON.stringify(newRecruiment),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data",data);
        return data;
      });
    return createRecruiment;
  };

  //updateRecruitment
  const updateRecruitment = async (description, deadline, age, id) => {
    const newUpdatedRecruitment = JobApi.update(
      titleUpdate,
      description,
      positionUpdate,
      typeUpdate,
      levelUpdate,
      age,
      expUpdate,
      salaryUpdate,
      numberApplicantUpdate,
      deadline,
      categoryId,
      locationId
    );
    const updateRecruitment = await fetch(getApiHost() + `recruiments/${id}`, {
      method: "PUT",
      body: JSON.stringify(newUpdatedRecruitment),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
    return updateRecruitment;
  };

  const removeRcm  = async(id)=>{
    console.log(id,token);
    const remove = await fetch(getApiHost() + `recruiments/detail/${id}`,{
      method : "delete",
      headers:{
        authorization: `Bearer ${token}`,
      }}).then((res)=>{
        return res.json()
      }).then((data)=>{
        return data
      })
      return remove
  }


  //post CV
  const postCV = async (id, file, token) => {
    const CvData = new FormData();
    CvData.append("formFile", file);
    let userCV = await fetch(getApiHost() + `recruiments/apply/${id}`, {
      method: "POST",
      body: CvData,
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        } else {
          return res;
        }
      })
      .catch((err) => {
        return err;
      });
    return userCV;
  };

  const confirmCV = async (value, idCv, token) => {
    const item = { status: value };
    const updateCV = await fetch(
      getApiHost() + `recruiments/application/${idCv}`,
      {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let user = localStorage.getItem("currentUser");
        user = JSON.parse(user);
        user.status = data.status;
        localStorage.setItem("currentUser", JSON.stringify(user));
        return data;
      });
    return updateCV;
  };

  const getCV = async (id, status, token) => {
    const filter = await fetch(
      getApiHost() +
        `recruiments/list-candidate-application/${id}?status=${status ?? ""}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetlistRecruimentCv(data);
        localStorage.setItem("listCv", JSON.stringify(data));
        return data;
      });
    return filter;
  };

  const deleteCV = async (idCV, token) => {
    const del = await fetch(getApiHost() + `recruiments/application/${idCV}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
    return del;
  };

  const checkCV = async (id, token) => {
    const check = await fetch(getApiHost() + `recruiments/check/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
    return check;
  };

  const getListRcmCompany = async (id) => {
    const list = await fetch(getApiHost() + `users/list-application/${id}`,{
      method: "GET",
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
    return list;
  }

  const value = {
    getJobHomePage,
    setJobHomePage,
    pageHomeJob,
    setPageHomeJob,
    jobHomePage,
    fetchJobDetail,
    fetchAllJobs,
    fetchCandidateApplication,
    getMyRecruitmentJobs,
    setMyJobRecruitment,
    getJobCandidateApplication,
    jobCandidateApplication,
    createRecruiment,
    jobList,
    allCategory,
    allLocation,
    myJobRecruitment,
    updateRecruitment,
    confirmCV,
    getCV,
    deleteCV,
    checkCV,
    setFieldSort,
    setTypeSort,
    setSearch,
    search,
    category,
    page,
    fieldSort,
    typeSort,
    token,
    postCV,
    setTitle,
    setName,
    setDescription,
    setPosition,
    setType,
    setLevel,
    setAgeFrom,
    setAgeTo,
    setExperience,
    setSalary,
    setNumberApplicant,
    setLocation,
    setCategoryId,
    setCategoryName,
    setLocationId,
    setLocationName,
    setCategory,
    setDate,
    setTitleUpdate,
    setDescriptionUpdate,
    setPositionUpdate,
    setTypeUpdate,
    setLevelUpdate,
    setAgeFromUpdate,
    setAgeToUpdate,
    setExpUpdate,
    setSalaryUpdate,
    setNumberApplicantUpdate,
    title,
    name,
    description,
    position,
    type,
    level,
    ageFrom,
    ageTo,
    experience,
    salary,
    numberApplicant,
    location,
    locationId,
    locationName,
    categoryId,
    categoryName,
    category,
    date,
    deadlineJob,
    setDeadlineJob,
    titleUpdate,
    descriptionUpdate,
    positionUpdate,
    typeUpdate,
    levelUpdate,
    ageFromUpdate,
    ageToUpdate,
    expUpdate,
    salaryUpdate,
    numberApplicantUpdate,
    listRecruimentCv,
    SetlistRecruimentCv,
    getRecruiterCompany ,
    setCompany,
    company,
    removeRcm,
    getListRcmCompany,
  };
  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

export { JobContext, JobProvider };
