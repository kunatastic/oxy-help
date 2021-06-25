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
import React, { useEffect, useState } from "react";
import { useMap, useMapEvents } from "react-leaflet";
import { LatLngExpression, Map } from "leaflet";
import { MdLocationSearching } from "react-icons/md";
import axios from "axios";

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

      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
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
  const [cylinders, setCylinders] = useState(0);
  const [position, setPosition] = useState({
    lat: 0,
    lng: 0,
  });

  const userDetails = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      name,
      mobileNumber,
      areaName,
      position,
      cylinders,
    };
    console.log(payload);

    const newLocation = await axios.post(
      "http://localhost:5000/auth/map/newLocation",
      payload
    );
    console.log(newLocation);
  };

  const map: Map = useMap();

  const coordinatesGrab = () => {
    var e: any = map.locate();
    setPosition(e._lastCenter);
    console.log(position);
  };

  // eslint-disable-next-line
  useEffect(() => {
    coordinatesGrab();
  }, []);

  // Object { lat: 27.8243602, lng: 79.83179299999999 }

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

          <FormControl mt={4}>
            <FormLabel>Give your location coordinates:</FormLabel>
            <Input
              variant="outline"
              colorScheme="cyan"
              disabled
              placeholder="Latitude"
              value={position.lat}
              width="40%"
              mr={2}
            />
            <Input
              variant="outline"
              disabled
              colorScheme="cyan"
              placeholder="Longitude"
              value={position.lng}
              width="40%"
              mr={2}
            />
            <Button onClick={coordinatesGrab} width="16%" mt={-1}>
              <MdLocationSearching />
            </Button>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Number of Cylinders: </FormLabel>
            <Input
              variant="outline"
              colorScheme="cyan"
              type="number"
              placeholder="Enter your name here... "
              onChange={(e) => setCylinders(parseInt(e.target.value))}
              value={cylinders}
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
