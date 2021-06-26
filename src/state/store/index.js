import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "../reducers/TaskSlice";
import AuthSlice from "../reducers/AuthSlice";
import RoomSlice from "../reducers/RoomSlice";
import RoomTaskSlice from "../reducers/RoomTaskSlice";
import JoinedRoomSlice from "../reducers/JoinedRoomSlice";
import JoinedRoomTaskSlice from "../reducers/JoinedRoomTaskSlice";

export default configureStore({
  reducer: {
    tasks: TaskSlice,
    auth: AuthSlice,
    room: RoomSlice,
    roomTasks: RoomTaskSlice,
    joinedroom: JoinedRoomSlice,
    joinedroomTask: JoinedRoomTaskSlice,
  },
});
