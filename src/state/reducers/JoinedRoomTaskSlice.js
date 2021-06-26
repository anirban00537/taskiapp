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
  },
});

export const { getJoinedRoomTask } = JoinedRoomTaskSlice.actions;
export default JoinedRoomTaskSlice.reducer;
