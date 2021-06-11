import "./Auth.css";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
const Signup = () => {
  return (
    <Box height="100vh" width="100%">
      <Flex
        alignItems="center"
        height="100%"
        justifyContent="center"
        flexDirection="column"
      >
        <Input variant="filled" width="300px" m="10px" placeholder="Name" />
        <Input variant="filled" width="300px" m="10px" placeholder="Email" />
        <Input variant="filled" width="300px" m="10px" placeholder="Password" />
        <Button colorScheme="teal" width="300px" variant="outline">
          Button
        </Button>
      </Flex>
    </Box>
  );
};

export default Signup;
