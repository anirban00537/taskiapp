import { Badge, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RoomTaskCard from "../components/TaskComponents/RoomTaskCard";
import TaskStats from "../components/TaskStats/TaskStats";
import AddYourRoomTask from "../components/YourBoard/AddYourRoomTask";
import SearchMember from "../components/YourBoard/SearchMember";
import ViewMembers from "../components/YourBoard/ViewMembers";
import empty from "./empty.png";
import { getAndSetRoomTaskAction } from "../state/action/RoomTaskAction";

const YourRoom = () => {
  const { id } = useParams();
  const { rooms } = useSelector((state) => state.room);

  const roomTasks = useSelector((state) => state.roomTasks.roomTasks);
  console.log(roomTasks, "roomTaskkAll");
  const room = rooms.find((room) => room._id === id);
  const completed = roomTasks.filter((task) => task.complete == true);
  const notCompleted = roomTasks.filter((task) => task.complete == false);
  const dispatch = useDispatch();
  const Adminid = localStorage.getItem("uid");
  useEffect(() => {
    dispatch(getAndSetRoomTaskAction(Adminid, id));
  }, [id]);
  return (
    <Flex width="100%" flexDirection="column" backgroundColor="">
      <TaskStats
        showCreate={false}
        companyName={room?.roomName}
        total={roomTasks?.length}
        completed={completed?.length}
        incomolete={notCompleted?.length}
      />

      <Flex alignItems="center" justifyContent="space-between">
        <Badge
          mt="10px"
          p="10px"
          borderRadius="6px"
          ml="20px"
          fontSize="15px"
          fontWeight="bold"
          color="blue.400"
        >
          Total Room Members {room?.roomMembers.length}
          <ViewMembers members={room?.roomMembers} roomID={id} />
        </Badge>

        <Text
          fontSize="3xl"
          fontWeight="bold"
          color="#a9aec4"
          textAlign="center"
          ml="30px"
        >
          Manage Room And Tasks
        </Text>
        <Flex alignItems="center" mr="20px">
          <AddYourRoomTask
            members={room?.roomMembers}
            roomId={id}
            adminUid={Adminid}
          />
          <SearchMember roomID={id} />
        </Flex>
      </Flex>
      {roomTasks.length === 0 ? (
        <Flex
          alignItems="center"
          justifyContent="center"
          height="400px"
          flexDirection="column"
        >
          <Image
            borderRadius="full"
            boxSize="300px"
            src={empty}
            alt="Segun Adebayo"
          />
          <Text fontSize="3xl" fontWeight="bold" color="gray.400">
            No Task Avaialable
          </Text>
        </Flex>
      ) : (
        <Grid templateColumns="repeat(5, 1fr)">
          {roomTasks.map((roomTask) => (
            <Flex alignItems="center" justifyContent="center">
              <RoomTaskCard crossBtn={true} roomTask={roomTask} show={false} />
            </Flex>
          ))}
        </Grid>
      )}
    </Flex>
  );
};

export default YourRoom;
