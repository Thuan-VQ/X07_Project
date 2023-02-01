import React, { useContext, useEffect } from "react";
import MetaData from "../MetaData/MetaData";
import "../HomePage/Homepage.css";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeJobs from "../HomePage/HomeJobs/HomeJobs";
import { JobContext } from "../../Context/JobContext";
import HomeCategory from "./HomeCategory/HomeCategory";
import JobNotification from "./JobNotification/JobNotification";

export default function HomePage() {
  const { getJobHomePage,  jobHomePage,pageHomeJob } =
    useContext(JobContext);
    useEffect(()=>{
      window.scrollTo(0, 0);
    },[])
  return (
    <>
      <MetaData title="Trang chủ"/>
      <div className="home-page">
        <HomeBanner />
        <HomeJobs jobHomePage={jobHomePage} pageHomeJob={pageHomeJob} getJobHomePage={getJobHomePage}/>
        <HomeCategory/> 
        <JobNotification/>
      </div>
    </>
  );
}
