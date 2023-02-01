import React, { useContext} from "react";
import { AuthContext } from "../../Context/Context";
import { Form} from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link } from "react-router-dom";
export default function DescriptionInfo() {
  const {
    warningDescription,
    setCkEditorOutput,
    aletUploadSuccess,
    disabledUpload,
  } = useContext(AuthContext);

  const handleCkEditorChanges = (event, editor) => {
    setCkEditorOutput(editor.getData());
  };

  return (
    <div className="body-upload-des">
      <Form.Label>
        Mô tả bổ sung <span style={{ color: "red" }}>*</span>
      </Form.Label>
      <CKEditor
        editor={ClassicEditor}
        onChange={handleCkEditorChanges}
        style={{ padding: "20px" }}
        className="ck-editor"
      />
      {warningDescription && (
        <Form.Text className="text-danger">
          <a>Đây là trường bắt buộc không được bỏ trống</a>
        </Form.Text>
      )}
      {aletUploadSuccess && (
        <div className="container-confirm-upload">
          <p className="confirm-text">
            tin tuyển dụng của bạn đang chờ được <b>phê duyệt.</b>{" "}
            <Link to={"/"} className="Confirm-btn">
              Quay lại trang chủ
            </Link>
          </p>{" "}
        </div>
      )}
      <div className="btn-upload-job">
        <button
          disabled={disabledUpload == true}
          type="submit"
          className={
            disabledUpload ? "upload-job disabled-btn-upload" : "upload-job"
          }
        >
          Đăng tin tuyển dụng
        </button>
      </div>
    </div>
  );
}
