import { AddIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  IconButton,
  Text,
} from "@chakra-ui/react";
import CreateBoard from "../components/Board/CreateBoard";
import JoinedBoard from "../components/YourBoard/JoinedBoard";
import { getAndSetRoomAction } from "../state/action/RoomAction";
import YourBoard from "../components/YourBoard/YourBoard";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.room.rooms);
  const uid = localStorage.getItem("uid");
  useEffect(() => {
    dispatch(getAndSetRoomAction(uid));
  }, []);
  return (
    <Flex
      justifyContent="flex-start"
      alignItems="center"
      w="100%"
      flexDirection="column"
      backgroundColor=""
      height="100vh"
    >
      <Flex flexDirection="column" w="90%" mt="20px">
        <Text mb="10px" color="gray" fontWeight="bold" fontSize="32px">
          Your Board <CreateBoard />
        </Text>
        <YourBoard rooms={rooms} />
      </Flex>
      <Flex flexDirection="column" w="90%" mt="20px">
        <Text mb="10px" color="gray" fontWeight="bold" fontSize="32px">
          Joined Board
        </Text>
        <JoinedBoard />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
