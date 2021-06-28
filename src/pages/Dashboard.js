import { AddIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  IconButton,
  Image,
  Kbd,
  Text,
} from "@chakra-ui/react";
import CreateBoard from "../components/Board/CreateBoard";
import JoinedBoard from "../components/YourBoard/JoinedBoard";
import { getAndSetRoomAction } from "../state/action/RoomAction";
import YourBoard from "../components/YourBoard/YourBoard";
import { useEffect } from "react";
import empty from "./—Pngtree—empty box png_5841594.png";
import { useDispatch, useSelector } from "react-redux";
import { getAndSetJoinedRoomAction } from "../state/action/JoinedRoomsAction";

const Dashboard = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.room.rooms);
  const Rooms = useSelector((state) => state.joinedroom.joinedroom);
  const getAllRooms = async () => {
    const uid = localStorage.getItem("uid");
    dispatch(getAndSetJoinedRoomAction(uid));
  };
  const uid = localStorage.getItem("uid");
  useEffect(() => {
    dispatch(getAndSetRoomAction(uid));
    getAllRooms();
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
      <Grid templateColumns="3fr 1fr " w="100%">
        <Flex flexDirection="column" w="90%" mt="20px" ml="20px">
          {Rooms.length == 0 ? (
            <Flex
              w="100%"
              alignItems="center"
              justifyContent="center"
              height="500px"
              flexDirection="column"
            >
              <Image
                src="https://static.wixstatic.com/media/4624b2_3b47caac59ae4597bf12e2630eaa3ebe~mv2.gif"
                boxSize="280px"
              />
              <Text fontSize="36px" color="gray.400">
                Opps Empty Room
              </Text>
              <Text fontSize="14px" color="gray.500">
                Please make sure that someone has added you to their room
              </Text>
            </Flex>
          ) : (
            <>
              <Text
                mb="10px"
                color="gray.300"
                fontWeight="medium"
                fontSize="28px"
              >
                Joined Board
              </Text>
              <JoinedBoard />
            </>
          )}
        </Flex>
        <Flex flexDirection="column" w="90%" mt="20px">
          <Text mb="10px" color="gray.300" fontWeight="medium" fontSize="28px">
            Your Board <CreateBoard />
          </Text>
          {rooms.length <= 0 ? (
            <Flex
              w="100%"
              alignItems="center"
              justifyContent="center"
              height="500px"
              flexDirection="column"
            >
              <Image src={empty} boxSize="180px" />
              <Text fontSize="36px" color="gray.400">
                Empty
              </Text>
              <Text fontSize="14px" w="80%" textAlign="center" color="gray.500">
                To create your own room click on the{" "}
                <span>
                  <Kbd backgroundColor="gray.700" borderWidth="0px" ml="10px">
                    +
                  </Kbd>
                </span>
                plus button
              </Text>
            </Flex>
          ) : (
            <YourBoard rooms={rooms} />
          )}
        </Flex>
      </Grid>
    </Flex>
  );
};

export default Dashboard;
