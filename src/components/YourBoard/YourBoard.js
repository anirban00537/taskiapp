import {
  Badge,
  Box,
  Button,
  CloseButton,
  Flex,
  Grid,
  useToast,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { useState } from "react";
import { deleteRoomAction } from "../../state/action/RoomAction";
import { useDispatch } from "react-redux";

const YourBoard = ({ rooms }) => {
  const dispatch = useDispatch();
  const [dltBtn, setDltBtn] = useState(null);
  const toast = useToast();
  const handleOver = (id) => {
    setDltBtn(id);
  };

  const handleLeave = () => {
    setDltBtn(false);
  };
  return (
    <Grid templateColumns="repeat(1, 1fr)" w="100%" justifyContent="center">
      {rooms.map((room) => (
        <Box
          onMouseOver={() => handleOver(room._id)}
          onMouseLeave={() => handleLeave(room._id)}
        >
          <Flex
            flexDirection="row"
            p="10px"
            mt="5"
            borderRadius="5px"
            w="90%"
            alignItems="center"
            justifyContent="flex-start"
            m="10px"
            backgroundColor="#1c2635"
          >
            <Link to={`/your/room/${room._id}`}>
              <Box
                display="flex"
                flexDirection=""
                alignItems="center"
                alignItems="center"
                w="100%"
                p="10px"
              >
                <Avatar name={room.roomName} backgroundColor="blue.500" />
                <Flex flexDirection="column">
                  <Text
                    fontWeight="bold"
                    fontSize="large"
                    color="gray.400"
                    mt="5px"
                    ml="10px"
                  >
                    {room.roomName}
                  </Text>
                  <Text color="gray.500" ml="10px">
                    Total Room Members {room.roomMembers.length}
                  </Text>
                </Flex>
              </Box>
            </Link>
            <Box>
              <CloseButton
                display={dltBtn === room._id ? "block" : "none"}
                onClick={() =>
                  dispatch(deleteRoomAction(room._id)).then(() => {
                    toast({
                      title: "Room hasbeen deleted",
                      description:
                        "All information in the room has been deleted",
                      status: "error",
                      duration: 6000,
                      isClosable: true,
                    });
                  })
                }
                color="gray.400"
              />
            </Box>
          </Flex>
        </Box>
      ))}
    </Grid>
  );
};

export default YourBoard;
