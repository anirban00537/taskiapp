import {
  Badge,
  Box,
  Button,
  CloseButton,
  Flex,
  Text,
  useDisclosure,
  Select,
  Progress,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  TimeIcon,
  ViewIcon,
  CheckIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import RoomTaskModalDetails from "./RoomTaskModalDetails";
import { deleteRoomTaskAction } from "../../state/action/RoomTaskAction";
import { useDispatch } from "react-redux";

const RoomTaskCard = ({ crossBtn, show, roomTask }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const deleteThisRoomTask = (taskID) => {
    dispatch(deleteRoomTaskAction(taskID));
  };
  return (
    <Box
      maxW="sm"
      borderRadius="1px"
      backgroundColor="#9e9e9e0a"
      overflow="hidden"
      width="270px"
      padding="20px"
      mt="20px"
      // borderWidth="1px"
      // borderColor="gray.100"
      // backgroundColor="gray.50"

      // backgroundColor="gray.50"
      boxShadow="lg"
      // onDoubleClick={() => {
      //   task.complete === true
      //     ? updateTaskStatus(task._id, "false")
      //     : updateTaskStatus(task._id, "true");
      // }}
    >
      {/* <TaskModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        task={task}
        date={date}
      /> */}
      <Flex alignItems="center" width="100%" justifyContent="space-between">
        <Badge
          m="0px"
          p="2px"
          border="1px"
          borderColor="#70a1ff"
          color="#70a1ff"
          colorScheme="white"
          fontSize="11px"
        >
          <TimeIcon mr="6px" />
          {roomTask.date}
        </Badge>
        {crossBtn ? (
          <CloseButton
            color="blue.400"
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
            color="gray.500"
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
            color="gray.500"
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
            backgroundColor="#91dc91"
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
            backgroundColor="blue.300"
            variant="solid"
            p="5px"
            pt="6px"
          >
            incompleted <CloseIcon mb="3px" />
          </Badge>
        )}
        <RoomTaskModalDetails show={show} />
      </Flex>
      {roomTask.complete ? (
        <Progress colorScheme="blue" size="md" value={100} mt="14px" />
      ) : (
        <Progress
          colorScheme="blue"
          size="md"
          value={roomTask.progress}
          mt="14px"
        />
      )}

      <Flex mt="10px" alignItems="center" justifyContent="space-between">
        <Text mr="4px">Assigned to</Text>
        <Badge variant="solid">{roomTask?.assignedTaskUser.name}</Badge>
      </Flex>
    </Box>
  );
};

export default RoomTaskCard;
