import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "../reducers/TaskSlice";
export default configureStore({
  reducer: {
    tasks: TaskSlice,
  },
});
