import { Badge, Box, Flex, Grid, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
const JoinedBoard = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" w="100%">
      <Box
        p="10px"
        mt="5"
        boxShadow="md"
        borderRadius="5px"
        w="90%"
        borderWidth="1px"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          m="10px"
          flexDirection="column"
        >
          <Avatar name="Brainbox" />
          <Text fontWeight="bold" fontSize="2xl" mt="10px">
            BrainboxBD
          </Text>
          <Badge variant="outline" colorScheme="green">
            Total members 7
          </Badge>
        </Flex>
      </Box>
      <Box
        p="10px"
        mt="5"
        boxShadow="md"
        borderRadius="5px"
        w="90%"
        borderWidth="1px"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          m="10px"
          flexDirection="column"
        >
          <Avatar name="NiroPic" />
          <Text fontWeight="bold" fontSize="2xl" mt="10px">
            NiroPic
          </Text>
          <Badge variant="outline" colorScheme="green">
            Total members 7
          </Badge>
        </Flex>
      </Box>
      <Box
        p="10px"
        mt="5"
        boxShadow="md"
        borderRadius="5px"
        w="90%"
        borderWidth="1px"
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          m="10px"
          flexDirection="column"
        >
          <Avatar name="Brainbox" src="https://bit.ly/dan-abramov" />
          <Text fontWeight="bold" fontSize="2xl" mt="10px">
            Astro
          </Text>
          <Badge variant="outline" colorScheme="green">
            Total members 4
          </Badge>
        </Flex>
      </Box>
    </Grid>
  );
};

export default JoinedBoard;
