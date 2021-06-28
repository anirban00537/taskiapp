import {
  ArrowRightIcon,
  CheckIcon,
  CloseIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import { useDispatch } from "react-redux";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Flex,
  Badge,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Progress,
} from "@chakra-ui/react";
import moment from "moment";
import { updateJoinedRoomTaskAction } from "../../state/action/JoinedRoomTaskAction";

const RoomTaskModalDetails = ({ show, roomTask }) => {
  console.log("roomTask", roomTask);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const updateJoinedRoomTask = (taskID, complete, progress) => {
    dispatch(updateJoinedRoomTaskAction(taskID, complete, progress));
  };
  return (
    <>
      <Button
        fontSize="xs"
        size="sm"
        isTruncated
        onClick={onOpen}
        borderWidth="0px"
        borderColor="gray.400"
        color="gray.400"
        backgroundColor="gray.800"
        borderRadius="2px"
      >
        <Text>See Details</Text> <ArrowRightIcon mt="3px" ml="3px" />
      </Button>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent backgroundColor="gray.800" color="white">
          <ModalHeader>Task Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody width="100%">
            <Flex flexDirection="column" alignItems="flex-start" width="100%">
              {roomTask.complete ? (
                <Badge
                  m="0px"
                  backgroundColor="#2ecc71"
                  borderRadius="6px"
                  fontSize="x-small"
                  variant="solid"
                  p="5px"
                  pt="6px"
                >
                  Completed <CheckIcon mb="3px" />
                </Badge>
              ) : (
                <Badge
                  m="0px"
                  borderRadius="6px"
                  fontSize="x-small"
                  backgroundColor="red.300"
                  variant="solid"
                  p="5px"
                  pt="6px"
                >
                  incompleted <CloseIcon mb="3px" />
                </Badge>
              )}
              <Flex
                m="0px"
                p="2px"
                border="1px"
                color="#70a1ff"
                fontSize="11px"
                alignItems="center"
                justifyContent="center"
                mt="10px"
              >
                <TimeIcon ml="6px" mr="6px" />
                Deadline
                {moment(roomTask.date, "YYYYMMDD").fromNow()}
              </Flex>
              {roomTask.complete ? (
                <Text
                  as="s"
                  fontSize="22px"
                  fontWeight="medium"
                  width="100%"
                  color="gray.300"
                  mt="10px"
                  mb="10px"
                >
                  {roomTask.title}
                </Text>
              ) : (
                <Text
                  fontSize="22px"
                  fontWeight="medium"
                  width="100%"
                  color="gray.300"
                  mt="10px"
                  mb="10px"
                >
                  {roomTask.title}
                  this is a title
                </Text>
              )}
              <Text fontSize="14px" mb="10px">
                {roomTask.description}
              </Text>

              <Flex flexDirection="column" width="100%">
                {show ? (
                  <>
                    <Text color="gray.300" fontWeight="semibold" mt="10px">
                      Set Task Progress
                    </Text>

                    {roomTask.complete ? (
                      <>
                        <Text color="gray.500" mb="0px">
                          {roomTask.progress}%
                        </Text>
                        <Slider
                          aria-label="slider-ex-4"
                          defaultValue={roomTask.progress}
                          onChangeEnd={(val) => {
                            console.log("value type");
                            updateJoinedRoomTask(roomTask._id, null, val);
                          }}
                          isDisabled
                        >
                          <SliderTrack bg="blue.100">
                            <SliderFilledTrack bg="blue" />
                          </SliderTrack>
                          <SliderThumb boxSize={6}>
                            <Box color="tomato" />
                          </SliderThumb>
                        </Slider>
                      </>
                    ) : (
                      <>
                        <Text color="gray.500" mb="0px">
                          {roomTask.progress}%
                        </Text>
                        <Slider
                          aria-label="slider-ex-4"
                          defaultValue={roomTask.progress}
                          onChangeEnd={(val) => {
                            updateJoinedRoomTask(roomTask._id, null, val);
                            if (val === 100) {
                              updateJoinedRoomTask(roomTask._id, true, null);
                            }
                          }}
                        >
                          <SliderTrack bg="blue.100">
                            <SliderFilledTrack bg="blue" />
                          </SliderTrack>
                          <SliderThumb boxSize={6}>
                            <Box color="tomato" />
                          </SliderThumb>
                        </Slider>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <Text color="gray.300" fontWeight="semibold" mt="10px">
                      Task Process
                    </Text>
                    <Progress
                      colorScheme="green"
                      size="md"
                      value={roomTask.progress}
                      mt="14px"
                    />
                  </>
                )}
              </Flex>
              <Flex
                mt="10px"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
              >
                <Text mr="4px">Assigned to</Text>
                <Badge variant="solid">{roomTask?.assignedTaskUser.name}</Badge>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RoomTaskModalDetails;
