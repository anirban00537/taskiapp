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
import { AddIcon } from "@chakra-ui/icons";
import { FormLabel } from "@chakra-ui/form-control";
import { Input, Textarea } from "@chakra-ui/react";

import { Button, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
const SearchMember = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Email, setEmail] = useState("");
  return (
    <>
      <Button
        ml="10px"
        leftIcon={<AddIcon />}
        color="gray.500"
        mt="7px"
        onClick={onOpen}
      >
        Add Member
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Search Room Member
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="username">Task</FormLabel>
                <Input
                  value={Email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Please enter your task"
                />
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
                // submitTask;
              }}
            >
              add
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SearchMember;
