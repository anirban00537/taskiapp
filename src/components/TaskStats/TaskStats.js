import "./TaskStats.css";
import React from "react";

import AddTask from "../AddTask/AddTask";
import { Flex, Grid, Text } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import {} from "@chakra-ui/icons";

const TaskStats = ({ total, completed, incomolete }) => {
  return (
    <Grid width="100%">
      <Flex
        justifyContent="space-evenly"
        mr="10px"
        ml="10px"
        alignItems="center"
        height="200px"
      >
        <Flex
          width="250px"
          height="150px"
          borderRadius="5px"
          alignItems="center"
          justifyContent="center"
          borderWidth="1px"
          borderColor="gray.350"
          flexDirection="column"
        >
          <Text
            fontSize="3xl"
            fontWeight="semibold"
            color="gray.500"
            mr="20px"
            ml="20px"
          >
            Task Statistics
          </Text>
          <AddTask />
        </Flex>

        <Flex
          width="250px"
          height="150px"
          borderRadius="5px"
          alignItems="center"
          justifyContent="center"
          borderWidth="1px"
          borderColor="gray.350"
        >
          <Flex
            height="50px"
            width="50px"
            alignItems="center"
            justifyContent="center"
            border="1px"
            borderColor="blue.400"
            borderRadius="50%"
            mr="10px"
          >
            <EditIcon fontSize="2xl" color="blue.400" />
          </Flex>
          <Text fontSize="6xl" mr="5px" color="blue.400">
            {total}
          </Text>
          <Text fontSize="2xl" color="blue.400">
            Total Tasks
          </Text>
        </Flex>
        <Flex
          width="250px"
          height="150px"
          borderRadius="5px"
          alignItems="center"
          justifyContent="center"
          borderWidth="1px"
          borderColor="gray.350"
        >
          <Flex
            height="50px"
            width="50px"
            alignItems="center"
            justifyContent="center"
            border="1px"
            borderColor="green.400"
            borderRadius="50%"
            mr="10px"
          >
            <EditIcon fontSize="2xl" color="green.400" />
          </Flex>
          <Text fontSize="6xl" mr="5px" color="green.400">
            {completed}
          </Text>
          <Text fontSize="2xl" color="green.400">
            Completed
          </Text>
        </Flex>
        <Flex
          width="250px"
          height="150px"
          borderRadius="5px"
          alignItems="center"
          justifyContent="center"
          borderWidth="1px"
          borderColor="gray.350"
        >
          <Flex
            height="50px"
            width="50px"
            alignItems="center"
            justifyContent="center"
            borderWidth="1px"
            borderColor="red.400"
            borderRadius="50%"
            mr="10px"
          >
            <EditIcon fontSize="2xl" color="red.400" />
          </Flex>
          <Text fontSize="6xl" mr="5px" color="red.400">
            {incomolete}
          </Text>
          <Text fontSize="2xl" color="red.400">
            Tasks Left
          </Text>
        </Flex>
      </Flex>
    </Grid>
  );
};

export default TaskStats;
