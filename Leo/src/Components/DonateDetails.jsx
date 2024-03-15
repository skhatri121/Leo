import React from "react";
import {
  useDisclosure,
  Button,
  Drawer,
  Box,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Text,
} from "@chakra-ui/react";

const DonateDetails = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Donate
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="primary.1" color="primary.2">
          <DrawerCloseButton />
          <DrawerHeader fontSize="25px">Donate here</DrawerHeader>
          <DrawerBody>
            <Box textAlign="center"></Box>
            <Box textAlign="center" mt="15px">
              <Text as="u">Bank Details:</Text>
              <Text>
                <b> LEO DISTRICT COUNCIL 325 M NEPAL </b>
              </Text>
              <Text>Bank Name: Nepal Investment Mega Bank Limited</Text>
              <Text>Bank a/c no: 21701050008884</Text>
              <Text>Branch Name: Lekhnath Branch</Text>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DonateDetails;
