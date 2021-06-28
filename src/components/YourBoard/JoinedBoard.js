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
            backgroundColor="gray.700"
            p="10px"
            mt="5"
            borderRadius="5px"
            w="60%"
            height="120px"
            alignItems="center"
            justifyContent="center"
            m="10px"
            flexDirection="column"
          >
            <Avatar
              name={room.roomName}
              color="white"
              backgroundColor="blue.500"
            />
            <Text fontWeight="bold" fontSize="large" color="gray.400" mt="5px">
              {room.roomName}
            </Text>
          </Flex>
        </Link>
      ))}
    </Grid>
  );
};

export default JoinedBoard;
