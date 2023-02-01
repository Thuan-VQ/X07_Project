import React, { useContext, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { JobContext } from "../../Context/JobContext";
import { DatePicker, Space } from "antd";
import { AuthContext } from "../../Context/Context";

const { RangePicker } = DatePicker;

export default function BasicInfo() {
  const { setType, setTitle, setPosition, setDate,title,type,position } = useContext(JobContext);
  const { warningType, warningTitle, warningPosition,WarningDate, alerToday } =
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          // required
        />
        {warningTitle && (
          <Form.Text className="text-danger">
            <a>Đây là trường bắt buộc không được bỏ trống</a>
          </Form.Text>
        )}
      </Form.Group>
      <Form.Label>
        Vị trí việc làm <span style={{ color: "red" }}>*</span>
      </Form.Label>
      <Form.Group className="mb-3">
        <Form.Control
          maxLength={300}
          type="text"
          value={position}
          placeholder="ví dụ : Nhân Viên Kinh Doanh"
          onChange={(e) => setPosition(e.target.value)}
          // required
        />
        {warningPosition && (
          <Form.Text className="text-danger">
            <a>Đây là trường bắt buộc không được bỏ trống</a>
          </Form.Text>
        )}
      </Form.Group>
      <Row className="mb-3">
        <Col>
          <Form.Label>
            Hình thức làm việc <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Select  onChange={(e) => setType(e.target.value)}>
            <option></option>
            <option value="Toàn thời gian">Toàn thời gian</option>
            <option value="Bán thời gian">Bán thời gian</option>
          </Form.Select>
          {warningType && (
            <Form.Text className="text-danger">
              <a>Đây là trường bắt buộc không được bỏ trống</a>
            </Form.Text>
          )}
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Form.Group className="form-deadline">
            <Form.Label>Thời hạn ứng tuyển:  </Form.Label>
            <Space direction="vertical" className="range-picker">
              <RangePicker
              // defaultPickerValue={DatePicker}
                format={"YYYY-MM-DD"}
                id="date"
                name="date"
                onChange={(e, dateString) => {
                  setDate(dateString)
                }}
              />
            </Space>
          </Form.Group>
        </Col>
        {WarningDate && (
            <Form.Text className="text-danger">
              <a>Đây là trường bắt buộc không được bỏ trống</a>
            </Form.Text>
          )}
        {alerToday && (
          <Form.Text className="text-danger link-wrong-pass">
            <a>Ngày khởi tạo phải bằng ngày hiện tại</a>
          </Form.Text>
        )}
      </Row>
    </div>
  );
}
