import axios from "axios";
const baseUrl = "http://localhost:5000/room";

export const getAllRoomsByAdminID = async (userID) =>
  await axios.get(`${ baseUrl }/${ userID }`);

export const createAndGetBackRoom = async (roomData) =>
  await axios.post(`${ baseUrl }`, roomData);

export const deleteRoomAndGetBackID = async (id) =>
  await axios.delete(`${ baseUrl }/delete/${ id }`)

export const updateRoomMemberApi = async (roomID, memberData) =>
  await axios.patch(`${ baseUrl }/update/${ roomID }`, memberData);

export const removeMemberFromRoomApi = async (roomID, roomData) =>
  await axios.patch(`${ baseUrl }/update/delete/${ roomID }`, roomData);
