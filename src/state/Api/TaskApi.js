import axios from "axios";
const baseURL = "http://localhost:5000";

export const getTaskApi = async () => await axios.get(`${baseURL}/task`);
