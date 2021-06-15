import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import RoomTaskCard from "../components/TaskComponents/RoomTaskCard";
import TaskStats from "../components/TaskStats/TaskStats";
const Room = () => {
  return (
    <Flex alignItems="center" flexDirection="column" justifyContent="center">
      <TaskStats
        total={5}
        // tasks={3}
        completed={2}
        incomolete={1}
      />
      <SimpleGrid columns={4} spacing={10}>
        <RoomTaskCard />
        <RoomTaskCard />
        <RoomTaskCard />
        <RoomTaskCard />
        <RoomTaskCard />
        <RoomTaskCard />
      </SimpleGrid>
    </Flex>
  );
};

export default Room;
