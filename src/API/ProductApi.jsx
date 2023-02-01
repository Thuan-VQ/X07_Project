import axios from "axios";
import React, { useEffect, useState } from "react";
import { getApiHost } from "../config";
// url
 const url = getApiHost();
 const allJobUrl = url + "recruiments";
 const homepageJobUrl = allJobUrl + "/home-page";

 const fetchAllJobs = async () => {
    const res = await axios({
        method: "get",
        url: allJobUrl,
        type: "json",
        
    });

    if (res.status === 200) {
        return res.data;
    }
 };

 const fetchJobHomepage = async () => {
    const res = await axios({
        method: "get",
        url: homepageJobUrl,
        type: "json",
    });

    if (res.status === 200) {
        return res.data;
    }
 }

 const fetchJobDetail = async (id) => {
    const JobDetailUrl = getApiHost() + `recruiments/detail/${id}`

    const res = await axios({
        method: "get",
        url: JobDetailUrl,
        type: "json",
    });

    if (res.status === 200) {
        localStorage.setItem("jobDetail",JSON.stringify(res.data))
        return res.data;
    }
 }





 const getAllCategory = async() =>{
    const categories = await fetch(getApiHost() + `users/category`,{
      method :"GET"
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      return data
    })
    return categories
  }
  const getAllLocation = async() =>{
    const locations = await fetch(getApiHost() + `users/location`,{
      method :"GET"
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      return data
    })
    return locations
  };
  
 
  const createRecruiment = (
    title,
    name,
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
  ) => {
    const recruimentInfo = {
      title: title,
      name: name,
      description: description,
      position: position,
      type: type,
      level: level,
      age: age,
      experience: experience,
      salary: salary,
      numberApplicant: numberApplicant,
      location: location,
      category: category,
      createAt: createAt,
      deadline: deadline,
    };
    return recruimentInfo;
  };

 const updateRecruitment =(
  title,
  description,
  position,
  type,
  level,
  age,
  experience,
  salary,
  numberApplicant,
  deadline,
  category,
  location
 ) => {
    const updateInfo = {
      title: title,
      description: description,
      position: position,
      type: type,
      level: level,
      age: age,
      experience: experience,
      salary: salary,
      numberApplicant: numberApplicant,
      deadline: deadline,
      category:category,
      location:location
    }
    return updateInfo
 }

 const JobApi = {
    allJobs : fetchAllJobs,
    homepageJob: fetchJobHomepage,
    jobDetail: fetchJobDetail,
    categories : getAllCategory,
    locations:getAllLocation,
    recruiment : createRecruiment,
    update: updateRecruitment
   
 }

 export default JobApi;