import axios from "axios";
import {
  GET_ALL_CATEGORY_FAIL,
  GET_ALL_CATEGORY_REQUEST,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_JOB_FAIL,
  GET_ALL_JOB_REQUEST,
  GET_ALL_JOB_SUCCESS,
} from "../Constants/jobConstants";
import { getApiHost } from "../config";
export const getAllJobs =
  (search = "", value = "", id = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_JOB_REQUEST });

      let link =
        getApiHost() +
        `recruiments?search=${search}&category=${id}&fieldSort=${value}`;
      if (search || id || value) {
        link =
          getApiHost() +
          `recruiments?search=${search}&category=${id}&fieldSort=${value}`;
      }

      const { data } = await axios.get(link);
      dispatch({ type: GET_ALL_JOB_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_ALL_JOB_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const getAllJobCategory = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_CATEGORY_REQUEST });

    const { data } = await axios.get(getApiHost() + `users/category`);

    dispatch({ type: GET_ALL_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_CATEGORY_FAIL,
      payload: error.response.data.message,
    });
  }
};
