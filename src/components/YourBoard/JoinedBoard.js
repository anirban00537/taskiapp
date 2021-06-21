import { Badge, Box, Flex, Grid, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
const JoinedBoard = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" w="100%">
      <Box
        backgroundColor="white"
        p="10px"
        mt="5"
        borderRadius="5px"
        w="90%"
        borderWidth="1px"
      >
        <Flex
          alignItems="center"
          justifyContent="space-around"
          m="10px"
          flexDirection="row"
        >
          <Avatar name="DimChai" backgroundColor="#a7c5ff" color="white" />
          <Box>
            <Text fontWeight="bold" fontSize="large" color="gray.600" mt="5px">
              DimChai
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box
        backgroundColor="white"
        p="10px"
        mt="5"
        borderRadius="5px"
        w="90%"
        borderWidth="1px"
      >
        <Flex
          alignItems="center"
          justifyContent="space-around"
          m="10px"
          flexDirection="row"
        >
          <Avatar name="DimChai" backgroundColor="#a7c5ff" color="white" />
          <Box>
            <Text fontWeight="bold" fontSize="large" color="gray.600" mt="5px">
              DimChai
            </Text>
          </Box>
        </Flex>
      </Box>
    </Grid>
  );
};

export default JoinedBoard;
