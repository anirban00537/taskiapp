import axios from "axios";
const baseUrl = "http://localhost:5000/joinedroom";

export const getAllRoomsByuserID = async (userID) =>
  await axios.get(`${baseUrl}/${userID}`);
