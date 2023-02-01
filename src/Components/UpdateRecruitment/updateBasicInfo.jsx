import React, { useContext, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { JobContext } from "../../Context/JobContext";
import { DatePicker, Space } from "antd";
import { AuthContext } from "../../Context/Context";
const { RangePicker } = DatePicker;

export default function UpdateBasicInfo() {
  const {
    setTypeUpdate,
    setTitleUpdate,
    setPositionUpdate,
    setDate,
    titleUpdate,
    typeUpdate,
    positionUpdate,
    date,
    setDeadlineJob,
    deadlineJob,
  } = useContext(JobContext);
  const { WarningDate, alerToday, dateFormat, alertDeadline,setDeadlineCheck } =
    useContext(AuthContext);

  return (
    <div className="body-upload">
      <Form.Group className="mb-3">
        <Form.Label>
          Tiêu đề tuyển dụng <span style={{ color: "red" }}>*</span>
        </Form.Label>
        <Form.Control
          maxLength={100}
          type="text"
          placeholder="Nhập tiêu đề tuyển dụng"
          value={titleUpdate}
          onChange={(e) => setTitleUpdate(e.target.value)}
          // required
        />
      </Form.Group>
      <Form.Label>
        Vị trí việc làm <span style={{ color: "red" }}>*</span>
      </Form.Label>
      <Form.Group className="mb-3">
        <Form.Control
          maxLength={300}
          value={positionUpdate}
          type="text"
          placeholder="ví dụ : Nhân Viên Kinh Doanh"
          onChange={(e) => setPositionUpdate(e.target.value)}
          // required
        />
      </Form.Group>
      <Row className="mb-3">
        <Col>
          <Form.Label>
            Hình thức làm việc <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Select onChange={(e) => setTypeUpdate(e.target.value)}>
            <option value={typeUpdate}>
              {typeUpdate === "fulltime" ? "Toàn thời gian" : "Bán thời gian"}
            </option>
            <option value="fulltime">Toàn thời gian</option>
            <option value="parttime">Bán thời gian</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Form.Group className="form-deadline">
            <Form.Label>
              Tin tuyển dụng hiện tại hết hạn vào ngày:{" "}
              <strong>{dateFormat}</strong>
            </Form.Label>
            <Form.Label>
              Gia hạn thời gian ứng tuyển đến: {deadlineJob==="NaN-NaN-NaN" ? <></> : deadlineJob}
            </Form.Label>
            <Space direction="vertical" className="range-picker">
              <DatePicker
                format={"YYYY-MM-DD"}
                id="date"
                name="date"
                onChange={(e, dateString) => {
                  setDeadlineCheck(dateString)
                  let crTime = new Date(dateString).getTime();
                  let crDay = new Date(crTime).getDate();
                  let crMonth = new Date(crTime).getMonth() + 1;
                  let crYear = new Date(crTime).getFullYear();
                  let newCreate = `${crDay}-${crMonth}-${crYear}`;
                  console.log(newCreate);
                  setDeadlineJob(newCreate);
                }}
              />
            </Space>
          </Form.Group>
        </Col>
        {alertDeadline && (
          <Form.Text className="text-danger">
            <a>Ngày gia hạn phải lớn hơn hoặc bằng ngày hết hạn hiện tại</a>
          </Form.Text>
        )}
      </Row>
    </div>
  );
}
