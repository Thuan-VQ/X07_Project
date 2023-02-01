import axios from "axios";
import { toast } from "react-toastify";
import {
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
} from "../Constants/userConstant";
import { getApiHost } from "../config";
export const updatePassword =
  (currentPassword, newPassword, token) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_PASSWORD_REQUEST });
      const data = await axios.put(
        getApiHost() + "users/update-password",
        { currentPassword, newPassword },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data });
      toast.success("Cập nhật mật khẩu thành công !");
      console.log(data);
    } catch (error) {
      console.log();
      toast.error(error.response.data.message);
      dispatch({
        type: UPDATE_PASSWORD_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const data = await axios.post(
      getApiHost() + "users/forgot-password",
      { email },
      config
    );
    toast.success("Vui lòng kiểm tra email của bạn !");
    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.data });
  } catch (error) {
    toast.error("Email không tồn tại trong hệ thống !");
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};
