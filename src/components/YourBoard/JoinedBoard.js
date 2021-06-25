import { Badge, Box, Flex, Grid, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const JoinedBoard = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" w="100%">
      <Link to="/room">
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
            DimChai
          </Text>
        </Flex>
      </Link>
      <Link to="/room">
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
          <Avatar name="RawCha" backgroundColor="#a7c5ff" color="white" />
          <Text
            fontWeight="bold"
            fontSize="large"
            color="gray"
            mt="5px"
            ml="10px"
          >
            RawCha
          </Text>
        </Flex>
      </Link>
    </Grid>
  );
};

export default JoinedBoard;
