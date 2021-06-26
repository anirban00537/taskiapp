import { getRooms } from "../reducers/JoinedRoomSlice";
import { getAllRoomsByuserID } from "../Api/JoinedRoom.js";
export const getAndSetJoinedRoomAction = (uid) => async (dispatch) => {
  try {
    const { data } = await getAllRoomsByuserID(uid);
    dispatch(getRooms(data));
  } catch (error) {
    console.error(error.message);
  }
};
