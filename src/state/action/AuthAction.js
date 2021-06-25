import { setAuthFalse, setAuthTrue } from "../reducers/AuthSlice";
import { userSigninApi, userSignupApi } from "../Api/AuthApi";
import { getAndSetTaskAction } from "../action/TaskAction";
import { setTaskBlank } from "../reducers/TaskSlice";
import { getAndSetRoomAction } from "./RoomAction";
export const userSigninAction = (userData) => async (dispatch) => {
  try {
    const { data } = await userSigninApi(userData);
    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("uid", data.user._id);
      console.log("setting auth true");
      dispatch(setAuthTrue());
      console.log("setting data for task");
      dispatch(getAndSetTaskAction(data.user._id));
    } else {
      dispatch(setAuthFalse());
    }
  } catch (error) {
    console.error(error.message);
  }
};

// export const

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
    const uid = localStorage.getItem("uid");
    if (token && uid) {
      dispatch(setAuthTrue());
      console.log("calling task");
      dispatch(getAndSetTaskAction(uid));
      console.log("calling rooms");
      dispatch(getAndSetRoomAction(uid));
    } else {
      dispatch(setAuthFalse());
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const logoutFunction = () => async (dispatch) => {
  try {
    localStorage.clear();
    dispatch(setAuthFalse());
    dispatch(setTaskBlank());
  } catch (error) {}
};
