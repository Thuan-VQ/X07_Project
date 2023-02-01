import { toast } from "react-toastify";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../Constants/authConstant";
import axios from "axios";
import { getApiHost } from "../config";
export const loginUser = (email, password, navigate) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      getApiHost() + "users/login",
      { email, password },
      config
    );

    localStorage.setItem("currentUser", JSON.stringify(data));
    localStorage.setItem("token", JSON.stringify(data.token));

    dispatch({ type: LOGIN_SUCCESS, payload: data });
    navigate("/");
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};
export const logoutUser = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  localStorage.removeItem("currentUser");
  dispatch({ type: LOGOUT, payload: null });
};
