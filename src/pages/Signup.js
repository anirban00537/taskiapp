import "./Auth.css";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
const Signup = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [msg, setmsg] = useState();
  const [check, setcheck] = useState(false);
  const hamdleSignup = async () => {
    const { data } = await axios.post("http://localhost:5000/signup", {
      name,
      email,
      password,
    });
    console.log(data);
    if (data.message) {
      setmsg(data);
    } else {
      setmsg(data.error);
    }
  };
  return (
    <Box height="100vh" width="100%">
      <Flex
        alignItems="center"
        height="100%"
        justifyContent="center"
        flexDirection="column"
      >
        <Text fontSize="small" p="10px" borderWidth="1px" borderRadius="10px">
          {msg}
        </Text>
        <Input
          variant="filled"
          width="300px"
          m="10px"
          placeholder="Name"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <Input
          variant="filled"
          width="300px"
          m="10px"
          placeholder="Email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <Input
          variant="filled"
          width="300px"
          m="10px"
          placeholder="Password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <Button
          colorScheme="teal"
          width="300px"
          variant="outline"
          onClick={hamdleSignup}
        >
          Signup
        </Button>
      </Flex>
    </Box>
  );
};

export default Signup;
