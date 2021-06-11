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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = useState("left");
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
      <Flex alignItems="center" justifyContent="center">
        <HamburgerIcon
          fontSize="32px"
          mt="10px"
          ml="10px"
          mr="10px"
          onClick={onOpen}
        />
        <Text fontSize="3xl">
          <CalendarIcon mr="10px" />
          Taski
        </Text>
      </Flex>

      <Menu>
        <MenuButton as={Button} mr="20px" rightIcon={<ChevronDownIcon />}>
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

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default DrawerComponent;
