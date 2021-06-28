import axios from "axios";

const baseUrl = "http://localhost:5000/joinedroomtask";

export const getAllJoinedRoomTaskByUserID = async (userID, roomID) =>
  await axios.get(`${baseUrl}/${userID}/${roomID}`);
export const updateJoinedRoomTaskByTaskID = async (taskID, payload) =>
  await axios.patch(`${baseUrl}/${taskID}`, payload);
