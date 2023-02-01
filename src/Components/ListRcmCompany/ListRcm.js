import React from "react";
import { List } from "antd";
import RcmItem from "./RcmItem";

export default function ListRcm({myJobRecruitment}){
  console.log(myJobRecruitment);
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
        dataSource={myJobRecruitment}
        renderItem={(myJobRecruitment) => (
          <List.Item>
            <RcmItem myJobRecruitment={myJobRecruitment} id={myJobRecruitment._id} />
          </List.Item>
        )}
      ></List>
    )
}

