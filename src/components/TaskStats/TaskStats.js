import "./TaskStats.css";
import React from "react";

import AddTask from "../AddTask/AddTask";
import { Flex, Grid, Text } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import {} from "@chakra-ui/icons";

const TaskStats = ({
  showCreate,
  total,
  completed,
  incomolete,
  companyName,
}) => {
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
          height="130px"
          borderRadius="0px"
          alignItems="center"
          justifyContent="center"
          boxShadow="md"
          backgroundColor=""
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
          backgroundColor=""
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
          {/* <Text fontSize="4xl" mr="5px" fontWeight="medium" color="#70a1ff">
            {total}
          </Text> */}
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
          backgroundColor=""
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
          backgroundColor=""
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
      </Flex>
    </Grid>
  );
};

export default TaskStats;
