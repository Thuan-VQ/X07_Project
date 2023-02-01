import React from "react";
import { List } from "antd";
import CompanyItems from "./items";
function CompanyList({company}){

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
        dataSource={company}
        renderItem={(company) => (
          <List.Item>
            <CompanyItems company={company} id={company._id} />
          </List.Item>
        )}
      ></List>
    )
}

export default CompanyList