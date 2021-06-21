import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { InputGroup, InputLeftAddon } from "@chakra-ui/react";
import React, { useState } from "react";

export default function AddModel() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        zIndex="2000"
        position="absolute"
        right="10px"
        top="10px"
        colorScheme="pink"
      >
        Give Details
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        colorScheme="green"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add details</ModalHeader>
          <ModalForm onClose={onClose} />
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
}
const ModalForm = ({ onClose }: { onClose: () => void }) => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [areaName, setAreaName] = useState("");

  const userDetails = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, mobileNumber);
  };

  return (
    <>
      <form onSubmit={userDetails}>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Your name: </FormLabel>
            <Input
              variant="outline"
              colorScheme="cyan"
              placeholder="Enter your name here... "
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Mobile Number:</FormLabel>
            <InputGroup>
              <InputLeftAddon children="+91" />
              <Input
                type="tel"
                colorScheme="cyan"
                placeholder="Your mobile number..."
                onChange={(e) => setMobileNumber(e.target.value)}
                value={mobileNumber}
              />
            </InputGroup>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Give your area name location:</FormLabel>
            <Input
              variant="outline"
              colorScheme="cyan"
              placeholder="Enter your area name here... "
              onChange={(e) => setAreaName(e.target.value)}
              value={areaName}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button type="submit" colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </form>
    </>
  );
};
