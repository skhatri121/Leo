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
            <Box textAlign="center">
              <Text as="u">Esewa Id:</Text>
              <Text>9860339830</Text>
            </Box>
            <Box textAlign="center" mt="15px">
              <Text as="u">Bank Details:</Text>
              <Text>Bank Name: NIC ASIA BANK</Text>
              <Text>Bank a/c no: 1685750960149001</Text>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DonateDetails;
