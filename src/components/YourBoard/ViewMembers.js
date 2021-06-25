import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

const ViewMembers = ({ members }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <ViewIcon mb="5px" ml="10px" mr="10px" />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        {members?.map((member) => (
          <PopoverHeader>{member.userID.name}</PopoverHeader>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default ViewMembers;
