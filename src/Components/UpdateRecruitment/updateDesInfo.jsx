import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/Context";
import { JobContext } from "../../Context/JobContext";
import { Col, Form, Row } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link } from "react-router-dom";
export default function UpdateDesInfo() {
  const {
    allCategory,
    allLocation,
    setExpUpdate,
    setNumberApplicantUpdate,
    numberApplicantUpdate,
    expUpdate,
    locationId,
    locationName,
    categoryId,
    categoryName,
    setCategoryId,
    setLocationId
  } = useContext(JobContext);
  const {
    setCkEditorOutput,
    alertUpdatedSuccess,
    disabledUpdate,
    confirmInfo,
    confirmInfoJob,
    ckEditorOutput 
  } = useContext(AuthContext);
  const handleConfirmInfo = () => {
    confirmInfo();
  };
  const handleCkEditorChanges = (event, editor) => {
    setCkEditorOutput(editor.getData());
  };

  return (
    <div className="body-upload">
      <Form.Group className="mb-3">
        <Form.Label>
          Số lượng ứng viên <span style={{ color: "red" }}>*</span>
        </Form.Label>
        <Form.Control
          max="10000"
          min="0"
          type="number"
          value={numberApplicantUpdate}
          onChange={(e) => setNumberApplicantUpdate(e.target.value)}
        />
      </Form.Group>
      <Row className="mb-3">
        <Col>
          <Form.Label>Kinh nghiệm làm việc</Form.Label>
          <Form.Select onChange={(e) => setExpUpdate(e.target.value)}>
            <option value={expUpdate}>{expUpdate}</option>
            <option value="Mới tốt nghiệp/ chưa có">
              Mới tốt nghiệp/ chưa có kinh nghiệm
            </option>
            <option value="0 - 1 năm">0 - 1 năm</option>
            <option value="1 - 3 năm">1 - 3 năm</option>
            <option value="3 - 5 năm">3 - 5 năm</option>
            <option value="> 5">{`> 5 năm`}</option>
          </Form.Select>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Label>
            Lĩnh vực tuyển dụng <span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Select onChange={(e) => setCategoryId(e.target.value)}>
            <option value={categoryId}>{categoryName}</option>
            {allCategory?.map((item, index) => {
              return (
                <option value={item._id} key={index}>
                  {item.name}
                </option>
              );
            })}
          </Form.Select>
        </Col>
        <Col>
          <Form.Label>
            Địa điểm tuyển dụng<span style={{ color: "red" }}>*</span>
          </Form.Label>
          <Form.Select onChange={(e) => setLocationId(e.target.value)}>
            <option value={locationId}>{locationName}</option>
            {allLocation?.map((item, index) => {
              return (
                <option value={item._id} key={index}>
                  {item.name}
                </option>
              );
            })}
          </Form.Select>
        </Col>
      </Row>
      <Form.Label>
        Mô tả bổ sung <span style={{ color: "red" }}>*</span>
      </Form.Label>
      <CKEditor
        data={ckEditorOutput}
        editor={ClassicEditor}
        onChange={handleCkEditorChanges}
        style={{ padding: "20px" }}
        className="ck-editor"
      />
      {confirmInfoJob && (
        <div className="container-confirm-upload">
          <p className="confirm-text">
            Hãy kiểm tra lại thông tin trước khi cập nhật, nếu đã chắc chắn hãy
            nhấn nút{" "}
            <u onClick={handleConfirmInfo} className="Confirm-btn">
              Xác nhận
            </u>
          </p>{" "}
        </div>
      )}
      {alertUpdatedSuccess  && (
        <div className="container-confirm-upload">
          <p className="confirm-text">
            tin tuyển dụng của bạn đã được cập nhật
            {" "}
            <Link to={"/"} className="Confirm-btn">Quay lại trang chủ</Link>
          </p>{" "}
        </div>
      )}
      <div className="btn-upload-job">
        <button
          disabled={disabledUpdate == true}
          type="submit"
          className={
            disabledUpdate ? "upload-job disabled-btn-upload" : "upload-job"
          }
        >
        Cập nhật tin tuyển dụng
        </button>
      </div>
    </div>
  );
}
