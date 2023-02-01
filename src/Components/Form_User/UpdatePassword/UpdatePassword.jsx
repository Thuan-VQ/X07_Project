import React, { Fragment, useEffect, useState } from "react";
import {
  isCheckPassword,
  isEmpty,
  isMathUpdatePassword,
} from "../../../utils/validate";
import { toast, ToastContainer } from "react-toastify";
import MetaData from "../../MetaData/MetaData";
import { updatePassword } from "../../../Actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import "./UpdatePassword.css";
import Loading from "../../Loading";
export default function UpdatePassword() {
  const [checked, setChecked] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auths);
  const { loading } = useSelector((state) => state.profiles);
  const [token, setToken] = useState("");
  console.log(token);
  useEffect(() => {
    const tokenValue = JSON.parse(localStorage.getItem("token"));
    setToken(tokenValue);
  });
  const handleChangeCheckPassword = (e) => {
    setChecked(e.target.checked);
  };

  const updatePasswordSubmit = (e) => {
    e.preventDefault();
    const dataPassword = {
      currentPassword,
      newPassword,
    };
    if (
      isEmpty(currentPassword) ||
      isEmpty(newPassword) ||
      isEmpty(confirmPassword)
    ) {
      return toast.warn("Vui lòng điền tất cả thông tin !");
    }
    //check length pass
    if (!isCheckPassword(newPassword)) {
      return toast.warn(
        "Mật khẩu phải tối thiểu 8 ký tự, tối thiểu 1 chữ số, 1 ký tự đặc biệt, 1 chữ hoa, 1 chữ thường"
      );
    }
    // check comfirm update newPassword
    if (!isMathUpdatePassword(newPassword, confirmPassword)) {
      return toast.warn("Mật khẩu không khớp !");
    }

    dispatch(updatePassword(currentPassword, newPassword, token));
  };
  return (
    <Fragment>
      <ToastContainer />
      <div className="update-password">
        <div className="form-container">
          <form className="form" action="" onSubmit={updatePasswordSubmit}>
            <h3>Thay đổi mật khẩu</h3>
            <div className="group_input">
              <label htmlFor="old_password">
                Mật khẩu hiện tại <span className="required">*</span>
              </label>
              <input
                type={checked ? "text" : "password"}
                id="old_password"
                name="old_password"
                value={currentPassword}
                className="password"
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div className="group_input">
              <label htmlFor="new_password">
                Mật khẩu mới <span className="required">*</span>
              </label>
              <input
                type={checked ? "text" : "password"}
                id="new_password"
                value={newPassword}
                name="new_password"
                className="password"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="group_input">
              <label htmlFor="cf_password">
                Gõ lại mật khẩu mới <span className="required">*</span>
              </label>
              <input
                type={checked ? "text" : "password"}
                value={confirmPassword}
                id="cf_password"
                name="cf_password"
                className="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="check_password">
              <input
                type="checkbox"
                id="check_password"
                checked={checked}
                onChange={handleChangeCheckPassword}
              />
              <label htmlFor="check_password">Hiển thị mật khẩu</label>
            </div>
            <div className="group_input">
              {loading ? (
                <button type="submit">
                  {" "}
                  <Loading loading={loading} size={20} color={"#fff"} />
                </button>
              ) : (
                <button type="submit">Cập nhật mật khẩu</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
