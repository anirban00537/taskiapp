import { getRooms, addRoom } from "../reducers/RoomSlice.js";
import { getAllRoomsByAdminID, createAndGetBackRoom } from "../Api/Room.js";

export const getAndSetRoomAction = (uid) => async (dispatch) => {
  // const userID = localStorage.getItem("uid");

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
