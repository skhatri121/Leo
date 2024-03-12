import React from "react";
import {
  useDisclosure,
  Button,
  Drawer,
  Box,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate, useLocation } from "react-router-dom";
const HamburgerMenu = ({ links }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const location = useLocation();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <HamburgerIcon />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="primary.1" color="white" p="50px 30px">
          <DrawerCloseButton color="primary.2" />
          <Box bg="primary.1">
            <VStack spacing={4} align="left">
              {links.map((link, index) => (
                <Link
                  key={link.to}
                  href={link.to}
                  color={location.pathname === link.to ? "primary.4" : "white"}
                  _hover={{ color: "primary.9" }}
                  onClick={() => navigate(link.to)}
                  borderBottom={index !== links.length ? "1px solid white" : ""}
                >
                  {link.title}
                </Link>
              ))}
            </VStack>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
