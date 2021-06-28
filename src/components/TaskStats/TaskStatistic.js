import "./TaskStats.css";
import React from "react";

import AddTask from "../AddTask/AddTask";
import { Flex, Grid, Text } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import {} from "@chakra-ui/icons";

const TaskStatistic = ({
  showCreate,
  total,
  completed,
  incomolete,
  companyName,
}) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" box>
      <Flex
        width="250px"
        height="130px"
        borderRadius="0px"
        alignItems="center"
        justifyContent="center"
        boxShadow="md"
        backgroundColor="gray.700"
      >
        {showCreate ? (
          <AddTask />
        ) : (
          <Text fontSize="22px" fontWeight="bold" color="gray.400">
            {companyName}
          </Text>
        )}
      </Flex>

      <Flex
        width="250px"
        height="130px"
        borderRadius="0px"
        alignItems="center"
        justifyContent="center"
        boxShadow="md"
        backgroundColor="gray.700"
      >
        <Flex
          height="50px"
          width="50px"
          alignItems="center"
          justifyContent="center"
          borderWidth="6px"
          borderColor="#70a1ff"
          borderRadius="50%"
          backgroundColor="#70a1ff"
          mr="10px"
          p="24px"
        >
          <Text fontSize="4xl" fontWeight="medium" color="white">
            {total}
          </Text>
        </Flex>

        <Text fontSize="2xl" fontWeight="bold" color="#70a1ff">
          Total Tasks
        </Text>
      </Flex>
      <Flex
        width="250px"
        height="130px"
        borderRadius="0px"
        alignItems="center"
        justifyContent="center"
        boxShadow="md"
        backgroundColor="gray.700"
      >
        <Flex
          height="50px"
          width="50px"
          alignItems="center"
          justifyContent="center"
          borderWidth="6px"
          borderColor="#70a1ff"
          borderRadius="50%"
          backgroundColor="#70a1ff"
          mr="10px"
          p="24px"
        >
          <Text fontSize="4xl" fontWeight="medium" color="white">
            {completed}
          </Text>
        </Flex>

        <Text fontSize="2xl" fontWeight="medium" color="#70a1ff">
          Completed
        </Text>
      </Flex>
      <Flex
        width="250px"
        height="130px"
        borderRadius="0px"
        alignItems="center"
        justifyContent="center"
        boxShadow="md"
        backgroundColor="gray.700"
      >
        <Flex
          height="50px"
          width="50px"
          alignItems="center"
          justifyContent="center"
          borderWidth="6px"
          borderColor="#70a1ff"
          borderRadius="50%"
          backgroundColor="#70a1ff"
          mr="10px"
          p="24px"
        >
          <Text fontSize="4xl" fontWeight="medium" color="white">
            {incomolete}
          </Text>
        </Flex>

        <Text fontSize="2xl" fontWeight="medium" color="#70a1ff">
          Tasks Left
        </Text>
      </Flex>
    </Grid>
  );
};

export default TaskStatistic;
