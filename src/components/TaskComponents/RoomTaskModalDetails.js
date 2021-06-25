import { ArrowRightIcon, CloseIcon, TimeIcon } from "@chakra-ui/icons";
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

const RoomTaskModalDetails = ({ show }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        backgroundColor=""
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
        <ModalContent>
          <ModalHeader>Task Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody width="100%">
            <Flex flexDirection="column" alignItems="flex-start" width="100%">
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
                {/* {date} */}
                11/23/21
              </Badge>
              {/* {task.complete ? (
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
        ) : ( */}
              <Text
                fontSize="22px"
                fontWeight="medium"
                width="200px"
                isTruncated
                color="gray.500"
                mt="10px"
                mb="10px"
              >
                {/* {task.title} */}
                this is a title
              </Text>
              {/* )} */}
              <Text fontSize="14px" mb="10px">
                This is a description and an gobal vendor is used by ami
              </Text>
              {/* {task.complete ? (
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
        ) : ( */}
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
              {/* )} */}
              <Flex flexDirection="column" width="100%">
                {show ? (
                  <>
                    <Text color="blue.500" fontWeight="semibold" mt="10px">
                      Set Task Process
                    </Text>
                    <Slider aria-label="slider-ex-4" defaultValue={30}>
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
                    <Text color="blue.500" fontWeight="semibold" mt="10px">
                      Task Process
                    </Text>
                    <Progress
                      colorScheme="blue"
                      size="md"
                      value={20}
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
                <Badge variant="solid">Anirban Roy</Badge>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
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
