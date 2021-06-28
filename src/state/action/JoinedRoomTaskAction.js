import {
  getJoinedRoomTask,
  updateJoinedRoomTask,
} from "../reducers/JoinedRoomTaskSlice.js";
import {
  getAllJoinedRoomTaskByUserID,
  updateJoinedRoomTaskByTaskID,
} from "../Api/JoinedRoomTask.js";
export const getAndSetJoinedRoomTaskAction =
  (userID, roomID) => async (dispatch) => {
    try {
      const { data } = await getAllJoinedRoomTaskByUserID(userID, roomID);
      dispatch(getJoinedRoomTask(data));
      console.log(data, "joinedroomTasks");
    } catch (error) {
      console.error(error.message);
    }
  };

export const updateJoinedRoomTaskAction =
  (taskID, complete, progress) => async (dispatch) => {
    if (complete != null) {
      const { data } = await updateJoinedRoomTaskByTaskID(taskID, { complete });
      console.log(data);
      dispatch(
        updateJoinedRoomTask({
          id: taskID,
          progress: data.progress,
          complete: data.complete,
        })
      );
    } else if (progress != null) {
      const { data } = await updateJoinedRoomTaskByTaskID(taskID, { progress });
      console.log(data);
      dispatch(
        updateJoinedRoomTask({
          id: taskID,
          progress: data.progress,
          complete: data.complete,
        })
      );
    }
  };
