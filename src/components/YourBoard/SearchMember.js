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
import { Flex, Input, Text, useToast } from "@chakra-ui/react";

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
  const toast = useToast();
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
        backgroundColor="#1c2635"
        mt="7px"
        onClick={onOpen}
      >
        Add Member
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent backgroundColor="#1c2635">
          <DrawerCloseButton />
          <DrawerHeader
            borderBottomWidth="1px"
            color="gray.300"
            borderColor="gray.600"
          >
            Search to add members
          </DrawerHeader>

          <DrawerBody backgroundColor="#1c2635" borderColor="gray.600">
            <Stack spacing="4px">
              <Flex>
                <Input
                  value={Email}
                  borderColor="gray.600"
                  borderRadius="0px"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Please enter members email"
                  color="gray.300"
                />
                <Button
                  onClick={SearchMembers}
                  borderColor="gray.600"
                  color="white"
                  backgroundColor="gray.600"
                  borderRadius="0px"
                >
                  Search
                </Button>
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
                      borderColor="gray.600"
                      p="10px"
                      mt="5px"
                      mb="5px"
                    >
                      <Text width="180px" color="gray.400" isTruncated>
                        {member.email}
                      </Text>
                      <Button
                        colorScheme="blue"
                        height="30px"
                        backgroundColor="gray.600"
                        onClick={() => {
                          updateMemberData(member._id).then(() => {
                            toast({
                              title: "Member Added successfully",
                              description:
                                "Now you can assign any task to this member",
                              status: "info",
                              duration: 6000,
                              isClosable: true,
                            });
                          });
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

          <DrawerFooter>
            <Button variant="outline" color="white" mr={3} onClick={onClose}>
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
