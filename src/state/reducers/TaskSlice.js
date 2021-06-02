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
      state.tasks = state.tasks.filter((task) => task.id != payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getTask, addTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
