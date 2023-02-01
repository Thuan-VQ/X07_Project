import React, { useContext, useState } from "react";
import { JobContext } from "../../Context/JobContext";
import { Col, Form, Row } from "react-bootstrap";
import { DatePicker, Space } from "antd";
import { AuthContext } from "../../Context/Context";
const { RangePicker } = DatePicker;

export default function UpdateDetailInfo(){
    const {
        
      setLevelUpdate,
      setAgeFromUpdate,
      setAgeToUpdate,
      setSalaryUpdate,
      levelUpdate,
      ageFromUpdate,
      ageToUpdate,
      salaryUpdate
      } = useContext(JobContext);
      const {
        warningLevel,
        warningAgeFrom,
        warningAgeTo,
        warningSalary,
      } = useContext(AuthContext)

    return (
        <div className="body-upload">
            <Row className="mb-3">
              <Col>
                <Form.Label>
                  Cấp bậc <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Select onChange={(e) => setLevelUpdate(e.target.value)}>
                  <option value={levelUpdate}>{levelUpdate}</option>
                  <option value="Thực tập">Thực Tập</option>
                  <option value="nhân viên">Nhân Viên</option>
                  <option value="trường phòng">Trường Phòng</option>
                </Form.Select>
                
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>
                Mức Lương <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                maxLength={100}
                value={salaryUpdate}
                type="text"
                placeholder="2.000.000-3.000.000"
                onChange={(e) => setSalaryUpdate(e.target.value)}
                // required
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Label>
                  Độ tuổi yêu cầu từ: <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="number"
                    value={ageFromUpdate}
                    min={18}
                    placeholder="18"
                    onChange={(e) => setAgeFromUpdate(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Label>
                  Độ tuổi yêu cầu đến: <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="number"
                    value={ageToUpdate}
                    min={20}
                    max={80}
                    placeholder="20"
                    onChange={(e) => setAgeToUpdate(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
        </div>
    )
}