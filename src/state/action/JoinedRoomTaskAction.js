import { getJoinedRoomTask } from "../reducers/JoinedRoomTaskSlice.js";
import { getAllJoinedRoomTaskByUserID } from "../Api/JoinedRoomTask.js";
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
