import { AddIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import CreateBoard from "../components/Board/CreateBoard";
import JoinedBoard from "../components/YourBoard/JoinedBoard";
import { getAndSetRoomAction } from "../state/action/RoomAction";
import YourBoard from "../components/YourBoard/YourBoard";
import { useEffect } from "react";
import empty from "./—Pngtree—empty box png_5841594.png";
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
      backgroundColor="gray.800"
      height="100vh"
    >
      <Flex flexDirection="column" w="90%" mt="20px">
        <Text mb="10px" color="gray.300" fontWeight="medium" fontSize="28px">
          Your Board <CreateBoard />
        </Text>
        {rooms.length <= 0 ? (
          <Flex
            w="100%"
            alignItems="center"
            justifyContent="center"
            height="300px"
            flexDirection="column"
          >
            <Image src={empty} boxSize="180px" />
            <Text fontSize="26px">No Room Available</Text>
          </Flex>
        ) : (
          <YourBoard rooms={rooms} />
        )}
      </Flex>
      <Flex flexDirection="column" w="90%" mt="20px">
        <Text mb="10px" color="gray.300" fontWeight="medium" fontSize="28px">
          Joined Board
        </Text>
        <JoinedBoard />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
