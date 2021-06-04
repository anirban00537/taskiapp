import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "../reducers/TaskSlice";
import AuthSlice from "../reducers/AuthSlice";
export default configureStore({
  reducer: {
    tasks: TaskSlice,
    auth: AuthSlice,
  },
});
