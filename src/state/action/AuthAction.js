import { setAuthFalse, setAuthTrue } from "../reducers/AuthSlice";
import { userSigninApi, userSignupApi } from "../Api/AuthApi";
import { getAndSetTaskAction } from "../action/TaskAction";
export const userSigninAction = (userData) => async (dispatch) => {
  try {
    const { data } = await userSigninApi(userData);
    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("uid", data.user._id);

      dispatch(setAuthTrue());
    } else {
      dispatch(setAuthFalse());
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const userSignupAction = (userData) => async (dispatch) => {
  try {
    const { data } = await userSignupApi(userData);
    console.log(data, "user Info");
  } catch (error) {
    console.error(error.message);
  }
};

export const userLoggedinCheck = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      console.log(token, "found");
      dispatch(setAuthTrue());
      dispatch(getAndSetTaskAction());
    } else {
      dispatch(setAuthFalse());
    }
  } catch (error) {
    console.error(error.message);
  }
};
