import {
  Badge,
  Box,
  Button,
  CloseButton,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  TimeIcon,
  ViewIcon,
  CheckIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import TaskModal from "./TaskModal";

const TaskCard = ({ task, date, deleteTask, updateTaskStatus }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      maxW="sm"
      borderRadius="10px"
      backgroundColor=""
      overflow="hidden"
      width="270px"
      padding="20px"
      mt="20px"
      borderWidth="1px"
      // backgroundColor="gray.50"
      boxShadow="md"
      onDoubleClick={() => {
        task.complete === true
          ? updateTaskStatus(task._id, "false")
          : updateTaskStatus(task._id, "true");
      }}
    >
      <TaskModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        task={task}
        date={date}
      />
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
          {date}
        </Badge>

        <CloseButton
          onClick={() => {
            deleteTask(task._id);
          }}
        />
      </Flex>
      <Flex flexDirection="column" alignItems="flex-start">
        {task.complete ? (
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
            {task.title}
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
            {task.title}
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
          {task.description}
        </Text>
      </Flex>
      <Flex
        alignItems="center"
        width="100%"
        justifyContent="space-between"
        mt="10px"
      >
        {task.complete ? (
          <Badge
            m="0px"
            backgroundColor="blue.300"
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
        <Button
          fontSize="xs"
          size="sm"
          isTruncated
          onClick={() => {
            onOpen();
          }}
          borderWidth="0px"
          borderColor="gray.400"
          color="gray.400"
          backgroundColor=""
          borderRadius="2px"
        >
          <Text>See Details</Text> <ArrowRightIcon mt="3px" ml="3px" />
        </Button>
      </Flex>
    </Box>
  );
};

export default TaskCard;
