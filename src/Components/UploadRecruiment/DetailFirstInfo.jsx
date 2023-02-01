import React, { useContext} from "react";
import { JobContext } from "../../Context/JobContext";
import { Col, Form, Row } from "react-bootstrap";
import { DatePicker } from "antd";
import { AuthContext } from "../../Context/Context";
const { RangePicker } = DatePicker;

export default function DetailFirstInfo(){
    const {
        
        setLevel,
        setAgeFrom,
        setAgeTo,
        setSalary,
        level,
        ageFrom,
        ageTo,
        salary
      } = useContext(JobContext);
      const {
        warningLevel,
        warningAgeFrom,
        warningAgeTo,
        warningSalary,
        alertAgeFrom,
        alertAgeTo,
      } = useContext(AuthContext)

    return (
        <div className="body-upload">
            <Row className="mb-3">
              <Col>
                <Form.Label>
                  Cấp bậc <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Select value={level} onChange={(e) => setLevel(e.target.value)}>
                  <option></option>
                  <option value="Thực tập">Thực Tập</option>
                  <option value="nhân viên">Nhân Viên</option>
                  <option value="trường phòng">Trường Phòng</option>
                </Form.Select>
                {warningLevel && (
                  <Form.Text className="text-danger">
                    <a>Đây là trường bắt buộc không được bỏ trống</a>
                  </Form.Text>
                )}
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>
                Mức Lương <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                maxLength={100}
                type="text"
                value={salary}
                placeholder="2.000.000-3.000.000"
                onChange={(e) => setSalary(e.target.value)}
                // required
              />
              {warningSalary && (
                <Form.Text className="text-danger">
                  <a>Đây là trường bắt buộc không được bỏ trống</a>
                </Form.Text>
              )}
            </Form.Group>
            <Row>
              <Col>
                <Form.Label>
                  Độ tuổi yêu cầu từ: <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="number"
                    min={18}
                    value={ageFrom}
                    placeholder="18"
                    onChange={(e) => setAgeFrom(e.target.value)}
                  />
                  {warningAgeFrom && (
                    <Form.Text className="text-danger">
                      <a>Đây là trường bắt buộc không được bỏ trống</a>
                    </Form.Text>
                  )}
                  {alertAgeFrom && (
                    <Form.Text className="text-danger">
                      <a>Độ tuổi không được nhỏ hơn 18</a>
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Label>
                  Độ tuổi yêu cầu đến: <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="number"
                    min={20}
                    max={80}
                    value={ageTo}
                    placeholder="20"
                    onChange={(e) => setAgeTo(e.target.value)}
                  />
                  {warningAgeTo && (
                    <Form.Text className="text-danger">
                      <a>Đây là trường bắt buộc không được bỏ trống</a>
                    </Form.Text>
                  )}
                    {alertAgeTo && (
                    <Form.Text className="text-danger">
                      <a>Độ tuổi không được nhỏ hơn 20 và lớn hơn 60</a>
                    </Form.Text>
                  )}
                </Form.Group>
              </Col>
            </Row>
        </div>
    )
}