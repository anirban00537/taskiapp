import axios from "axios";
const baseUrl = "http://localhost:5000/room";

export const getAllRoomsByAdminID = async (userID) =>
  await axios.get(`${baseUrl}/${userID}`);
export const createAndGetBackRoom = async (roomData) =>
  await axios.post(`${baseUrl}`, roomData);
// http://localhost:5000/room/single/60d387ffdc7901191079357d
// export const getSingleRoomInfo = async (roomID) =>
//   await axios.get(`${baseUrl}/single/${roomID}`);
