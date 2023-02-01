import { Row, Col } from "react-bootstrap";
import JobItemHomePage from "../JobItemHomePage/JobItemHomePage";
import React from "react";
import "../ListJobs/ListJob.css";

export default function ListJobs({ jobHomePage }) {
  return (
    <div className="list-jobs">
       <Row>
      {jobHomePage?.map((item,index)=>{
        return(
          <Col xl={6} md={6} xs={12}>
            <JobItemHomePage job={item} id={item._id} key={index}/>
          </Col>
        )
      })}
     </Row>
    </div>
  );
}
