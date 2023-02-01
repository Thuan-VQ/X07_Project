import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../Constants/authConstant";

const initialState = {
  user: [],
  isAuthenticated: false,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGIN_FAIL:
      return {
        isAuthenticated: false,
        error: true,
        loading: false,
        user: null,
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
        error: false,
        user: null,
      };
    default:
      return state;
  }
};
