import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [],
  },
  reducers: {
    getTask: (state, { payload }) => {
      state.tasks = payload;
    },
    addTask: (state, { payload }) => {
      state.tasks.push(payload);
    },
    deleteTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((task) => task._id != payload);
    },
    updateTask: (state, { payload }) => {
      const index = state.tasks.findIndex((task) => task._id === payload.id);
      if (payload.status === "true") {
        state.tasks[index].complete = true;
      } else if (payload.status === "false") {
        state.tasks[index].complete = false;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { getTask, addTask, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
