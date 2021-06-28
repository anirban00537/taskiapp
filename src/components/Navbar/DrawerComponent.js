import { useState } from "react";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  useColorMode,
  Box,
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import {
  ChevronDownIcon,
  HamburgerIcon,
  StarIcon,
  SunIcon,
  MoonIcon,
  EditIcon,
} from "@chakra-ui/icons";
import { logoutFunction } from "../../state/action/AuthAction";
import { useDispatch } from "react-redux";
import { CalendarIcon } from "@chakra-ui/icons";

const DrawerComponent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const makeUserLogout = () => {
    dispatch(logoutFunction());
    history.push("/");
  };
  const { colorMode, toggleColorMode } = useColorMode();
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  return (
    <Flex
      alignItems="center"
      height="80px"
      justifyContent="space-between"
      backgroundColor="#1c2635"
    >
      <Flex alignItems="center" ml="30px" justifyContent="flex-start">
        <Box fontSize="32px" fontWeight="bold" color="#70a1ff">
          Taski.
        </Box>
      </Flex>
      <Flex alignItems="center" ml="30px" justifyContent="flex-start">
        <Box ml="20px" fontWeight="bold" fontSize="19px" color="#70a1ff">
          <StarIcon mr="5px" mb="3px" />
          <Link to="/">Home</Link>
        </Box>
        <Box ml="20px" fontWeight="bold" fontSize="19px" color="#70a1ff">
          <EditIcon mr="5px" mb="3px" />
          <Link to="/personal">Personal</Link>
        </Box>
      </Flex>

      <Menu>
        <MenuButton
          as={Button}
          mr="20px"
          backgroundColor="#1c2635"
          color="gray.300"
          rightIcon={<ChevronDownIcon />}
        >
          {name}
        </MenuButton>
        <MenuList>
          <MenuItem>
            {" "}
            <Text>{email}</Text>
          </MenuItem>
          <MenuItem onClick={makeUserLogout}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default DrawerComponent;
