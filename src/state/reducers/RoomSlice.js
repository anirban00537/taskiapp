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
    updateRoom: (state, { payload }) => {
      const index = state.rooms.findIndex((room) => room._id === payload._id);
      state.rooms[index].roomMembers = payload.roomMembers;
    },
    deleteRoom: (state, { payload }) => {
      const newState = state.rooms.filter((room) => payload !== room._id)
      state.rooms = newState;
    }
  },
});

export const { getRooms, addRoom, updateRoom, deleteRoom } = RoomSlice.actions;
export default RoomSlice.reducer;
