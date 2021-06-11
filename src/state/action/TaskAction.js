import {
  addTask,
  deleteTask,
  getTask,
  updateTask,
} from "../reducers/TaskSlice";
import {
  getTaskApi,
  createTaskApi,
  deleteTaskApi,
  updateTaskApi,
} from "../Api/TaskApi";
export const getAndSetTaskAction = (uid) => async (dispatch) => {
  try {
    const { data } = await getTaskApi(uid);
    console.log("calling");
    dispatch(getTask(data));
  } catch (error) {
    console.error(error.message);
  }
};

export const createAndUpdateTaskAction = (Taskdata) => async (dispatch) => {
  try {
    const { data } = await createTaskApi(Taskdata);
    dispatch(addTask(data));
  } catch (error) {}
};

export const updateTaskAction = (id, status) => async (dispatch) => {
  try {
    const { data } = await updateTaskApi(id, status);
    console.log(data, "from action");
    dispatch(updateTask({ id, status }));
  } catch (error) {}
};

export const deleteTaskAction = (id) => async (dispatch) => {
  try {
    const { data } = await deleteTaskApi(id);
    dispatch(deleteTask(data.id));
  } catch (error) {}
};
