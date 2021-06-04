import axios from "axios";
const baseURL = "http://localhost:5000";

export const getTaskApi = async () => await axios.get(`${baseURL}/task`);

export const createTaskApi = async (Taskdata) =>
  await axios.post(`${baseURL}/task`, Taskdata);

export const deleteTaskApi = async (id) =>
  await axios.delete(`${baseURL}/task/${id}`);

export const updateTaskApi = async (id, status) =>
  await axios.patch(`${baseURL}/task/${id}/${status}`);
