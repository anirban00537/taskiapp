import { Button } from "@chakra-ui/button";
import { FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { AddIcon } from "@chakra-ui/icons";
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
import { Input, Select, Textarea } from "@chakra-ui/react";
import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { createRoomTaskWithRoomAdminIDAction } from "../../state/action/RoomTaskAction";
const AddYourRoomTask = ({ members, roomId, adminUid }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [assignedTaskUser, setassignedTaskUser] = useState();
  const uid = localStorage.getItem("uid");
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const submitRoomTask = () => {
    dispatch(
      createRoomTaskWithRoomAdminIDAction(
        {
          roomId,
          adminUid,
          assignedTaskUser,
          date: startDate,
          title,
          description,
        },
        adminUid,
        roomId
      )
    );
  };
  return (
    <>
      <Button
        ml="10px"
        leftIcon={<AddIcon />}
        color="gray.500"
        mt="7px"
        onClick={onOpen}
      >
        Create New Task
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Create New Task</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="username">Task</FormLabel>
                <Input
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  placeholder="Please enter your task"
                />
              </Box>
              <Select
                placeholder="Assign Task To"
                onChange={(e) => {
                  setassignedTaskUser(e.target.value);
                }}
              >
                {members?.map((member) => (
                  <option value={member.userID?._id}>
                    {member.userID?.name}
                  </option>
                ))}
              </Select>
              <Box>
                <FormLabel htmlFor="username">Description</FormLabel>
                <Textarea
                  value={description}
                  onChange={(e) => {
                    setdescription(e.target.value);
                  }}
                  placeholder="Here is a sample placeholder"
                  size="sm"
                />
              </Box>

              <Box>
                <FormLabel>Select Date</FormLabel>
                <Box border="1px" borderColor="gray.200" p="10px">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </Box>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                submitRoomTask();
              }}
            >
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AddYourRoomTask;
