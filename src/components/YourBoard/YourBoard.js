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
  }

  const handleLeave = () => {
    setDltBtn(false);
  }
  return (
    <Grid templateColumns="repeat(5, 1fr)" w="100%">
      {rooms.map((room) => (
        <Box
          onMouseOver={() => handleOver(room._id)}
          onMouseLeave={() => handleLeave(room._id)}
        >
          <Flex
            backgroundColor=""
            p="10px"
            mt="5"
            borderRadius="5px"
            w="90%"
            borderWidth="1px"
            alignItems="center"
            justifyContent='space-between'
            m="10px"
            flexDirection="row"
          >
            <Link to={`/your/room/${ room._id }`}>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center" >
                <Avatar
                  name={room.roomName}
                  backgroundColor="#a7c5ff"
                  color="white"
                />
                <Text
                  fontWeight="bold"
                  fontSize="large"
                  color="gray"
                  mt="5px"
                  ml="10px"
                >
                  {room.roomName}
                </Text>
              </Box>
            </Link>
            <Box>
              <CloseButton
                display={dltBtn === room._id ? "block" : "none"}
                onClick={() => dispatch(deleteRoomAction(room._id))} />
            </Box>
          </Flex>
        </Box>
      ))}
    </Grid>
  );
};

export default YourBoard;
