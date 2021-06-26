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
  CloseButton,
  Flex,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { removeMemberFromRoomApi } from "../../state/Api/Room";
import { useDispatch } from "react-redux";
import { updateRoom } from "../../state/reducers/RoomSlice";

const ViewMembers = ({ members, roomID }) => {
  const dispatch = useDispatch();

  const removeMember = async (userDocumentId) => {
    const updated = members.filter((member) => member._id !== userDocumentId);
    console.log(updated, "updated data");
    const { data } = await removeMemberFromRoomApi(roomID, updated);
    console.log(data[0], "delete data");
    dispatch(updateRoom(data[0]));
  };

  return (
    <Popover>
      <PopoverTrigger>
        <ViewIcon mb="5px" ml="10px" mr="10px" />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        {members?.map((member) => (
          <PopoverHeader>
            <Flex alignItems="center">
              <Text>{member.userID?.name}</Text>

              <CloseButton
                onClick={() => {
                  removeMember(member._id);
                }}
              />
            </Flex>
          </PopoverHeader>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default ViewMembers;
