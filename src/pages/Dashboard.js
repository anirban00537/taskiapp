import { AddIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  IconButton,
  Text,
} from "@chakra-ui/react";
import CreateBoard from "../components/Board/CreateBoard";
import JoinedBoard from "../components/YourBoard/JoinedBoard";

import YourBoard from "../components/YourBoard/YourBoard";
const Dashboard = () => {
  return (
    <Flex
      justifyContent="flex-start"
      alignItems="center"
      w="100%"
      flexDirection="column"
      backgroundColor="gray.100"
      height="100vh"
    >
      <Flex flexDirection="column" w="90%" mt="20px">
        <Text mb="10px" color="#a9aec4" fontWeight="bold" fontSize="32px">
          Your Board <CreateBoard />
        </Text>
        <YourBoard />
      </Flex>
      <Flex flexDirection="column" w="90%" mt="20px">
        <Text mb="10px" color="#a9aec4" fontWeight="bold" fontSize="32px">
          Joined Board
        </Text>
        <JoinedBoard />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
