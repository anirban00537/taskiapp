import axios from "axios";
const baseURL = "http://localhost:5000";

export const userSigninApi = async (userData) =>
  await axios.post(`${baseURL}/signin`, userData);

export const userSignupApi = async (userData) =>
  await axios.post(`${baseURL}/signup`, userData);
