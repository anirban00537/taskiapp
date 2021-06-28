import { createSlice } from "@reduxjs/toolkit";
export const JoinedRoomTaskSlice = createSlice({
  name: "joinedroomTasks",
  initialState: {
    joinedroomTasks: [],
  },
  reducers: {
    getJoinedRoomTask: (state, { payload }) => {
      state.joinedroomTasks = payload;
    },
    updateJoinedRoomTask: (state, { payload }) => {
      const index = state.joinedroomTasks.findIndex(
        (task) => task._id === payload.id
      );

      state.joinedroomTasks[index].complete = payload.complete;
      state.joinedroomTasks[index].progress = payload.progress;
    },
    chillCALL: (state, { payload }) => {
      const index = state.joinedroomTasks.findIndex(
        (task) => task._id === payload.id
      );
      console.log(index);
    },
  },
});

export const { getJoinedRoomTask, updateJoinedRoomTask, chillCALL } =
  JoinedRoomTaskSlice.actions;
export default JoinedRoomTaskSlice.reducer;
