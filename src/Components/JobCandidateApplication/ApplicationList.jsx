import React, { useContext} from "react";
import { List } from "antd";

import { JobContext } from "../../Context/JobContext";
import ApplicationItems from "./ApplicationItems";


function ApplicationList({jobCandidateApplication, handleDelete}){
  let locale = {
    emptyText: 'Đang tải dữ liệu...',
  };
    return(
        <List
        locale={locale}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 1,
          lg: 1,
          xl: 1,
          xxl: 1,
        }}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 8,
        }}
        dataSource={jobCandidateApplication}
        renderItem={(job) => (
          <List.Item>
            <ApplicationItems job={job} recruimentId={job.recruimentId} id={job.recruimentId._id} handleDelete= {handleDelete}/>
          </List.Item>
        )}
      ></List>
    )
}

export default ApplicationList