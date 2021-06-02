import { addTask, deleteTask, getTask } from "../reducers/TaskSlice";
import { getTaskApi } from "../Api/TaskApi";
export const getAndSetTaskAction = () => async (dispatch) => {
  try {
    const { data } = await getTaskApi();
    dispatch(getTask(data));
  } catch (error) {
    console.error(error.message);
  }
};
