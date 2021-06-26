import { Badge, Box, Flex, Grid, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAndSetJoinedRoomAction } from "../../state/action/JoinedRoomsAction";

const JoinedBoard = () => {
  const dispatch = useDispatch();
  const Rooms = useSelector((state) => state.joinedroom.joinedroom);
  const getAllRooms = async () => {
    const uid = localStorage.getItem("uid");
    dispatch(getAndSetJoinedRoomAction(uid));
  };
  useEffect(() => {
    getAllRooms();
  }, []);

  return (
    <Grid templateColumns="repeat(5, 1fr)" w="100%">
      {Rooms.map((room) => (
        <Link to={`/room/${room._id}`}>
          <Flex
            backgroundColor=""
            p="10px"
            mt="5"
            borderRadius="5px"
            w="90%"
            borderWidth="1px"
            alignItems="center"
            justifyContent="flex-start"
            m="10px"
            flexDirection="row"
          >
            <Avatar name="DimChai" backgroundColor="#a7c5ff" color="white" />
            <Text
              fontWeight="bold"
              fontSize="large"
              color="gray"
              mt="5px"
              ml="10px"
            >
              {room.roomName}
            </Text>
          </Flex>
        </Link>
      ))}
    </Grid>
  );
};

export default JoinedBoard;
