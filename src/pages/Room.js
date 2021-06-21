import { Box, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import RoomTaskCard from "../components/TaskComponents/RoomTaskCard";
import TaskStats from "../components/TaskStats/RoomTaskStats";
import RoomTaskStats from "../components/TaskStats/RoomTaskStats";
const Room = () => {
  return (
    <Flex
      className=""
      width="100%"
      flexDirection="column"
      backgroundColor="gray.100"
      height="100vh"
    >
      <TaskStats
      // total={tasks.length}
      // tasks={tasks}
      // completed={completed.length}
      // incomolete={notCompleted.length}
      />
      <Text fontSize="3xl" fontWeight="bold" color="#a9aec4" textAlign="center">
        BrainBoxBD
      </Text>
      <Grid templateColumns="repeat(5, 1fr)">
        <Flex alignItems="center" justifyContent="center">
          <RoomTaskCard />
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <RoomTaskCard />
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <RoomTaskCard />
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <RoomTaskCard />
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <RoomTaskCard />
        </Flex>
      </Grid>
    </Flex>
  );
};

export default Room;
