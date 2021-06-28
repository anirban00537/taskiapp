import { Box, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RoomTaskCard from "../components/TaskComponents/RoomTaskCard";
import TaskStats from "../components/TaskStats/TaskStats";
import { getAndSetJoinedRoomTaskAction } from "../state/action/JoinedRoomTaskAction";

const Room = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { joinedroom } = useSelector((state) => state.joinedroom);
  const room = joinedroom.find((room) => room._id === id);
  const roomTasks = useSelector(
    (state) => state.joinedroomTask.joinedroomTasks
  );
  const completed = roomTasks.filter((task) => task.complete == true);
  const notCompleted = roomTasks.filter((task) => task.complete == false);
  console.log(room, "found room");
  const userID = localStorage.getItem("uid");
  const getJoinedRoomTask = async () => {
    dispatch(getAndSetJoinedRoomTaskAction(userID, id));
  };
  useEffect(() => {
    getJoinedRoomTask();
  }, []);
  return (
    <Flex
      className=""
      width="100%"
      flexDirection="column"
      height="100vh"
      backgroundColor="gray.800"
    >
      <TaskStats
        showCreate={false}
        companyName={room?.roomName}
        total={roomTasks?.length}
        completed={completed?.length}
        incomolete={notCompleted?.length}
      />
      <Text fontSize="3xl" fontWeight="bold" color="#a9aec4" textAlign="center">
        BrainBoxBD
      </Text>
      <Grid templateColumns="repeat(5, 1fr)">
        {roomTasks.map((roomTask) => (
          <Flex alignItems="center" justifyContent="center">
            <RoomTaskCard crossBtn={false} roomTask={roomTask} show={true} />
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
};

export default Room;
