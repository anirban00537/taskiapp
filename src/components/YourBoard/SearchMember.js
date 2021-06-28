import { Box, Stack } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { AddIcon } from "@chakra-ui/icons";
import { FormLabel } from "@chakra-ui/form-control";
import { Flex, Input, Text, Textarea } from "@chakra-ui/react";

import { Button, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { searchMember } from "../../state/Api/User";
import { updateRoomMemberApi } from "../../state/Api/Room";
import { useDispatch } from "react-redux";
import { updateRoom } from "../../state/reducers/RoomSlice";
const SearchMember = ({ roomID }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Email, setEmail] = useState("");
  const [members, setmembers] = useState([]);
  const SearchMembers = async () => {
    const { data } = await searchMember(Email);
    console.log(data, "member");
    setmembers(data);
  };
  const dispatch = useDispatch();
  const updateMemberData = async (userID) => {
    const { data } = await updateRoomMemberApi(roomID, {
      userID,
    });

    dispatch(updateRoom(data[0]));
  };
  return (
    <>
      <Button
        ml="10px"
        leftIcon={<AddIcon />}
        color="gray.300"
        backgroundColor="gray.700"
        mt="7px"
        onClick={onOpen}
      >
        Add Member
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Search to add members
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="4px">
              <Flex>
                <Input
                  value={Email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Please enter members email"
                />
                <Button onClick={SearchMembers}>Search</Button>
              </Flex>
              {members.length === 0 ? (
                ""
              ) : (
                <Flex width="100%" flexDirection="column">
                  <Text color="gray.400" fontSize="10px" mt="20px">
                    Search Results
                  </Text>
                  {members.map((member) => (
                    <Flex
                      justifyContent="space-around"
                      width="100%"
                      alignItems="center"
                      borderWidth="1px"
                      p="10px"
                      mt="5px"
                      mb="5px"
                    >
                      <Text width="180px" isTruncated>
                        {member.email}
                      </Text>
                      <Button
                        colorScheme="blue"
                        height="30px"
                        onClick={() => {
                          updateMemberData(member._id);
                        }}
                      >
                        Add
                      </Button>
                    </Flex>
                  ))}
                </Flex>
              )}
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={() => {}}>
              add
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SearchMember;
