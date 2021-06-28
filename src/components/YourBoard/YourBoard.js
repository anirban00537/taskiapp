import {
  Badge,
  Box,
  Button,
  CloseButton,
  Flex,
  Grid,
  IconButton,
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

  const handleOver = (id) => {
    setDltBtn(id);
  };

  const handleLeave = () => {
    setDltBtn(false);
  };
  return (
    <Grid templateColumns="repeat(5, 1fr)" w="100%">
      {rooms.map((room) => (
        <Box
          onMouseOver={() => handleOver(room._id)}
          onMouseLeave={() => handleLeave(room._id)}
        >
          <Flex
            flexDirection="column"
            p="10px"
            mt="5"
            borderRadius="5px"
            w="60%"
            alignItems="center"
            justifyContent="space-between"
            m="10px"
            backgroundColor="gray.700"
          >
            <Link to={`/your/room/${room._id}`}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                alignItems="center"
                height="120px"
                w="100%"
                p="10px"
              >
                <Avatar name={room.roomName} backgroundColor="blue.500" />
                <Text
                  fontWeight="bold"
                  fontSize="large"
                  color="gray.400"
                  mt="5px"
                >
                  {room.roomName}
                </Text>
                <Badge
                  fontSize="11px"
                  variant="outline"
                  backgroundcolor="gray.300"
                  color="gray.300"
                  mt="10px"
                >
                  Total Members {room.roomMembers.length}
                </Badge>
              </Box>
            </Link>
            <Box>
              <CloseButton
                display={dltBtn === room._id ? "block" : "none"}
                onClick={() => dispatch(deleteRoomAction(room._id))}
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
