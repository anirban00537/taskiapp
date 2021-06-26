import { createSlice } from "@reduxjs/toolkit";
export const JoinedRoomSlice = createSlice({
  name: "joinedroom",
  initialState: {
    joinedroom: [],
  },
  reducers: {
    getRooms: (state, { payload }) => {
      state.joinedroom = payload;
    },
  },
});

export const { getRooms, addRoom, updateRoom } = JoinedRoomSlice.actions;
export default JoinedRoomSlice.reducer;
