import {
  Badge,
  Box,
  CloseButton,
  Flex,
  Text,
  useDisclosure,
  Progress,
} from "@chakra-ui/react";
import { TimeIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import RoomTaskModalDetails from "./RoomTaskModalDetails";
import { deleteRoomTaskAction } from "../../state/action/RoomTaskAction";
import { useDispatch } from "react-redux";
import { updateJoinedRoomTaskAction } from "../../state/action/JoinedRoomTaskAction";
import { chillCALL } from "../../state/reducers/JoinedRoomTaskSlice";
import moment from "moment";

const RoomTaskCard = ({ crossBtn, show, roomTask }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const deleteThisRoomTask = (taskID) => {
    dispatch(deleteRoomTaskAction(taskID));
  };
  const updateJoinedRoomTask = (taskID, complete, progress) => {
    dispatch(updateJoinedRoomTaskAction(taskID, complete, progress));
  };
  const callsak = (id) => {
    dispatch(chillCALL(id));
  };
  return (
    <Flex flexDirection="column">
      <Box
        maxW="sm"
        borderRadius="1px"
        backgroundColor="#1c2635"
        overflow="hidden"
        width="270px"
        padding="20px"
        mt="20px"
        boxShadow="lg"
        onDoubleClick={() => {
          if (show === true) {
            roomTask.complete === true
              ? updateJoinedRoomTask(roomTask._id, false, null)
              : updateJoinedRoomTask(roomTask._id, true, null);
          } else {
            return;
          }
        }}
      >
        <Flex alignItems="center" width="100%" justifyContent="space-between">
          {/* <Badge
            m="0px"
            p="2px"
            border="1px"
            bordercolor="gray.300"
            color="gray.300"
            colorScheme="white"
            fontSize="11px"
            onClick={() => {
              callsak(22);
            }}
          >
            
          </Badge> */}
          <Flex
            color="gray.400"
            alignItems="center"
            justifyContent="center"
            fontSize="13px"
          >
            <TimeIcon mr="6px" mt="2px" />
            Deadline
            {moment(roomTask.date, "YYYYMMDD").fromNow()}
          </Flex>
          {crossBtn ? (
            <CloseButton
              color="gray.300"
              onClick={() => {
                deleteThisRoomTask(roomTask._id);
              }}
            />
          ) : null}
        </Flex>
        <Flex flexDirection="column" alignItems="flex-start">
          {roomTask.complete ? (
            <Text
              as="s"
              fontSize="22px"
              fontWeight="medium"
              width="200px"
              isTruncated
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
              width="200px"
              isTruncated
              color="gray.300"
              mt="10px"
              mb="10px"
            >
              {roomTask.title}
            </Text>
          )}

          <Text
            fontSize="smaller"
            fontWeight="normal"
            width="200px"
            isTruncated
            color="gray.500"
            mt="2px"
            mb="10px"
          >
            {roomTask.description}
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          width="100%"
          justifyContent="space-between"
          mt="10px"
        >
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
              Pending <CloseIcon mb="3px" />
            </Badge>
          )}
          <RoomTaskModalDetails show={show} roomTask={roomTask} />
        </Flex>
        <Flex flexDirection="column">
          <Text color="gray.500" mb="0px">
            {roomTask.progress}%
          </Text>
          <Progress
            colorScheme="green"
            mt="6px"
            size="md"
            value={roomTask.progress}
          />
        </Flex>
      </Box>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        backgroundColor="blue.500"
        padding="10px"
      >
        <Text mr="4px" color="white">
          Assigned to
        </Text>
        {/* <Badge variant="solid">{roomTask?.assignedTaskUser.name}</Badge> */}
        <Text mr="4px" fontWeight="bold" color="white">
          {roomTask?.assignedTaskUser.name}
        </Text>
      </Flex>
    </Flex>
  );
};

export default RoomTaskCard;
