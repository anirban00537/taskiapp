import {
  getRoomTask,
  addRoomTask,
  deltRoomTask,
} from "../reducers/RoomTaskSlice.js";
import {
  createRoomTaskWithRoomAdminID,
  getAllRoomsTaskByAdminIDAndRoomID,
  deleteRoomTask,
} from "../Api/RoomTaskApi.js";

export const getAndSetRoomTaskAction =
  (adminID, roomID) => async (dispatch) => {
    try {
      const { data } = await getAllRoomsTaskByAdminIDAndRoomID(adminID, roomID);
      dispatch(getRoomTask(data));
      console.log(data, "roomTasks");
    } catch (error) {
      console.error(error.message);
    }
  };
export const createRoomTaskWithRoomAdminIDAction =
  (roomTaskData, adminID, roomID) => async (dispatch) => {
    try {
      const { data } = await createRoomTaskWithRoomAdminID(
        roomTaskData,
        adminID,
        roomID
      );
      dispatch(getRoomTask(data));
    } catch (error) {
      console.error(error.message);
    }
  };

export const deleteRoomTaskAction = (taskID) => async (dispatch) => {
  try {
    const { data } = await deleteRoomTask(taskID);
    dispatch(deltRoomTask(data.id));
  } catch (error) {
    console.log(error);
  }
};
