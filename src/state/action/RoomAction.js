import { getRooms, addRoom, deleteRoom } from "../reducers/RoomSlice.js";
import {
  getAllRoomsByAdminID,
  createAndGetBackRoom,
  deleteRoomAndGetBackID,
} from "../Api/Room.js";
import { ToastAlert } from "../../components/Toasts/Toasts.js";

export const getAndSetRoomAction = (uid) => async (dispatch) => {
  try {
    const { data } = await getAllRoomsByAdminID(uid);
    dispatch(getRooms(data));
  } catch (error) {
    console.error(error.message);
  }
};

export const createAndGetBackRoomAction = (roomData) => async (dispatch) => {
  try {
    const { data } = await createAndGetBackRoom(roomData);

    dispatch(addRoom(data));
  } catch (error) {
    console.error(error);
  }
};

export const deleteRoomAction = (id) => async (dispatch) => {
  try {
    const { data } = await deleteRoomAndGetBackID(id);
    dispatch(deleteRoom(data));
  } catch (error) {
    console.error(error);
  }
};
