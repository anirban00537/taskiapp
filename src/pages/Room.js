import { Box, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import RoomTaskCard from "../components/TaskComponents/RoomTaskCard";
import TaskStats from "../components/TaskStats/TaskStats";

const Room = () => {
  return (
    <Flex className="" width="100%" flexDirection="column" height="100vh">
      <TaskStats
        companyName="BrainBoxBD"
        showCreate={false}
        total={9}
        completed={7}
        incomolete={2}
      />
      <Text fontSize="3xl" fontWeight="bold" color="#a9aec4" textAlign="center">
        BrainBoxBD
      </Text>
      <Grid templateColumns="repeat(5, 1fr)">
        {/* <Flex alignItems="center" justifyContent="center">
          <RoomTaskCard crossBtn={false} />
        </Flex> */}
      </Grid>
    </Flex>
  );
};

export default Room;
