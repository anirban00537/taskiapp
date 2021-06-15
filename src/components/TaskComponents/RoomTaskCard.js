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
import { Kbd } from "@chakra-ui/react";
const RoomTaskCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderColor="gray.350"
      borderRadius="lg"
      overflow="hidden"
      width="340px"
      padding="20px"
      mt="20px"
    >
      <Flex alignItems="center" width="100%" justifyContent="space-between">
        <Badge
          m="0px"
          p="4px"
          border="1px"
          borderColor="gray.400"
          color="gray.400"
          colorScheme="white"
        >
          <TimeIcon mr="6px" />
          22.3.21
        </Badge>

        <Flex alignItems="flex-start" justifyContent="flex-start">
          <Text fontSize="x-small" mr="10px">
            Asiigned To
          </Text>
          <Badge variant="outline" colorScheme="blue">
            Anirban Roy
          </Badge>
        </Flex>
        {/* <CloseButton /> */}
      </Flex>
      <Flex flexDirection="column" alignItems="flex-start">
        <Text
          fontSize="medium"
          fontWeight="medium"
          width="280px"
          isTruncated
          color="gray.500"
          mt="10px"
          mb="10px"
        >
          Task Title
        </Text>

        <Badge
          m="0px"
          colorScheme="white"
          border="1px"
          borderColor="green.400"
          color="green.400"
          p="5px"
        >
          Completed <CheckIcon mb="3px" />
        </Badge>
      </Flex>
      <Flex
        alignItems="center"
        width="100%"
        justifyContent="space-between"
        mt="10px"
      >
        <Text fontSize="xs" isTruncated color="gray.400" mt="5px">
          <ViewIcon mb="3px" /> Double Click To Done/Undone
        </Text>
        <Button
          fontSize="xs"
          size="sm"
          isTruncated
          onClick={() => {
            onOpen();
          }}
        >
          <Text>See Details</Text> <ArrowRightIcon mt="3px" ml="3px" />
        </Button>
      </Flex>
    </Box>
  );
};

export default RoomTaskCard;
