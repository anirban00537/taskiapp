import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { useState } from "react";
const YourBoard = ({ rooms }) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" w="100%">
      {rooms.map((room) => (
        <Link to={`/your/room/${room._id}`}>
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
          </Flex>
        </Link>
      ))}
    </Grid>
  );
};

export default YourBoard;
