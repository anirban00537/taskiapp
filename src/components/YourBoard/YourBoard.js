import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
const YourBoard = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" w="100%">
      <Box
        p="10px"
        mt="5"
        borderRadius="5px"
        w="90%"
        borderWidth="1px"
        backgroundColor="white"
      >
        <Flex
          alignItems="center"
          justifyContent="space-around"
          m="10px"
          flexDirection="row"
        >
          <Avatar name="Nello" backgroundColor="#a7c5ff" color="white" />
          <Box>
            <Text fontWeight="bold" fontSize="large" color="gray.600" mt="5px">
              BrainboxBD
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box
        p="10px"
        mt="5"
        borderRadius="5px"
        w="90%"
        borderWidth="1px"
        backgroundColor="white"
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
        p="10px"
        mt="5"
        borderRadius="5px"
        w="90%"
        borderWidth="1px"
        backgroundColor="white"
      >
        <Flex
          alignItems="center"
          justifyContent="space-around"
          m="10px"
          flexDirection="row"
        >
          <Avatar name="Rafello" backgroundColor="#a7c5ff" color="white" />
          <Box>
            <Text fontWeight="bold" fontSize="large" color="gray.600" mt="5px">
              <Link to="/room">Rafello</Link>
            </Text>
          </Box>
        </Flex>
      </Box>
    </Grid>
  );
};

export default YourBoard;
