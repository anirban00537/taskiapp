import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { InfoIcon, CheckIcon, CloseIcon, TimeIcon } from "@chakra-ui/icons";
const TaskModal = ({ isOpen, date, onClose, task }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="blackAlpha.500">
          <InfoIcon mb="6px" mr="4px" />
          Task Details
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDirection="column" alignItems="flex-start">
            <Badge m="0px" p="4px">
              <TimeIcon mr="6px" />
              {date}
            </Badge>
            {task.complete ? (
              <Text
                as="s"
                fontSize="2xl"
                fontWeight="bold"
                width="280px"
                color="gray.300"
                mt="10px"
                mb="5px"
              >
                {task.title}
              </Text>
            ) : (
              <Text
                fontSize="2xl"
                fontWeight="bold"
                width="280px"
                color="gray.300"
                mt="10px"
                mb="5px"
              >
                {task.title}
              </Text>
            )}
            <Text
              fontSize="medium"
              fontWeight="semibold"
              mb="10px"
              color="gray.300"
            >
              {task.description}
            </Text>
            {task.complete ? (
              <Badge m="0px" colorScheme="green" p="5px">
                Completed <CheckIcon mb="3px" />
              </Badge>
            ) : (
              <Badge m="0px" colorScheme="red" p="5px">
                Not Completed <CloseIcon mb="3px" />
              </Badge>
            )}
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TaskModal;
