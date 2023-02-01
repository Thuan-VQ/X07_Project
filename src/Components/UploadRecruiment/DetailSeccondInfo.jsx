import React, { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import { JobContext } from "../../Context/JobContext";
import { Col, Form, Row } from "react-bootstrap";
export default function DetailSeccondInfo() {
  const {
    allCategory,
    allLocation,
    setExperience,
    setNumberApplicant,
    numberApplicant,
    setLocation,
    setCategory,
    experience,
    category,
    location
  } = useContext(JobContext);
  const {
    warningNumberApplicant,
    warningExp,
    warningCategory,
    warningLocation,
    setCkEditorOutput,
  } = useContext(AuthContext);
 


  return (
    <div className="body-upload-des">
      <Form.Group className="mb-3">
        <Form.Label>
          Số lượng ứng viên <span style={{ color: "red" }}>*</span>
        </Form.Label>
        <Form.Control
          max="10000"
          min="1"
          type="number"
          value={numberApplicant}
          onChange={(e) => setNumberApplicant(e.target.value)}
        />
        {warningNumberApplicant && (
          <Form.Text className="text-danger">
            <a>Đây là trường bắt buộc không được bỏ trống</a>
          </Form.Text>
        )}
      </Form.Group>
      <Row className="mb-3">
        <Col>
          <Form.Label>Kinh nghiệm làm việc</Form.Label>
          <Form.Select value={experience} onChange={(e) => setExperience(e.target.value)}>
            <option></option>
            <option value="Mới tốt nghiệp/ chưa có">
              Mới tốt nghiệp/ chưa có kinh nghiệm
            </option>
            <option value="0 - 1 năm">0 - 1 năm</option>
            <option value="1 - 3 năm">1 - 3 năm</option>
            <option value="3 - 5 năm">3 - 5 năm</option>
            <option value="> 5">{`> 5 năm`}</option>
          </Form.Select>
          {warningExp && (
            <Form.Text className="text-danger">
              <a>Đây là trường bắt buộc không được bỏ trống</a>
            </Form.Text>
          )}
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Label>
            Lĩnh vực tuyển dụng <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option></option>
            {allCategory?.map((item, index) => {
              return (
                <option value={item._id} key={index}>
                  {item.name}
                </option>
              );
            })}
          </Form.Select>
          {warningCategory && (
            <Form.Text className="text-danger">
              <a>Đây là trường bắt buộc không được bỏ trống</a>
            </Form.Text>
          )}
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Label>
            Địa điểm tuyển dụng<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option></option>
            {allLocation?.map((item, index) => {
              return (
                <option value={item._id} key={index}>
                  {item.name}
                </option>
              );
            })}
          </Form.Select>
          {warningLocation && (
            <Form.Text className="text-danger">
              <a>Đây là trường bắt buộc không được bỏ trống</a>
            </Form.Text>
          )}
        </Col>
      </Row>
    </div>
  );
}
