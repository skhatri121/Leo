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

  const filteredLinks = links.filter((link) => link.title !== "Gallery");

  const updatedLinks = [
    ...filteredLinks,
    {
      title: "Photo Gallery",
      to: "/gallery/photo",
    },
    {
      title: "Video Gallery",
      to: "/gallery/video",
    },
  ];

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
              {updatedLinks.map((link, index) => (
                <Link
                  key={link.to}
                  href={link.to}
                  color={location.pathname === link.to ? "primary.4" : "white"}
                  _hover={{ color: "primary.9" }}
                  onClick={() => navigate(link.to)}
                  borderBottom={
                    index !== updatedLinks.length ? "1px solid white" : ""
                  }
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
