import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "../reducers/TaskSlice";
import AuthSlice from "../reducers/AuthSlice";
import RoomSlice from "../reducers/RoomSlice";
import RoomTaskSlice from "../reducers/RoomTaskSlice";
import JoinedRoomSlice from "../reducers/JoinedRoomSlice";
export default configureStore({
  reducer: {
    tasks: TaskSlice,
    auth: AuthSlice,
    room: RoomSlice,
    roomTasks: RoomTaskSlice,
    joinedroom: JoinedRoomSlice,
  },
});
