import { useState } from "react";
import {
  Button,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  useColorMode,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  HamburgerIcon,
  SunIcon,
  MoonIcon,
} from "@chakra-ui/icons";
import { logoutFunction } from "../../state/action/AuthAction";
import { useDispatch } from "react-redux";
import { CalendarIcon } from "@chakra-ui/icons";

const DrawerComponent = () => {
  const dispatch = useDispatch();
  const makeUserLogout = () => {
    dispatch(logoutFunction());
  };
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      alignItems="center"
      height="80px"
      borderBottomWidth="1px"
      borderColor="gray.350"
      justifyContent="space-between"
    >
      <Flex alignItems="center" ml="30px" justifyContent="flex-start">
        <Box fontSize="32px" fontWeight="bold" color="#70a1ff">
          Taski.
        </Box>
      </Flex>
      <Flex alignItems="center" ml="30px" justifyContent="flex-start">
        <Box ml="20px" fontWeight="bold" fontSize="19px" color="#70a1ff">
          <Link to="/">Home</Link>
        </Box>
        <Box ml="20px" fontWeight="bold" fontSize="19px" color="#70a1ff">
          <Link to="/personal">Personal</Link>
        </Box>
      </Flex>

      <Menu>
        <MenuButton
          as={Button}
          mr="20px"
          backgroundColor="white"
          rightIcon={<ChevronDownIcon />}
        >
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem onClick={makeUserLogout}>Logout</MenuItem>
          <MenuItem>
            <Button onClick={toggleColorMode}>
              Toggle to Change Theme
              {colorMode === "light" ? (
                <MoonIcon ml="6px" />
              ) : (
                <SunIcon ml="6px" />
              )}
            </Button>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default DrawerComponent;
