import axios from "axios";
const baseUrl = "http://localhost:5000/user/search";

export const searchMember = async (keywords) =>
  await axios.get(`${baseUrl}/${keywords}`);
