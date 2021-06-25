import { createSlice } from "@reduxjs/toolkit";
export const RoomSlice = createSlice({
  name: "room",
  initialState: {
    rooms: [],
  },
  reducers: {
    getRooms: (state, { payload }) => {
      state.rooms = payload;
    },
    addRoom: (state, { payload }) => {
      state.rooms.push(payload);
    },
  },
});

export const { getRooms, addRoom } = RoomSlice.actions;
export default RoomSlice.reducer;
