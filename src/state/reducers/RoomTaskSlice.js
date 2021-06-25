import { createSlice } from "@reduxjs/toolkit";
export const RoomTaskSlice = createSlice({
  name: "roomTasks",
  initialState: {
    roomTasks: [],
  },
  reducers: {
    getRoomTask: (state, { payload }) => {
      state.roomTasks = payload;
    },
    addRoomTask: (state, { payload }) => {
      state.roomTasks.push(payload);
    },
    deltRoomTask: (state, { payload }) => {
      state.roomTasks = state.roomTasks.filter((task) => task._id !== payload);
    },
  },
});

export const { getRoomTask, addRoomTask, deltRoomTask } = RoomTaskSlice.actions;
export default RoomTaskSlice.reducer;
