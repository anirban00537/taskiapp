// http://localhost:5000/roomtask/60c78715d6d1091f9c53f43d/60d20b12f2a2ea1d5030cb64
import axios from "axios";
const baseUrl = "http://localhost:5000/roomtask";
export const getAllRoomsTaskByAdminIDAndRoomID = async (adminID, roomID) =>
  await axios.get(`${baseUrl}/${adminID}/${roomID}`);
export const createRoomTaskWithRoomAdminID = async (
  roomTaskData,
  adminID,
  roomID
) => await axios.post(`${baseUrl}/${adminID}/${roomID}`, roomTaskData);
export const deleteRoomTask = async (taskid) =>
  await axios.delete(`${baseUrl}/${taskid}`);
